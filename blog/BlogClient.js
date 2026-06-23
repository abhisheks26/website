'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Section from '../shared/Section';
import ThemeToggle from '../shared/ThemeToggle';
import { useFilteredList } from '@/hooks/useFilteredList';

export default function BlogClient({ posts }) {
  const searchParams = useSearchParams();
  const tagParam = searchParams.get('tag');

  const {
    filter,
    setFilter,
    search,
    setSearch,
    categories,
    filteredItems: filteredPosts
  } = useFilteredList(posts, {
    initialSearch: tagParam || ''
  });

  // Update search when navigating with a ?tag= param
  useEffect(() => {
    if (tagParam) {
      setSearch(tagParam);
    }
  }, [tagParam, setSearch]);

  return (
    <Section className="container-custom py-8">
      {/* ── Header ── */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
            <h1 className="font-serif text-2xl md:text-5xl font-bold text-accent">
              The Journal
            </h1>
            <span className="text-text-secondary text-sm md:text-xl font-serif italic mb-0.5 md:mb-1">
              by Abhishek Sarkate
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0 mt-1 md:mt-3">
            <ThemeToggle />
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              <i className="fas fa-arrow-left text-xs" />
              Back to main site
            </Link>
          </div>
        </div>

        <p className="text-text-secondary text-sm md:text-lg font-body max-w-2xl mb-6 md:mb-8">
          Personal reflections, quiet thoughts, and navigating life at my own pace.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide transition-all border uppercase ${filter === category
                ? 'bg-accent text-background border-accent'
                : 'bg-white dark:bg-black text-text-secondary border-border hover:border-accent hover:text-accent'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ── Posts List ── */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 text-text-secondary">
          No articles found matching your criteria.
        </div>
      ) : (
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <div key={post.id || post.title}>
              <Link
                href={`/blog/${post.slug || post.id}`}
                className="group cursor-pointer flex flex-col md:flex-row gap-4 md:gap-6 items-start hover:bg-neutral-100 dark:hover:bg-neutral-900 p-3 md:p-4 -mx-3 md:-mx-4 rounded-lg transition-colors"
              >
                <div className="w-full md:w-32 shrink-0">
                  <span className="text-xs font-mono font-bold text-accent block">
                    {new Date(post.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-text-secondary font-medium">
                    {post.category || 'Tech'}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-xl text-accent mb-2 group-hover:underline decoration-1 underline-offset-4 transition-all">
                    {post.title}
                  </h4>
                  <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
                    {post.excerpt || post.description || 'No description available.'}
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-end w-10">
                  <i className="fas fa-arrow-right text-text-secondary group-hover:text-accent transform group-hover:translate-x-1 transition-all"></i>
                </div>
              </Link>
              <div className="h-px w-full bg-border last:hidden"></div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
