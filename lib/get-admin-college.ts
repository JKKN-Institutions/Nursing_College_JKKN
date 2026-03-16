import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

/**
 * Returns the college_id to use for admin operations.
 * Super-admins and seo can override this by selecting a college; the choice is stored
 * in the `admin_college_id` cookie. Regular admins always get their own
 * college from the env variable.
 */
export async function getAdminCollegeId(): Promise<string> {
  const cookieStore = await cookies();
  const override = cookieStore.get('admin_college_id')?.value;

  if (!override) return process.env.NEXT_PUBLIC_COLLEGE_ID!;

  // Only honour the cookie for roles that are allowed to switch colleges
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) return process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: profile } = await supabase
    .from('staff_profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();

  const canSwitch = profile?.role === 'super_admin' || profile?.role === 'seo';
  return canSwitch ? override : process.env.NEXT_PUBLIC_COLLEGE_ID!;
}
