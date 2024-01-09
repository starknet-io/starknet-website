/**
 * Module dependencies.
 */

import fs from 'fs/promises';
import path from 'path';

/**
 * Change directory to project root.
 */

process.chdir(path.resolve(__dirname, '../../..'));

import { locales } from '@starknet-io/cms-data/src/i18n/config';
import { getPosts } from './data';

/**
 * Config constants.
 */

const domain = 'https://www.starknet.io';
const changefreqByDepth = ['daily', 'weekly', 'monthly', 'yearly'];
const priorityByDepth = [1, 0.8, 0.6, 0.4];
const customPages = ['announcements', 'events', 'jobs', 'posts', 'roadmap', 'tutorials'];

/**
 * `SitemapUrl` type.
 */

type SitemapUrl = {
  changefreq: string;
  lastmod?: string;
  priority: number;
  url: string;
};

/**
 * Initialize `sitemapUrls` constant.
 */

const sitemapUrls: SitemapUrl[] = locales.flatMap(locale => [
  {
    changefreq: 'weekly',
    priority: 1,
    url: `/${locale}`
  },
  ...customPages.map(url => ({
    changefreq: 'weekly',
    priority: 0.8,
    url: `/${locale}/${url}`
  }))
]);

/**
 * `parsePageDirectory` function.
 */

const parsePageDirectory = async (dir: string, depth = 0) => {
  const files = await fs.readdir(dir);

  await Promise.all(
    files.map(async filepath => {
      const file = path.join(dir, filepath);

      if ((await fs.stat(file))?.isDirectory()) {
        await parsePageDirectory(file, depth + 1);

        return;
      }

      const page = await fs.readFile(file, 'utf8');

      try {
        const { hidden_page, link } = JSON.parse(page);

        if (!hidden_page && link) {
          sitemapUrls.push({
            url: link,
            changefreq: changefreqByDepth[depth],
            priority: priorityByDepth[depth]
          });
        }
      } catch {
        console.error('Error parsing page', file);
      }
    })
  );
};

/**
 * `parsePosts` function.
 */

const parsePosts = async () => {
  const { filenameMap } = await getPosts();
  const categories: string[] = [];

  filenameMap.forEach(({ locale, category: filenameCategory, slug, published_date }) => {
    const category = filenameCategory === 'engineering' ? 'developers' : filenameCategory;

    if (!categories.includes(category)) {
      categories.push(category);

      sitemapUrls.push({
        url: `/${locale}/posts/${category}`,
        changefreq: 'weekly',
        priority: 0.8
      });
    }

    sitemapUrls.push({
      url: `/${locale}/posts/${category}/${slug}`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: published_date?.split('T')?.[0]
    });
  });
};

/**
 * `parseTutorialsFile` function.
 */

const parseTutorialsFile = async (locale: string, filename: string) => {
  try {
    const file = await fs.readFile(`./public/data/tutorials/${locale}/${filename}`, 'utf8');
    const tutorial = JSON.parse(file);

    if (tutorial.type === 'youtube') {
      sitemapUrls.push({
        url: `/${locale}/tutorials/video/${tutorial.id}`,
        changefreq: 'monthly',
        priority: 0.6
      });
    }
  } catch {
    console.error(`Error parsing tutorial`, filename);
  }
};

/**
 * `parseTutorials` function.
 */

const parseTutorials = async () => {
  for (const locale of locales) {
    const files = await fs.readdir(`./public/data/tutorials/${locale}`);

    await Promise.all(
      files.map(async filename => {
        await parseTutorialsFile(locale, filename);
      })
    );
  }
};

/**
 * `parseDetails` function.
 */

const parseDetails = async (name: string) => {
  for (const locale of locales) {
    const file = await fs.readFile(`./public/data/${name}-details/${locale}.json`, 'utf8');

    try {
      const roadmaps = JSON.parse(file);
      sitemapUrls.push(
        ...roadmaps.map((roadmap: { slug: string }) => ({
          url: `/${locale}/${name}/${roadmap.slug}`,
          changefreq: 'monthly',
          priority: 0.6
        }))
      );
    } catch {
      console.error(`Error parsing ${name} for locale`, locale);
    }
  }
};

/**
 * Parse all urls.
 */

await parsePageDirectory('./public/data/pages');
await parsePosts();
await parseDetails('announcements');
await parseDetails('roadmap');
await parseTutorials();

let sitemap = `<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

sitemapUrls.forEach(({ url, changefreq, priority, lastmod }) => {
  sitemap += `
  <url>
    <loc>${domain}${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`;
});

sitemap += `
</urlset>`;

/**
 * Write sitemap file
 */

await fs.writeFile('./public/sitemap.xml', sitemap);
