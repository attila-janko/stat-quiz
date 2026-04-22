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
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Budapest",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
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

  const pixel = Uint8Array.from([
    71, 73, 70, 56, 57, 97, 1, 0, 1, 0, 128, 0, 0,
    0, 0, 0, 255, 255, 255, 33, 249, 4, 1, 0, 0,
    0, 0, 44, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 2,
    68, 1, 0, 59
  ]);

  return new Response(pixel, {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store",
      ...corsHeaders(origin, env)
    }
  });
}

async function getSummary(env, origin, request) {
  if (env.DASHBOARD_TOKEN && !isAuthorized(request, env)) {
    return json({ error: "Unauthorized" }, { status: 401 }, origin, env);
  }

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

function isAuthorized(request, env) {
  const token = new URL(request.url).searchParams.get("token");
  return Boolean(env.DASHBOARD_TOKEN && token && token === env.DASHBOARD_TOKEN);
}

async function dashboardHtml(env, origin, request) {
  if (!isAuthorized(request, env)) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        ...corsHeaders(origin, env)
      }
    });
  }

  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  return new Response(`<!doctype html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Stat quiz dashboard</title>
  <style>
    :root {
      color-scheme: light;
      --ink: #17202a;
      --muted: #617080;
      --line: #d8dee6;
      --paper: #f7f8fa;
      --panel: #ffffff;
      --blue: #235789;
      --green: #238636;
      --red: #b42318;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--paper); color: var(--ink); }
    main { width: min(1120px, calc(100% - 32px)); margin: 0 auto; padding: 28px 0 44px; }
    header { display: flex; align-items: end; justify-content: space-between; gap: 16px; margin-bottom: 22px; }
    h1 { margin: 0; font-size: 1.6rem; }
    .muted { color: var(--muted); }
    button { min-height: 38px; border: 1px solid var(--line); border-radius: 8px; background: #fff; cursor: pointer; padding: 0 14px; font-weight: 700; }
    .cards { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-bottom: 18px; }
    .card, section { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; }
    .card { padding: 16px; }
    .card strong { display: block; font-size: 1.7rem; line-height: 1; }
    .card span { display: block; margin-top: 8px; color: var(--muted); font-size: .9rem; }
    section { padding: 18px; margin-top: 14px; overflow: auto; }
    h2 { margin: 0 0 14px; font-size: 1.05rem; }
    table { width: 100%; border-collapse: collapse; min-width: 720px; }
    th, td { padding: 10px 8px; border-bottom: 1px solid var(--line); text-align: left; }
    th { color: var(--muted); font-size: .82rem; text-transform: uppercase; letter-spacing: .04em; }
    .bar { height: 9px; width: 100%; background: #e7ecf2; border-radius: 999px; overflow: hidden; }
    .bar span { display: block; height: 100%; background: var(--blue); }
    .ok { color: var(--green); font-weight: 800; }
    .bad { color: var(--red); font-weight: 800; }
    @media (max-width: 760px) {
      header { display: block; }
      header button { margin-top: 12px; width: 100%; }
      .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
  </style>
</head>
<body>
  <main>
    <header>
      <div>
        <h1>Stat quiz dashboard</h1>
        <div class="muted" id="updated">Betöltés...</div>
      </div>
      <button type="button" id="refresh">Frissítés</button>
    </header>

    <div class="cards">
      <div class="card"><strong id="visitors">0</strong><span>mai egyedi látogató</span></div>
      <div class="card"><strong id="views">0</strong><span>mai oldalmegnyitás</span></div>
      <div class="card"><strong id="answers">0</strong><span>mai válasz</span></div>
      <div class="card"><strong id="accuracy">0%</strong><span>mai helyesség</span></div>
    </div>

    <section>
      <h2>Napi statisztika</h2>
      <table>
        <thead><tr><th>Nap</th><th>Egyedi</th><th>Megnyitás</th><th>Válasz</th><th>Esemény</th></tr></thead>
        <tbody id="daily"></tbody>
      </table>
    </section>

    <section>
      <h2>Témakörök</h2>
      <table>
        <thead><tr><th>Témakör</th><th>Egyedi</th><th>Válasz</th><th>Helyes</th><th>Helyesség</th><th></th></tr></thead>
        <tbody id="topics"></tbody>
      </table>
    </section>
  </main>

  <script>
    const token = ${JSON.stringify(token)};

    function pct(part, total) {
      return total ? Math.round((part / total) * 100) : 0;
    }

    function number(value) {
      return Number(value || 0);
    }

    async function load() {
      const response = await fetch("/summary?token=" + encodeURIComponent(token), { cache: "no-store" });
      const data = await response.json();
      const today = data.daily?.[0] || {};
      const totalCorrect = (data.topics || []).reduce((sum, item) => sum + number(item.correct_answers), 0);
      const totalAnswers = number(today.answers);
      const accuracy = pct(totalCorrect, totalAnswers);

      document.getElementById("visitors").textContent = number(today.unique_visitors);
      document.getElementById("views").textContent = number(today.page_views);
      document.getElementById("answers").textContent = totalAnswers;
      document.getElementById("accuracy").textContent = accuracy + "%";
      document.getElementById("updated").textContent = "Frissítve: " + new Date().toLocaleString("hu-HU");

      document.getElementById("daily").innerHTML = (data.daily || []).map(day => \`
        <tr>
          <td>\${day.day}</td>
          <td>\${number(day.unique_visitors)}</td>
          <td>\${number(day.page_views)}</td>
          <td>\${number(day.answers)}</td>
          <td>\${number(day.events)}</td>
        </tr>
      \`).join("");

      document.getElementById("topics").innerHTML = (data.topics || []).map(topic => {
        const answers = number(topic.answers);
        const correct = number(topic.correct_answers);
        const accuracy = pct(correct, answers);
        return \`
          <tr>
            <td>\${topic.topic || "Nincs témakör"}</td>
            <td>\${number(topic.unique_visitors)}</td>
            <td>\${answers}</td>
            <td>\${correct}</td>
            <td class="\${accuracy >= 60 ? "ok" : "bad"}">\${accuracy}%</td>
            <td><div class="bar"><span style="width: \${accuracy}%"></span></div></td>
          </tr>
        \`;
      }).join("");
    }

    document.getElementById("refresh").addEventListener("click", load);
    load();
  </script>
</body>
</html>`, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      ...corsHeaders(origin, env)
    }
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin, env) });
    }

    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/summary") {
      return getSummary(env, origin, request);
    }

    if (request.method === "GET" && url.pathname === "/dashboard") {
      return dashboardHtml(env, origin, request);
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
