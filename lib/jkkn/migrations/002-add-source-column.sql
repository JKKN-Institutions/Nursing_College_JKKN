-- Adds a `source` column to distinguish MyJKKN-synced rows from manually-added ones.
--
-- After this migration:
--   - All synced rows have source = 'jkkn'      (set by staff-mapper.ts)
--   - Manually-added rows keep source = 'manual'
--   - The admin list filters by source = 'jkkn' (only synced rows are shown)
--   - The sync's soft-delete only affects source = 'jkkn' rows
--
-- Safe to run multiple times (IF NOT EXISTS + idempotent backfill).
--
-- Run via: npm run db:migrate

ALTER TABLE public.faculty
  ADD COLUMN IF NOT EXISTS source TEXT NOT NULL DEFAULT 'manual';

-- Backfill: rows that look synced (have role_key or role_name) → 'jkkn'.
-- Idempotent because we only touch rows still at the default.
UPDATE public.faculty
SET source = 'jkkn'
WHERE source = 'manual'
  AND (role_key IS NOT NULL OR role_name IS NOT NULL);

CREATE INDEX IF NOT EXISTS faculty_source_idx ON public.faculty (source);
