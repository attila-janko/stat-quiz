const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store"
};

function corsHeaders(origin, env) {
  const allowedOrigin = env.ALLOWED_ORIGIN || "*";
  const normalizedOrigin = origin?.replace(/\/$/, "");
  const allowedOrigins = allowedOrigin
    .split(",")
    .map(value => value.trim().replace(/\/$/, ""))
    .filter(Boolean);
  const allowOrigin = !origin
    || allowedOrigins.includes("*")
    || allowedOrigins.includes(normalizedOrigin)
    || normalizedOrigin?.endsWith(".github.io")
    ? (origin || "*")
    : allowedOrigins[0] || "*";

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

function json(data, init = {}, origin, env) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      ...JSON_HEADERS,
      ...corsHeaders(origin, env),
      ...(init.headers || {})
    }
  });
}

function getClientIp(request) {
  return request.headers.get("CF-Connecting-IP")
    || request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim()
    || "unknown";
}

function getDay(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

async function sha256(value) {
  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return [...new Uint8Array(digest)]
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function getVisitorHash(request, env, day) {
  const ip = getClientIp(request);
  const userAgent = request.headers.get("User-Agent") || "unknown";
  const salt = env.TRACKING_SALT || "change-me";
  return sha256(`${salt}:${day}:${ip}:${userAgent}`);
}

function normalizeEvent(value) {
  const allowed = new Set(["page_view", "topic_change", "answer"]);
  return allowed.has(value) ? value : "page_view";
}

function asText(value, fallback = null, maxLength = 300) {
  if (typeof value !== "string") return fallback;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : fallback;
}

function asBooleanInteger(value) {
  if (value === true) return 1;
  if (value === false) return 0;
  return null;
}

async function readBody(request) {
  try {
    const text = await request.text();
    return text ? JSON.parse(text) : {};
  } catch {
    return {};
  }
}

async function recordVisit(request, env, origin, body = null) {
  body = body || await readBody(request);
  const day = getDay();
  const visitorHash = await getVisitorHash(request, env, day);
  const event = normalizeEvent(body.event);
  const path = asText(body.path, "/", 500);
  const topic = asText(body.topic);
  const questionTitle = asText(body.questionTitle);
  const correct = asBooleanInteger(body.correct);
  const country = asText(request.cf?.country, null, 2);

  await env.DB.prepare(`
    INSERT INTO visit_events (
      day,
      visitor_hash,
      event,
      path,
      topic,
      question_title,
      correct,
      country
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(day, visitorHash, event, path, topic, questionTitle, correct, country).run();

  return json({ ok: true }, { status: 202 }, origin, env);
}

async function recordVisitFromQuery(request, env, origin) {
  const url = new URL(request.url);
  const encoded = url.searchParams.get("d");
  let body = {};

  try {
    body = encoded ? JSON.parse(encoded) : {};
  } catch {
    body = {};
  }

  await recordVisit(request, env, origin, body);

  return new Response(null, {
    status: 204,
    headers: {
      "Cache-Control": "no-store",
      ...corsHeaders(origin, env)
    }
  });
}

async function getSummary(env, origin) {
  const daily = await env.DB.prepare(`
    SELECT
      day,
      COUNT(*) AS events,
      COUNT(DISTINCT visitor_hash) AS unique_visitors,
      SUM(CASE WHEN event = 'page_view' THEN 1 ELSE 0 END) AS page_views,
      SUM(CASE WHEN event = 'answer' THEN 1 ELSE 0 END) AS answers
    FROM visit_events
    GROUP BY day
    ORDER BY day DESC
    LIMIT 30
  `).all();

  const topics = await env.DB.prepare(`
    SELECT
      topic,
      COUNT(*) AS events,
      COUNT(DISTINCT visitor_hash) AS unique_visitors,
      SUM(CASE WHEN event = 'answer' THEN 1 ELSE 0 END) AS answers,
      SUM(CASE WHEN event = 'answer' AND correct = 1 THEN 1 ELSE 0 END) AS correct_answers
    FROM visit_events
    WHERE topic IS NOT NULL
    GROUP BY topic
    ORDER BY events DESC
  `).all();

  return json({
    daily: daily.results || [],
    topics: topics.results || []
  }, {}, origin, env);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin, env) });
    }

    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/summary") {
      return getSummary(env, origin);
    }

    if (request.method === "GET" && url.pathname === "/ping") {
      return recordVisitFromQuery(request, env, origin);
    }

    if (request.method === "GET" && url.pathname === "/") {
      return json({
        ok: true,
        message: "Stat quiz API is running. Open /summary for stats."
      }, {}, origin, env);
    }

    if (request.method === "POST") {
      return recordVisit(request, env, origin);
    }

    return json({ error: "Not found" }, { status: 404 }, origin, env);
  }
};
