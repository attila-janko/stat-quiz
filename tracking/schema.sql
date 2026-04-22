CREATE TABLE IF NOT EXISTS visit_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  day TEXT NOT NULL,
  visitor_hash TEXT NOT NULL,
  event TEXT NOT NULL,
  path TEXT,
  topic TEXT,
  question_title TEXT,
  correct INTEGER,
  country TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_visit_events_day
  ON visit_events (day);

CREATE INDEX IF NOT EXISTS idx_visit_events_day_visitor
  ON visit_events (day, visitor_hash);

CREATE INDEX IF NOT EXISTS idx_visit_events_topic
  ON visit_events (topic);
