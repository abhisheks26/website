import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const CONTENT_DIRS = {
  blog: path.join(process.cwd(), 'blog', 'content'),
};

// ── Helpers ────────────────────────────────────────────────────

/** Resolve the directory for a given content type (blog | projects). */
function contentDir(type) {
  return CONTENT_DIRS[type] || path.join(process.cwd(), type, 'content');
}

/** List markdown filenames in a content directory, or [] if missing. */
function listMarkdownFiles(type) {
  const dir = contentDir(type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
}

// ── Public API ─────────────────────────────────────────────────

/** Parse a single markdown file into { id, contentHtml, ...frontmatter }. */
export async function getPostData(id, type = 'blog') {
  const fullPath = path.join(contentDir(type), `${id}.md`);
  const { content, data } = matter(fs.readFileSync(fullPath, 'utf8'));

  const processed = await remark().use(html).process(content);

  return { id, contentHtml: processed.toString(), ...data };
}

/** Return an array of { params: { slug } } for generateStaticParams. */
export function getAllPostIds(type = 'blog') {
  return listMarkdownFiles(type).map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, '') },
  }));
}

/** Return all posts sorted newest-first. */
export function getSortedPostsData(type = 'blog') {
  return listMarkdownFiles(type)
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const { data } = matter(
        fs.readFileSync(path.join(contentDir(type), fileName), 'utf8'),
      );
      return { id, ...data };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
