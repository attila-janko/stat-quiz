# Visitor stats

This folder contains a Cloudflare Worker API for lightweight GitHub Pages quiz stats.

It stores:

- daily page views
- daily unique visitors using a salted hash of IP + user agent + day
- topic changes
- answer events and correctness

It does not store raw IP addresses.

## Cloudflare setup

1. Create a Cloudflare Worker.
2. Create a D1 database, for example `stat_quiz_analytics`.
3. Run `schema.sql` on that D1 database.
4. Bind the D1 database to the Worker as `DB`.
5. Add Worker environment variables:
   - `TRACKING_SALT`: any long random string
   - `ALLOWED_ORIGIN`: your GitHub Pages origin, for example `https://USERNAME.github.io`
   - `DASHBOARD_TOKEN`: any long private string used to open the dashboard
6. Paste `cloudflare-worker.js` into the Worker and deploy it.
7. Copy the Worker URL.
8. In `index.html`, set:

```js
const TRACKING_ENDPOINT = "https://stat-quiz-api.YOUR-SUBDOMAIN.workers.dev";
```

## Reading stats

Open:

```text
https://stat-quiz-api.YOUR-SUBDOMAIN.workers.dev/dashboard?token=YOUR_DASHBOARD_TOKEN
```

The dashboard shows the last 30 days of daily totals and topic-level aggregates.

You can also read the raw JSON:

```text
https://stat-quiz-api.YOUR-SUBDOMAIN.workers.dev/summary?token=YOUR_DASHBOARD_TOKEN
```

## Privacy note

IP addresses can count as personal data. This implementation hashes the IP with a salt, user agent, and current day before storing it, so the database can count daily unique visitors without keeping raw IPs.
