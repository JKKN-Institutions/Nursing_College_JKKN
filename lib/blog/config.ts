/**
 * Where MyJKKN lives. Browser-safe (no server-only code), so the comment form
 * and the admin notice can use it too.
 */
export const MYJKKN_URL = (process.env.NEXT_PUBLIC_MYJKKN_URL ?? 'https://www.jkkn.ai').replace(/\/+$/, '');
