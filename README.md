# Abhishek Sarkate — Portfolio & Blog

Personal portfolio and blog built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Media assets are hosted on Supabase Storage. Deployed via Vercel.

---

## Tech Stack

| Layer      | Technology                                  |
| ---------- | ------------------------------------------- |
| Framework  | Next.js 16 (App Router)                     |
| Styling    | Tailwind CSS v4, `@tailwindcss/typography`  |
| Animations | Framer Motion                               |
| Content    | Markdown (`gray-matter` + `remark`)         |
| Media      | Supabase Storage (public bucket)            |
| Icons      | Font Awesome 6.5 (CDN)                      |
| Deployment | Vercel (auto-deploy on push to `main`)      |

---

## Project Structure

```
├── app/                        # Next.js App Router pages
│   ├── layout.js               # Root layout (metadata, fonts, theme)
│   ├── template.js             # Framer Motion page-transition wrapper
│   ├── globals.css             # Design tokens, theme variables
│   ├── page.js                 # Home page
│   ├── blog/
│   │   ├── page.js             # Blog listing
│   │   └── [slug]/page.js      # Blog post detail
│   └── projects/
│       └── page.js             # Projects page
│
├── portfolio/                  # Portfolio UI components
│   ├── Navbar.js
│   ├── Footer.js
│   ├── home/                   # Home page sections (bento grid)
│   │   ├── HeroBento.js
│   │   ├── WorkBento.js        # YouTube embeds (podcasts, shorts, long-form)
│   │   ├── BottomBento.js      # Expertise + testimonials
│   │   └── BentoCard.js
│   └── projects/
│       └── ProjectsClient.js   # Projects listing with category filter
│
├── blog/
│   └── BlogClient.js
│
├── shared/                     # Shared components & utilities
│   ├── Section.js
│   ├── ThemeToggle.js
│   ├── SocialLinks.js
│   ├── hooks/
│   │   └── useFilteredList.js
│   └── lib/
│       ├── constants.js        # Site metadata, MEDIA_BASE, nav/social links
│       └── api.js              # Markdown parsing helpers
│
├── blog/content/               # Markdown blog posts
│   └── _template.md
│
└── public/                     # Local media (gitignored — upload to Supabase)
    ├── shared/
    └── testimonials/
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm

### Install & run

```bash
git clone https://github.com/abhisheks26/website.git
cd website
npm install
npm run dev       # http://localhost:3000
```

### Environment variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://onzqolqndrzscbpthugr.supabase.co
```

---

## Media Management

Media files (images, videos) are stored in **Supabase Storage** — not in the git repo. The `public/shared/` and `public/testimonials/` directories are gitignored.

### Media URL pattern

All media is served from:
```
https://onzqolqndrzscbpthugr.supabase.co/storage/v1/object/public/media/{path}
```

This base URL is exported as `MEDIA_BASE` from `shared/lib/constants.js`.

### Upload media

```bash
npm run upload-media
```

Uploads everything in `public/shared/` and `public/testimonials/` to the `media` bucket. Safe to re-run — overwrites existing files.

### First-time Supabase CLI setup

```bash
./node_modules/.bin/supabase login
./node_modules/.bin/supabase link --project-ref onzqolqndrzscbpthugr
```

### File size limit

Supabase free tier: **50MB max per file**. Compress large videos before uploading:

```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset fast -acodec aac -b:a 128k output.mp4
```

---

## Deployment

Vercel auto-deploys on every push to `main`.

**Required env var on Vercel:**
```
NEXT_PUBLIC_SUPABASE_URL = https://onzqolqndrzscbpthugr.supabase.co
```

Add via: `npx vercel env add NEXT_PUBLIC_SUPABASE_URL`

---

## Scripts

| Command                  | Description                               |
| ------------------------ | ----------------------------------------- |
| `npm run dev`            | Start dev server with Turbopack           |
| `npm run build`          | Production build                          |
| `npm run lint`           | Run ESLint                                |
| `npm run upload-media`   | Upload media files to Supabase Storage    |

---

## Adding Content

### Blog posts

Add `.md` files to `blog/content/`. Files prefixed with `_` are excluded from listings.

### Projects / Podcasts

Edit the arrays in:
- `portfolio/projects/ProjectsClient.js` — projects page
- `portfolio/home/WorkBento.js` — home page work section

YouTube videos use `videoId` (just the ID, no full URL). Add `type: "youtube"` for projects page entries.
