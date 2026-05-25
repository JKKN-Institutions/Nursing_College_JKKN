import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import { syncFacultyFromJkkn } from '@/lib/jkkn/sync-faculty';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

/**
 * Authorize the request via either:
 *   - A valid admin session (super_admin / seo / staff), OR
 *   - The shared CRON_SECRET passed as `Authorization: Bearer <secret>`
 *     (used by Vercel Cron — see vercel.json).
 */
async function authorize(request: Request): Promise<
  | { ok: true; collegeId: string }
  | { ok: false; status: number; message: string }
> {
  // Path 1: cron secret
  const auth = request.headers.get('authorization') ?? '';
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && auth === `Bearer ${cronSecret}`) {
    const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID;
    if (!collegeId) {
      return {
        ok: false,
        status: 500,
        message: 'NEXT_PUBLIC_COLLEGE_ID env var is required for cron sync',
      };
    }
    return { ok: true, collegeId };
  }

  // Path 2: admin session
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return { ok: false, status: 401, message: 'Unauthorized' };
  }

  const { data: profile } = await supabase
    .from('staff_profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();

  const allowed = ['super_admin', 'seo', 'staff'];
  if (!allowed.includes(profile?.role ?? '')) {
    return { ok: false, status: 403, message: 'Forbidden' };
  }

  const collegeId = await getAdminCollegeId();
  return { ok: true, collegeId };
}

export async function POST(request: Request) {
  const authResult = await authorize(request);
  if (!authResult.ok) {
    return NextResponse.json({ error: authResult.message }, { status: authResult.status });
  }

  try {
    const summary = await syncFacultyFromJkkn(authResult.collegeId);
    const status = summary.errors.length > 0 ? 207 : 200;
    return NextResponse.json({ ok: summary.errors.length === 0, ...summary }, { status });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// Allow Vercel Cron's GET ping to trigger the same sync.
export async function GET(request: Request) {
  return POST(request);
}
