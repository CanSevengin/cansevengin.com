import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cansevengin.com',
  integrations: [
    sitemap({
      lastmod: new Date(),
      changefreq: 'weekly',
      i18n: { defaultLocale: 'en', locales: { en: 'en', tr: 'tr' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
