# Personal Portfolio & Blog

A minimal, dark-themed portfolio and blog built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Content is authored in Markdown and deployed via Vercel.

---

## Tech Stack

| Layer      | Technology                                 |
| ---------- | ------------------------------------------ |
| Framework  | Next.js 16 (App Router)                    |
| Styling    | Tailwind CSS v4, `@tailwindcss/typography` |
| Animations | Framer Motion                              |
| Content    | Markdown (`gray-matter` + `remark`)        |
| Icons      | Font Awesome 6.5 (CDN)                     |
| Font       | JetBrains Mono (Google Fonts)              |
| Deployment | Vercel                                     |

---

## Project Structure

```
├── app/                        # Next.js App Router pages
│   ├── layout.js               # Root layout (metadata, fonts, theme)
│   ├── template.js             # Framer Motion page-transition wrapper
│   ├── globals.css             # Design tokens, theme variables, utilities
│   ├── page.js                 # Home page
│   ├── blog/
│   │   ├── page.js             # Blog listing (search, filter, view toggle)
│   │   └── [slug]/page.js      # Blog post detail
│   ├── projects/
│   │   ├── page.js             # Projects listing (search, filter)
│   │   └── [slug]/page.js      # Project detail
│   └── resume/
│       └── page.js             # Resume (data‑driven)
│
├── components/
│   ├── layout/                 # Structural / app-shell components
│   │   ├── Navbar.js           # Floating pill navigation bar
│   │   ├── Footer.js           # Site footer with social links
│   │   ├── Section.js          # Scroll-animated section wrapper
│   │   └── ThemeToggle.js      # Dark / light mode toggle
│   ├── home/
│   │   └── Hero.js             # Landing hero (avatar, bio, CTAs)
│   ├── blog/
│   │   ├── BlogCard.js         # Blog post preview card (grid / list)
│   │   └── BlogClient.js       # Blog listing with search & filters
│   ├── projects/
│   │   ├── ProjectCard.js      # Project card with hover-reveal cover
│   │   └── ProjectsClient.js   # Projects listing with search & filter
│   └── ui/                     # Shared presentational components
│       ├── FilterDropdown.js   # Animated dropdown selector
│       └── SocialLinks.js      # Reusable social icon row
│
├── content/                    # Markdown content
│   ├── blog/                   # Blog posts (.md)
│   │   └── _template.md        # Blog post template
│   └── projects/               # Project write-ups (.md)
│       └── _template.md        # Project template
│
├── lib/                        # Shared utilities & data
│   ├── api.js                  # Markdown parsing & data helpers
│   ├── constants.js            # Site metadata, nav links, social links
│   └── resume-data.js          # Resume content (data-driven)
│
├── public/assets/images/       # Static images
│   ├── avatar.png              # Profile photo
│   ├── favicon.svg             # Site favicon
│   ├── blog/                   # Blog cover images
│   └── projects/               # Project cover images
│
└── next.config.mjs             # Next.js configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or pnpm / yarn)

### Install & Run

```bash
# Clone the repository
git clone https://github.com/sameetvipat/website.git
cd website

# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev
```

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repository.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Every push to `main` triggers an automatic production deploy. Pull requests get unique preview URLs.

To add a custom domain, go to **Project Settings → Domains** in the Vercel dashboard.

---

## Adding Content

All content lives in the `content/` directory as Markdown files. Templates with all required frontmatter fields are provided — files prefixed with `_` (like `_template.md`) are automatically excluded from listings.

### Creating a Blog Post

1. Copy the template:
   ```bash
   cp content/blog/_template.md content/blog/your-post-slug.md
   ```
2. Add a cover image to `public/assets/images/blog/your-post-slug.png`.
3. Fill in the frontmatter and write the post body in Markdown.
4. Preview with `npm run dev`, then push to deploy.

#### Blog Frontmatter

| Field      | Required | Description                            |
| ---------- | -------- | -------------------------------------- |
| `title`    | Yes      | Post title                             |
| `date`     | Yes      | Publication date (`Mon DD, YYYY`)      |
| `category` | Yes      | Category for the dropdown filter       |
| `readTime` | Yes      | Reading time (e.g. `3 min read`)       |
| `image`    | No       | Cover image path relative to `public/` |
| `excerpt`  | Yes      | One-line summary for the listing card  |
| `tags`     | No       | Array of tags for tag-based search     |

### Creating a Project

1. Copy the template:
   ```bash
   cp content/projects/_template.md content/projects/your-project-slug.md
   ```
2. Add a cover image to `public/assets/images/projects/your-project-slug.png`.
3. Fill in the frontmatter and write the project body in Markdown.
4. Preview with `npm run dev`, then push to deploy.

#### Project Frontmatter

| Field         | Required | Description                                 |
| ------------- | -------- | ------------------------------------------- |
| `title`       | Yes      | Project name                                |
| `category`    | Yes      | Category for the dropdown filter            |
| `featured`    | No       | Set `true` to show on the home page (max 3) |
| `techStack`   | Yes      | Array of technologies for badges            |
| `description` | Yes      | One-line summary for the project card       |
| `cover`       | No       | Cover image path relative to `public/`      |
| `links.code`  | No       | Source code URL                             |
| `links.demo`  | No       | Live demo URL                               |

---

## Customization

### Site Metadata & Social Links

All site-wide constants live in `lib/constants.js` — name, email, nav links, and social links. Update that single file to change them everywhere.

### Theming

Colors are defined as CSS custom properties in `app/globals.css`. The site supports **dark** (default) and **light** modes, toggled via the sun/moon icon in the navbar.

### Resume

Resume content is data-driven via `lib/resume-data.js`. Edit that file to update objectives, education, projects, skills, and profile sections — no UI code changes needed.

---

## Scripts

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start dev server with Turbopack |
| `npm run build` | Production build                |
| `npm run lint`  | Run ESLint                      |

---

## License

This project is for personal use. Feel free to reference the structure or code for your own portfolio.
