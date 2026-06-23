'use client';

import { SOCIAL_LINKS } from '@/lib/constants';

/**
 * Reusable social-links row used in Hero, Footer, and anywhere else.
 *
 * @param {string}  size      - Tailwind text-size class (default: "text-lg")
 * @param {string}  gap       - Tailwind gap class (default: "gap-6")
 * @param {string}  className - Extra classes merged onto the wrapper
 */
export default function SocialLinks({
  size = 'text-lg',
  gap = 'gap-6',
  className = '',
  exclude = [],
}) {
  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {SOCIAL_LINKS.filter(l => !exclude.includes(l.label)).map(({ href, icon, label }) => {
        const isExternal = !href.startsWith('mailto:');
        return (
          <a
            key={label}
            href={href}
            title={label}
            className={`${size} text-text-secondary hover:text-accent hover:-translate-y-0.5 transition-all`}
            {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <i className={icon} />
          </a>
        );
      })}
    </div>
  );
}
