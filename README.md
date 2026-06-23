# Abhishek Sarkate — Portfolio & Blog

Personal portfolio and blog built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Media assets hosted on Supabase Storage. Project/podcast data managed via Supabase database. Deployed via Vercel.

---

## Tech Stack

| Layer        | Technology                                  |
| ------------ | ------------------------------------------- |
| Framework    | Next.js 16 (App Router)                     |
| Styling      | Tailwind CSS v4, `@tailwindcss/typography`  |
| Animations   | Framer Motion                               |
| Blog content | Markdown (`gray-matter` + `remark`)         |
| Database     | Supabase (projects/podcasts data)           |
| Media        | Supabase Storage (images, videos)           |
| Icons        | Font Awesome 6.5 (CDN)                      |
| Deployment   | Vercel (auto-deploy on push to `main`)      |

---

## Project Structure

```
├── app/                        # Next.js App Router pages
│   ├── layout.js               # Root layout (metadata, fonts, theme)
│   ├── template.js             # Framer Motion page-transition wrapper
│   ├── globals.css             # Design tokens, theme variables
│   ├── page.js                 # Home page (server component, fetches from Supabase)
│   ├── blog/
│   │   ├── page.js             # Blog listing
│   │   └── [slug]/page.js      # Blog post detail
│   └── projects/
│       └── page.js             # Projects page (server component, fetches from Supabase)
│
├── portfolio/                  # Portfolio UI components
│   ├── Navbar.js
│   ├── Footer.js
│   └── home/
│       ├── HeroBento.js        # Hero section
│       ├── WorkBento.js        # Work section — renders data from Supabase
│       ├── BottomBento.js      # Expertise + testimonials
│       ├── BentoCard.js        # Animated card wrapper
│       └── ScrollButtons.js    # Horizontal scroll controls
│   └── projects/
│       └── ProjectsClient.js   # Projects listing with category filter — renders data from Supabase
│
├── blog/
│   ├── BlogClient.js
│   └── content/                # Markdown blog posts
│       └── _template.md
│
└── shared/                     # Shared utilities and components
    ├── Section.js
    ├── ThemeToggle.js
    ├── SocialLinks.js
    ├── hooks/
    │   └── useFilteredList.js  # Filter + search hook (used by blog)
    └── lib/
        ├── constants.js        # Site metadata, MEDIA_BASE, nav/social links
        ├── api.js              # Markdown parsing helpers
        ├── supabase.js         # Supabase client
        └── projects.js         # getProjects() — fetch from Supabase
```

**Path aliases** (defined in `jsconfig.json`):
- `@/*` → `./*`
- `@/lib/*` → `./shared/lib/*`
- `@/hooks/*` → `./shared/hooks/*`

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
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

---

## Adding Content (No Code Required)

All project/podcast/video content is managed via the **Supabase database**. No code edits or deployments needed — the site revalidates every 60 seconds.

### Supabase `projects` table schema

| Column          | Type    | Description                                        |
| --------------- | ------- | -------------------------------------------------- |
| `category`      | text    | `Podcast`, `Short-Form`, or `Long-Form`            |
| `title`         | text    | Video/episode title                                |
| `author`        | text    | Channel or podcast name                            |
| `video_id`      | text    | YouTube video ID (for `youtube` / `youtube-short`) |
| `embed_url`     | text    | Full embed URL (for `instagram` reels)             |
| `post_url`      | text    | Link to original post (optional)                  |
| `type`          | text    | `youtube`, `youtube-short`, or `instagram`         |
| `show_on_home`  | boolean | Whether to show on home page Work section          |
| `display_order` | integer | Order within category (lower = first)              |

### To add a new video

1. Supabase dashboard → Table Editor → `projects`
2. Insert new row with the relevant fields
3. Site updates within 60 seconds — no push needed

---

## Media Management

Media files (images, videos) are stored in **Supabase Storage** — not in the git repo. The `public/shared/` and `public/testimonials/` directories are gitignored.

### Media URL pattern

```
https://onzqolqndrzscbpthugr.supabase.co/storage/v1/object/public/media/{path}
```

Exported as `MEDIA_BASE` from `shared/lib/constants.js`.

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

Supabase free tier: **50MB max per file**. Compress large videos first:

```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset fast -acodec aac -b:a 128k output.mp4
```

---

## Deployment

Vercel auto-deploys on every push to `main`.

**Required env vars on Vercel:**

```
NEXT_PUBLIC_SUPABASE_URL      = https://onzqolqndrzscbpthugr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your_anon_key
```

Add via: `npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Scripts

| Command                | Description                            |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Start dev server with Turbopack        |
| `npm run build`        | Production build                       |
| `npm run lint`         | Run ESLint                             |
| `npm run upload-media` | Upload media files to Supabase Storage |

---

## Blog Posts

Add `.md` files to `blog/content/`. Files prefixed with `_` are excluded from listings.
