/**
 * ThemeToggle — dark/light mode switch persisted to localStorage.
 */
'use client';

import { useEffect, useState } from 'react';

const TRANSITION_MS = 500;

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  const isBlog = typeof window !== 'undefined' && window.location.pathname.startsWith('/blog');
  const storageKey = isBlog ? 'blog-theme' : 'theme';
  const defaultTheme = isBlog ? 'light' : 'dark';

  // Initialize theme and mark as mounted
  useEffect(() => {
    const stored = localStorage.getItem(storageKey) || defaultTheme;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(stored);
    setMounted(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync DOM + localStorage whenever theme changes (only after mount)
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(storageKey, theme);
  }, [theme, mounted, storageKey]);

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transitioning');
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), TRANSITION_MS);
  };

  // Avoid rendering the wrong icon before hydration
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-border" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-border w-10 h-10 flex items-center justify-center transition-colors hover:border-accent hover:text-accent text-text-secondary cursor-pointer"
      aria-label="Toggle Theme"
    >
      <i className={`fas ${theme === 'light' ? 'fa-sun' : 'fa-moon'}`} />
    </button>
  );
}
