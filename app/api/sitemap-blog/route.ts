import { blogFromMyJkkn, listAllPosts } from '@/lib/blog/myjkkn';

/**
 * /sitemap-blog.xml when posts come from MyJKKN (BLOG_SOURCE=myjkkn; see the
 * rewrite in next.config.ts). Without the setting this answers 404 and the
 * hand-kept public/sitemap-blog.xml is what visitors and crawlers get.
 */
export const revalidate = 300;

const SITE_URL = 'https://nursing.sresakthimayeil.jkkn.ac.in';

function xmlEscape(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function entry(loc: string, lastmod: string | null, changefreq: string, priority: string): string {
  return (
    `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n` +
    (lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : '') +
    `    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`
  );
}

export async function GET() {
  if (!blogFromMyJkkn()) return new Response('Not found', { status: 404 });

  // Never throws; on a MyJKKN outage only the /blog address is listed.
  const posts = (await listAllPosts()).filter((p) => !p.seo.noindex);
  const day = (iso: string) => iso.slice(0, 10);
  const newest = posts.map((p) => p.updated_at).sort().pop();

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entry(`${SITE_URL}/blog`, newest ? day(newest) : null, 'weekly', '0.8') +
    posts
      .map((p) => entry(`${SITE_URL}/blog/campus/${encodeURIComponent(p.slug)}`, day(p.updated_at), 'monthly', '0.7'))
      .join('') +
    '</urlset>\n';

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
