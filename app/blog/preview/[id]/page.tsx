import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Eye, Pencil } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from '@/app/blog/campus/[slug]/CampusBlogContent';
import { processContent, calcReadMeta, buildBlogHtml } from '@/lib/blog-render';

// Never cached, never pre-rendered — a draft must not leak into a static page.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Draft Preview — JKKN College of Nursing',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: null },
};

interface PreviewPost {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  author_name: string | null;
  cover_image_url: string | null;
  excerpt: string | null;
  content: string | null;
  sections: unknown | null;
  tags: string | null;
  read_time: string | null;
  post_status: string | null;
  is_published: boolean | null;
  published_at: string | null;
  created_at: string;
}

export default async function BlogPreviewPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { id } = await params;
  const { token } = await searchParams;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  let post: PreviewPost | null = null;
  let isAdmin = false;

  // 1) Logged-in admin — can preview any post of this college.
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session?.user) {
    const { data } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .eq('college_id', collegeId)
      .maybeSingle();
    if (data) {
      post = data as PreviewPost;
      isAdmin = true;
    }
  }

  // 2) Anyone holding the secret preview token — read via the security-definer RPC.
  if (!post && token) {
    const { data } = await supabase.rpc('get_blog_preview', {
      p_id: id,
      p_token: token,
    });
    const row = Array.isArray(data) ? data[0] : data;
    if (row) post = row as PreviewPost;
  }

  if (!post) notFound();

  const [{ data: popularPosts }, { data: relatedPosts }] = await Promise.all([
    supabase
      .from('blogs')
      .select('id, title, slug, category, published_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
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
  ]);

  // Structured posts (sections JSONB) skip HTML processing — same as the live page.
  const isStructured = !!post.sections;
  const rawHtml = buildBlogHtml(post.content, isStructured);

  const { processedHtml, tocItems } = isStructured
    ? { processedHtml: '', tocItems: [] as { id: string; label: string }[] }
    : processContent(rawHtml);

  const { words, readTime } = calcReadMeta(rawHtml);

  const status = post.post_status ?? (post.is_published ? 'published' : 'draft');

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Preview banner — offset for the fixed header */}
      <div className="bg-amber-50 border-b border-amber-200 pt-16 sm:pt-[70px] lg:pt-[82px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-900">
            <Eye className="w-4 h-4" />
            Draft Preview
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-800 bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-full">
            {status}
          </span>
          <span className="text-sm text-amber-800">
            This page is private and not indexed by search engines.
            {post.slug && (
              <span className="hidden sm:inline"> Live URL will be /blog/campus/{post.slug}</span>
            )}
          </span>
          {isAdmin && (
            <Link
              href={`/admin/blogs/${post.id}`}
              className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-amber-900 border border-amber-300 bg-white px-3 py-1.5 rounded-lg hover:bg-amber-100 transition"
            >
              <Pencil className="w-3.5 h-3.5" />
              Edit this post
            </Link>
          )}
        </div>
      </div>

      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts ?? []}
        relatedPosts={relatedPosts ?? []}
        initialComments={[]}
      />
      <Footer hideLifeAtJKKN />
      <ScrollToTop />
    </div>
  );
}
