/**
 * Centralized site constants — single source of truth for
 * metadata, navigation, and social links used across components.
 */

export const MEDIA_BASE = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media`;

// ── Site Metadata ──────────────────────────────────────────────
export const SITE = {
  name: 'Abhishek Sarkate',
  title: 'Abhishek Sarkate',
  description: 'Personal portfolio and blog of Abhishek Sarkate — projects and articles.',
  url: 'https://abhisheksarkate.vercel.app',
  email: 'abhisheksarkate26@gmail.com',
  favicon: `${MEDIA_BASE}/shared/avatar.jpg`,
  avatar: `${MEDIA_BASE}/shared/avatar.jpg`,
};

// ── Navigation Links ───────────────────────────────────────────
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
];

// ── Social Links ───────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { href: 'https://linkedin.com/in/abhisheksarkate26', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://x.com/imabhishek_26', icon: 'fab fa-x-twitter', label: 'X' },
  { href: 'https://youtube.com/@abhisheksarkate', icon: 'fab fa-youtube', label: 'YouTube' },
  { href: 'mailto:abhisheksarkate26@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
];
