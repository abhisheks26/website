/**
 * Navbar — floating pill navigation bar with desktop/mobile layouts.
 * Uses NAV_LINKS from constants for route definitions.
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../shared/ThemeToggle';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Hide on blog pages — blog has its own nav
  if (pathname.startsWith('/blog')) return null;

  const isActiveLink = (href) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <div className="root-navbar fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* ── Nav Pill ── */}
      <nav
        className="pointer-events-auto bg-background/70 backdrop-blur-md border border-border shadow-lg py-3 px-6 rounded-full"
        style={{ maxWidth: 'min(1200px, 90vw)', width: 'auto' }}
      >
        <div className="flex justify-between items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-baseline shrink-0"
          >
            <div className="font-serif text-3xl font-black italic tracking-tighter text-black dark:text-white transition-colors duration-300 group-hover:text-accent-primary">
              A
              S
            </div>
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse ml-1 mb-2 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex gap-1">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href} className="relative">
                  <Link
                    href={href}
                    className={`relative block px-4 py-2 text-sm font-medium font-mono tracking-wide uppercase transition-colors rounded-full ${isActiveLink(href)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-accent'
                      }`}
                  >
                    {isActiveLink(href) && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 rounded-full"
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.5,
                          layout: { duration: 0.5 }, // ensure layout transitions use default
                        }}
                        style={{ originY: '0px' }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-text-primary text-xl p-2 bg-secondary/50 rounded-full border border-border backdrop-blur-sm w-10 h-10 flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
            </button>
          </div>
        </div>
      </nav >

      {/* ── Mobile Dropdown ── outside the nav pill so it doesn’t overlap */}
      < AnimatePresence >
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="pointer-events-auto absolute top-full left-4 right-4 mt-3 bg-background/90 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-4 overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-4 py-3 rounded-xl transition-colors font-mono font-medium tracking-wide uppercase ${isActiveLink(href)
                      ? 'bg-neutral-100 dark:bg-neutral-900 text-accent'
                      : 'hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 text-text-secondary hover:text-accent'
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )
        }
      </AnimatePresence >
    </div >
  );
}
