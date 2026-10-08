// Structured data (schema.org JSON-LD) for Google rich results and AI answer engines.
import { SITE } from '../site';

const SITE_URL = 'https://cansevengin.com';
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Can Sevengin',
  alternateName: 'Sinan Can Sevengin',
  url: `${SITE_URL}/about/`,
  image: `${SITE_URL}/can-sevengin.jpg`,
  email: `mailto:${SITE.email}`,
  jobTitle: 'International Sales Assistant Manager',
  worksFor: { '@type': 'Organization', name: 'Babyjem' },
  homeLocation: { '@type': 'Place', name: 'Istanbul, Türkiye' },
  nationality: { '@type': 'Country', name: 'Türkiye' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Anadolu University' },
    { '@type': 'CollegeOrUniversity', name: 'Istanbul University' },
  ],
  knowsAbout: [
    'International sales', 'Export', 'Distributor development', 'E-commerce', 'Amazon marketplaces',
    'Digital growth', 'Artificial intelligence', 'AI agents', 'Workflow automation', 'n8n',
  ],
  knowsLanguage: ['Turkish', 'English'],
  sameAs: [SITE.linkedin, 'https://github.com/CanSevengin'].filter(Boolean),
};

export const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'Can Sevengin',
  description: SITE.description,
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
  author: { '@id': PERSON_ID },
};

export function graph(...nodes: object[]) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}

export function blogPosting(p: { slug: string; title: string; description: string; date: Date; updated?: Date; tags: string[]; words: number }) {
  const url = `${SITE_URL}/blog/${p.slug}/`;
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: p.title,
    description: p.description,
    url,
    mainEntityOfPage: url,
    image: `${SITE_URL}/og/${p.slug}.png`,
    datePublished: p.date.toISOString(),
    dateModified: (p.updated ?? p.date).toISOString(),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
    keywords: p.tags.join(', '),
    wordCount: p.words,
    inLanguage: 'en',
  };
}

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

export const SITE_ORIGIN = SITE_URL;
