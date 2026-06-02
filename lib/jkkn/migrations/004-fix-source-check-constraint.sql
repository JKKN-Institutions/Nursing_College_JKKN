-- Fix: the `faculty_source_check` constraint only allows 'manual'.
-- The sync sets source = 'jkkn', so we need to allow that value too.
--
-- Safe to re-run.

ALTER TABLE public.faculty DROP CONSTRAINT IF EXISTS faculty_source_check;

ALTER TABLE public.faculty
  ADD CONSTRAINT faculty_source_check CHECK (source IN ('manual', 'jkkn'));
