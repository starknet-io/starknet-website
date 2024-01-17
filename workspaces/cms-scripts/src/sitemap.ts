/// <reference types="vite/client" />

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
import { playlist } from '../../website/src/components/VideoPlayer/constants';
import { escapeXml, formatDate } from './utils';

/**
 * Config constants.
 */

const domain = 'https://www.starknet.io';
const changefreqByDepth = ['daily', 'weekly', 'monthly', 'yearly'];
const priorityByDepth = [1, 0.8, 0.6, 0.4];
const customPages = ['announcements', 'events', 'jobs', 'posts', 'roadmap', 'tutorials'];

/**
 * `Video` type.
 */

type Video = {
  thumbnail?: string;
  title?: string;
  description?: string;
  publishedAt?: string;
  url?: string;
}

/**
 * `SitemapUrl` type.
 */

type SitemapUrl = {
  changefreq: string;
  lastmod?: string;
  priority: number;
  url: string;
  videos?: Video[]
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
          let sitemapEntry: SitemapUrl = {
            url: link,
            changefreq: changefreqByDepth[depth],
            priority: priorityByDepth[depth]
          }

          if (link === '/en/learn/what-is-starknet') {
            const videos: Video[] = playlist.map(chapter => ({
              thumbnail: `${domain}${chapter?.thumbnail}`,
              title: chapter?.title,
              description: chapter?.description,
              url: `${import.meta.env.VITE_CF_STREAM_URL}/${chapter?.videoId}/watch`
            }));
          
            sitemapEntry.videos = videos;
          }

          sitemapUrls.push(sitemapEntry);
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

  filenameMap.forEach(({ locale, category: filenameCategory, slug, published_date, post_type, video }) => {
    const category = filenameCategory === 'engineering' ? 'developers' : filenameCategory;

    if (!categories.includes(category)) {
      categories.push(category);

      sitemapUrls.push({
        url: `/${locale}/content/category/${category}`,
        changefreq: 'weekly',
        priority: 0.8 
      });
    }

    let sitemapEntry: SitemapUrl = {
      url: `/${locale}/content/${slug}`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: published_date?.split('T')?.[0],
      ...(post_type === 'video' && video && {
        videos: [{
          thumbnail: video?.data?.snippet?.thumbnails?.default?.url,
          title: video?.data?.snippet?.title,
          description: video?.data?.snippet?.description,
          publishedAt: video?.data?.snippet?.publishedAt,
          url: video?.url
        }]
      })
    }

    sitemapUrls.push(sitemapEntry);
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
        priority: 0.6,
        videos: [{
          thumbnail: `${domain}${tutorial?.image}`,
          title: tutorial?.title,
          description: tutorial?.description,
          publishedAt: tutorial?.published_at,
          url: tutorial?.url
        }]
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
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;
      
sitemapUrls.forEach(({ url, changefreq, priority, lastmod, videos }) => {
  sitemap += `
  <url>
    <loc>${domain}${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}`;

  videos?.forEach(video => {
    if (video.thumbnail && video.title && video.description && video.url) {
    sitemap += `
    <video:video>
      <video:thumbnail_loc>${escapeXml(video.thumbnail)}</video:thumbnail_loc>
      <video:title>${escapeXml(video.title)}</video:title>
      <video:description>${escapeXml(video.description)}</video:description>${video.publishedAt ? `
      <video:publication_date>${formatDate(video.publishedAt)}</video:publication_date>` : ''}
      <video:player_loc>${escapeXml(video.url)}</video:player_loc>
    </video:video>`;
    }
  });

  sitemap += `
  </url>`;
});
sitemap += `
</urlset>`;

/**
 * Write sitemap file
 */

await fs.writeFile('./public/sitemap.xml', sitemap);
