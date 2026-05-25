/**
 * Migration runner for SQL files in lib/jkkn/migrations/.
 *
 * Runs every *.sql file in alphabetical order, each inside its own transaction.
 * Idempotent migrations (with IF NOT EXISTS / IF EXISTS) can be safely re-run.
 *
 * Requires DATABASE_URL in .env.local — grab it from:
 *   Supabase Dashboard → Project Settings → Database → Connection string → URI
 * Use the "Session" pooler URL (port 5432) — the transaction-mode pooler (port 6543)
 * does not support multi-statement transactions which we need here.
 *
 * Usage:  npm run db:migrate
 */

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { loadEnvConfig } from '@next/env';
import { Client } from 'pg';

loadEnvConfig(process.cwd());

const MIGRATIONS_DIR = join(process.cwd(), 'lib', 'jkkn', 'migrations');

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error(
      '\n  Missing DATABASE_URL.\n\n' +
        '  Add it to .env.local:\n' +
        '    DATABASE_URL=postgresql://postgres.<ref>:<password>@aws-0-<region>.pooler.supabase.com:5432/postgres\n\n' +
        '  Get it from: Supabase Dashboard → Project Settings → Database → Connection string → URI (Session mode, port 5432).\n'
    );
    process.exit(1);
  }

  const files = readdirSync(MIGRATIONS_DIR)
    .filter((f) => f.endsWith('.sql'))
    .sort();

  if (files.length === 0) {
    console.log(`No .sql files in ${MIGRATIONS_DIR}`);
    return;
  }

  console.log(`Found ${files.length} migration(s) in lib/jkkn/migrations/`);

  const client = new Client({
    connectionString: databaseUrl,
    // Supabase requires SSL but doesn't ship a CA we can verify against from
    // a local script — rejectUnauthorized:false is the standard pattern here.
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  console.log('Connected.\n');

  let failed = false;

  for (const file of files) {
    const sql = readFileSync(join(MIGRATIONS_DIR, file), 'utf8');
    const t0 = Date.now();
    process.stdout.write(`  ▸ ${file} `);

    try {
      await client.query('BEGIN');
      await client.query(sql);
      await client.query('COMMIT');
      console.log(`✓ ${Date.now() - t0}ms`);
    } catch (err) {
      await client.query('ROLLBACK').catch(() => {});
      const message = err instanceof Error ? err.message : String(err);
      console.log(`✗\n      ${message}`);
      failed = true;
      break;
    }
  }

  await client.end();

  if (failed) {
    console.error('\nMigration failed. Rolled back.');
    process.exit(1);
  }

  console.log('\nAll migrations applied.');
}

main().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
