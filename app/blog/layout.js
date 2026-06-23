import Link from 'next/link';
import { SITE } from '@/lib/constants';

export default function BlogLayout({ children }) {
  return (
    <div data-blog className="min-h-screen flex flex-col relative z-0">
      {/* Paper grain texture overlay */}
      <svg className="blog-grain" width="100%" height="100%" aria-hidden="true">
        <filter id="paper-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>
      {/* Blog specific grid pattern overlay */}
      <div className="blog-grid-overlay"></div>

      {/* ── Blog Content ── */}
      <div className="flex-1">
        {children}
      </div>

      {/* ── Blog Footer ── */}
      <footer className="border-t border-border py-10 mt-16">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name} &mdash;{' '}
            <Link href="/" className="hover:text-accent transition-colors underline underline-offset-2">
              Back to main site
            </Link>
          </p>
          <p className="font-serif italic text-text-secondary/70">
            Written with care.
          </p>
        </div>
      </footer>
    </div>
  );
}
