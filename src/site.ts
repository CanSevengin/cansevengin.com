import { getCollection } from 'astro:content';

export const SITE = {
  name: 'Can Sevengin',
  title: 'Can Sevengin | Selling across borders, built with AI',
  description:
    'Notes on AI, automation, e-commerce and international trade from Can Sevengin, Istanbul.',
  email: 'hello@cansevengin.com',
  // Add the full profile URL to show a LinkedIn link in the header/footer.
  linkedin: 'https://www.linkedin.com/in/can-sevengin-3884a516a/',
};

// Drafts show locally and on Vercel preview deploys, never on production.
const showDrafts =
  import.meta.env.DEV || process.env.VERCEL_ENV === 'preview' || process.env.SHOW_DRAFTS === '1';

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => showDrafts || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function readingTime(body = '') {
  return Math.max(1, Math.round(body.split(/\s+/).length / 220));
}
