import { Suspense } from 'react';
import { getSortedPostsData } from '@/lib/api';
import BlogClient from '@/blog/BlogClient';

export const metadata = {
  title: 'The Journal — Abhishek Sarkate',
  description: 'Ideas, deep dives, and things I have learned.',
};

export default function BlogPage() {
  const posts = getSortedPostsData('blog');

  return (
    <Suspense fallback={<div className="container-custom py-20 text-center text-text-secondary">Loading posts...</div>}>
      <BlogClient posts={posts} />
    </Suspense>
  );
}
