/**
 * Footer — minimal site footer with copyright and social links.
 */
'use client';

import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/constants';
import SocialLinks from '../shared/SocialLinks';

export default function Footer() {
  const pathname = usePathname();

  // Hide on blog pages — blog has its own footer
  if (pathname.startsWith('/blog')) return null;

  return (
    <footer className="root-footer py-8 mt-16 border-t border-border">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center text-text-secondary text-sm">
        <p>&copy; {new Date().getFullYear()} {SITE.name}.</p>
        <SocialLinks size="text-lg" gap="gap-6" className="mt-4 md:mt-0" />
      </div>
    </footer>
  );
}
