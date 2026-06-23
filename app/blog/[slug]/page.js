import { getPostData, getAllPostIds } from '@/lib/api';
import Section from '@/shared/Section';
import ThemeToggle from '@/shared/ThemeToggle';
import Link from 'next/link'; import { notFound } from 'next/navigation';

/* ── Static Generation ─────────────────────────────────────── */

export async function generateStaticParams() {
  return getAllPostIds('blog').map(({ params }) => ({ slug: params.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug, 'blog');
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on Sameet Vipat's blog.`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      ...(post.image && { images: [`/${post.image}`] }),
    },
  };
}

/* ── Page Component ───────────────────────────────────────── */

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug, 'blog');

  if (!post.id) notFound();

  return (
    <Section className="container-custom py-8 max-w-3xl">
      {/* ── Top Bar ── */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
        >
          <i className="fas fa-arrow-left" /> Back to Blog
        </Link>
        <ThemeToggle />
      </div>

      {/* ── Header ── */}
      <header className="mb-10">
        {post.category && (
          <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-4">
            {post.category}
          </span>
        )}

        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-accent leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm font-mono text-text-secondary border-b border-border pb-6">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
          </time>
          {post.readTime && (
            <>
              <span className="text-border">·</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>
      </header>

      {/* ── Article Body ── */}
      <article className="prose dark:prose-invert max-w-none text-base leading-relaxed prose-headings:font-serif prose-headings:font-bold prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent prose-li:text-text-secondary prose-strong:text-text-primary prose-code:text-accent prose-code:font-mono prose-pre:bg-secondary prose-pre:border prose-pre:border-border">
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>

      {/* ── Tags ── */}
      {post.tags?.length > 0 && (
        <div className="mt-10 pt-6 border-t border-border">
          <h3 className="text-sm font-medium text-text-secondary mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="blog-tag text-xs px-3 py-1 rounded-full border transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── Back to Top ── */}
      <div className="mt-10 flex justify-center">
        <a href="#" className="text-sm text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-2">
          <i className="fas fa-arrow-up" /> Back to top
        </a>
      </div>
    </Section>
  );
}
