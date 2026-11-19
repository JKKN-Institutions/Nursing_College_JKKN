import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from './CampusBlogContent';
import { blogFromMyJkkn, blogSiteKey, getPost, listPosts } from '@/lib/blog/myjkkn';
import { MYJKKN_URL } from '@/lib/blog/config';
import { inlineCtaFor } from '@/lib/blog-inline-cta';

export const revalidate = 300;

type PageProps = {
  params: Promise<{ slug: string }>;
  /** ?preview=<token>: the Preview link in MyJKKN opens a draft (BLOG_SOURCE=myjkkn only). */
  searchParams: Promise<{ preview?: string }>;
};

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    const { preview } = await searchParams;
    const detail = await getPost(slug, preview);
    if (!detail) return { title: 'Blog Post Not Found — JKKN College of Nursing and Research' };
    const { post } = detail;
    // The SEO fields are filled in MyJKKN; where the writer left one empty, MyJKKN has
    // already fallen back to the title, excerpt, featured image and the post's own address.
    const description = post.seo.description ?? '';
    const ogImage = post.seo.og_image || '/images/nursing_logo.png';
    return {
      // A written SEO title is the whole title; otherwise the college name is added, as before.
      title:
        post.seo.title === post.title
          ? `${post.title} — JKKN College of Nursing and Research`
          : post.seo.title,
      description,
      ...(post.seo.keywords.length > 0 && { keywords: post.seo.keywords }),
      alternates: { canonical: post.seo.canonical_url },
      openGraph: {
        title: post.seo.title,
        description,
        type: 'article',
        url: `https://nursing.sresakthimayeil.jkkn.ac.in/blog/campus/${slug}`,
        siteName: 'JKKN College of Nursing and Research',
        images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
        publishedTime: post.published_at || post.created_at,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.seo.title,
        description,
        images: [ogImage],
      },
      robots:
        detail.preview || post.seo.noindex
          ? { index: false, follow: !detail.preview }
          : { index: true, follow: true },
    };
  }

  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: post } = await supabase
    .from('blogs')
    .select('title, excerpt, cover_image_url, published_at, created_at')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  // Returning {} here silently inherits the /blog listing's title and canonical, which is how
  // this fault stayed invisible: the post rendered fine while its head claimed to be the listing.
  if (!post) return { title: 'Blog Post Not Found — JKKN College of Nursing and Research' };

  const description = post.excerpt || '';
  const canonicalUrl = `https://nursing.sresakthimayeil.jkkn.ac.in/blog/campus/${slug}`;
  const ogImage = post.cover_image_url || '/images/nursing_logo.png';

  return {
    title: `${post.title} — JKKN College of Nursing and Research`,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      url: canonicalUrl,
      siteName: 'JKKN College of Nursing and Research',
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.published_at || post.created_at,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

/** Extract h2/h3 headings from HTML and inject id attributes for TOC */
function processContent(
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
function calcReadMeta(content: string): { words: number; readTime: number } {
  const text = content.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return { words, readTime: Math.max(1, Math.ceil(words / 200)) };
}

export default async function CampusBlogPost({ params, searchParams }: PageProps) {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    const { preview } = await searchParams;
    const detail = await getPost(slug, preview);
    if (!detail) notFound();
    const popular = (await listPosts(4)).posts.filter((p) => p.slug !== slug).slice(0, 3);
    return renderPost({
      slug,
      post: detail.post,
      popularPosts: popular,
      relatedPosts: detail.related,
      initialComments: detail.comments,
      isPreview: detail.preview,
      fromMyJkkn: true,
    });
  }

  const supabase = await createClient();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: post } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) notFound();

  const [{ data: popularPosts }, { data: relatedPosts }, { data: initialComments }] = await Promise.all([
    // Popular: other recent published blogs
    supabase
      .from('blogs')
      .select('id, title, slug, category, published_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    // Related: same category, exclude current
    supabase
      .from('blogs')
      .select(
        'id, title, slug, category, excerpt, cover_image_url, published_at, created_at'
      )
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .eq('category', post.category ?? 'General')
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    // Approved comments for this post
    supabase
      .from('blog_comments')
      .select('id, author_name, content, created_at')
      .eq('blog_id', post.id)
      .eq('status', 'approved')
      .order('created_at', { ascending: true }),
  ]);

  return renderPost({
    slug,
    post,
    popularPosts: popularPosts ?? [],
    relatedPosts: relatedPosts ?? [],
    initialComments: initialComments ?? [],
    isPreview: false,
    fromMyJkkn: false,
  });
}

/* eslint-disable @typescript-eslint/no-explicit-any -- rows come untyped from the `blogs` table, as before */
/** The page itself. Both sources (this site's `blogs` table, or MyJKKN) end here, so the markup is one. */
function renderPost({
  slug,
  post,
  popularPosts,
  relatedPosts,
  initialComments,
  isPreview,
  fromMyJkkn,
}: {
  slug: string;
  post: any;
  popularPosts: any[];
  relatedPosts: any[];
  initialComments: any[];
  /** A draft opened with its preview link from MyJKKN. */
  isPreview: boolean;
  fromMyJkkn: boolean;
}) {
  /* eslint-enable @typescript-eslint/no-explicit-any */

  // Structured posts (new format with sections JSONB) skip HTML processing
  const isStructured = !!post.sections;

  const contentHtml = post.content ?? '';
  const isHtml = contentHtml.includes('<');

  const rawHtml = isStructured
    ? ''
    : isHtml
    ? contentHtml
    : contentHtml
        .split(/\n\n+/)
        .map((p: string) => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
        .join('');

  const { processedHtml, tocItems } = isStructured
    ? { processedHtml: '', tocItems: [] }
    : processContent(rawHtml);

  const { words, readTime } = calcReadMeta(rawHtml);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.meta_description || "",
    "datePublished": post.published_at || post.created_at,
    "dateModified": post.updated_at || post.published_at || post.created_at,
    "author": {
      "@type": "Organization",
      "name": "Sresakthimayeil Institute Of Nursing And Research",
      "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sresakthimayeil Institute Of Nursing And Research",
      "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nursing.sresakthimayeil.jkkn.ac.in/images/nursing_logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nursing.sresakthimayeil.jkkn.ac.in/blog/campus/${slug}`
    },
    ...(post.cover_image_url ? { "image": post.cover_image_url } : {}),
    "wordCount": words,
    "articleSection": post.category || "General",
    "inLanguage": "en"
  };

  return (
    <div className="min-h-screen bg-white">
      {isPreview ? (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#ffde59] border-t border-amber-300">
          <p className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 text-sm font-semibold text-[#002309]">
            Draft Preview — this post is not published yet and is hidden from search engines.
          </p>
        </div>
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
      )}
      <Header />
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts}
        relatedPosts={relatedPosts}
        initialComments={initialComments}
        commentsVia={fromMyJkkn ? { api: `${MYJKKN_URL}/api/public/blog/comments`, site: blogSiteKey() } : undefined}
        commentFormOpen={!fromMyJkkn || (post.allow_comments && !isPreview)}
        /* Enquiry box inside every post (lead option 2, 2026-11-05) - place from lib/blog-inline-cta.ts. */
        inlineCta={isPreview ? null : inlineCtaFor(slug, processedHtml)}
      />
      <Footer hideLifeAtJKKN />
      <ScrollToTop />
    </div>
  );
}
