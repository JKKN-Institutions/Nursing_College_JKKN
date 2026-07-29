/**
 * Shared blog HTML helpers.
 *
 * These mirror the helpers used by the live campus blog page so that the
 * draft preview at /blog/preview/[id] renders content exactly the same way.
 */

/** Extract h2/h3 headings from HTML and inject id attributes for TOC */
export function processContent(
  html: string
): { processedHtml: string; tocItems: { id: string; label: string }[] } {
  if (!html) return { processedHtml: '', tocItems: [] };

  const tocItems: { id: string; label: string }[] = [];
  const seen = new Map<string, number>();

  const processedHtml = html.replace(
    /<h([23])([^>]*)>(.*?)<\/h\1>/gi,
    (_, level: string, attrs: string, inner: string) => {
      const label = inner.replace(/<[^>]+>/g, '').trim();
      const base = label
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      const count = seen.get(base) ?? 0;
      const id = count > 0 ? `${base}-${count}` : base;
      seen.set(base, count + 1);

      tocItems.push({ id, label });

      if (!attrs.includes('id=')) {
        return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
      }
      return `<h${level}${attrs}>${inner}</h${level}>`;
    }
  );

  return { processedHtml, tocItems };
}

/** Estimate reading time from HTML content */
export function calcReadMeta(content: string): { words: number; readTime: number } {
  const text = content.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return { words, readTime: Math.max(1, Math.ceil(words / 200)) };
}

/** Turn raw stored content into the HTML the blog renderer expects */
export function buildBlogHtml(
  content: string | null | undefined,
  isStructured: boolean
): string {
  if (isStructured) return '';
  const contentHtml = content ?? '';
  if (!contentHtml) return '';
  if (contentHtml.includes('<')) return contentHtml;
  return contentHtml
    .split(/\n\n+/)
    .map((p: string) => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
    .join('');
}
