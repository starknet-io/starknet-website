import * as path from "path";
import fs from "fs/promises";
import YAML from "yaml";
import { locales } from "@starknet-io/cms-data/src/i18n/config";
import { scandir, yaml } from "./utils";
import { DefaultLogFields } from "simple-git";
import { gitlog } from "./git";
import { getUnixTime, isValid, parseISO } from "date-fns";
import {
  slugify,
  convertStringTagsToArray,
} from "@starknet-io/cms-utils/src/index";
import { translateFile } from "./crowdin";
export interface Meta {
  readonly gitlog?: DefaultLogFields | undefined | null;
  readonly sourceFilepath: string;
  readonly locale: string;
  readonly objectID: string;
}

export interface Post extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly image: string;
  readonly category: string;
  readonly topic: string[];
  readonly short_desc: string;
  readonly post_desc: string;
  readonly seo_desc: string;
  readonly post_type: string;
  readonly post_date: string;
  readonly published_date: string;
  readonly toc: boolean;
  readonly video: any;
  readonly featured_post: boolean;
  readonly timeToConsume: string;
  blocks: readonly any[];
}

export interface RoadmapDetails {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly version: string;
  readonly stage: string;
  readonly availability: string;
  readonly specific_info?: string;
  readonly state?: string;
}

export interface RoadmapPost extends Meta, RoadmapDetails  {
  blocks: readonly any[];
}

export interface AnnouncementDetails {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  badge: string;
}

export interface AnnouncementsPost extends Meta, AnnouncementDetails {
  blocks: readonly any[];
}

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const wordsPerImage = 12;
  const words = text.trim().split(/\s+/).length;
  const imageCount = (text.match(/!\[\]/g) || []).length;
  const wordsWithImages = words + imageCount * wordsPerImage;
  const decimalMinutes = wordsWithImages / wordsPerMinute;

  const minutes = Math.ceil(decimalMinutes); // zaokruživanje na višu minutu
  return `${minutes} min`;
}

function concatenateBodies(blocks: readonly any[]): string {
  let fullText = "";
  blocks?.forEach((block) => {
    if (block.body) {
      fullText += block.body;
    }
  });
  return fullText;
}

function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) {
    return "";
  }
  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const totalMinutes = hours * 60 + minutes;
  const formattedMinutes = totalMinutes > 0 ? `${totalMinutes} min` : "";
  return formattedMinutes.trim();
}

export async function fileToPost(
  locale: string,
  filename: string
): Promise<Post> {
  const resourceName = "posts";

  const sourceFilepath = path.join("_data", resourceName, filename);
  const blogPostsSourceFilepath = path.join(
    "_data",
    "settings",
    "blog-posts.yml"
  );
  const sourceData = await yaml(sourceFilepath);
  const blogPosts = await yaml(blogPostsSourceFilepath);
  const data = await translateFile(locale, resourceName, filename);
  const slug = slugify(sourceData.title);

  const fullText = concatenateBodies(data.blocks);
  let timeToConsume;
  if (data.post_type === "video") {
    timeToConsume = `${formatDuration(
      data.video?.data?.contentDetails?.duration || ""
    )} ${data.video?.data?.contentDetails?.duration ? "watch" : ""}`;
  } else if (data.post_type === "audio") {
    timeToConsume = `${formatDuration(
      data.video?.data?.contentDetails?.duration || ""
    )} ${data.video?.data?.contentDetails?.duration ? "listen" : ""}`;
  } else {
    timeToConsume = `${calculateReadingTime(fullText)} read`;
  }

  return {
    id: data.id,
    slug: (data.post_type === "video" || data.post_type === 'audio') ? `${slug}-video` : slug,
    title: data.title,
    category: data.category,
    post_type: data.post_type,
    post_date: data.post_date,
    seo_desc: data.seo_desc,
    published_date: data.published_date,
    toc: data.toc,
    video: data.video,
    topic: data.topic ?? [],
    short_desc: data.short_desc,
    post_desc: data.post_desc,
    image: data.image,
    blocks: data.blocks ?? [],
    locale,
    objectID: `${resourceName}:${locale}:${filename}`,
    sourceFilepath,
    gitlog: await gitlog(sourceFilepath),
    featured_post:
      blogPosts.show_custom_featured_post &&
      blogPosts.custom_featured_post === data.id,
    timeToConsume,
  };
}

export async function fileToRoadmapPost(
  locale: string,
  filename: string
): Promise<RoadmapPost> {
  const resourceName = "roadmap-posts";

  const sourceFilepath = path.join("_data", resourceName, filename);
  const sourceData = await yaml(sourceFilepath);
  const data = await translateFile(locale, resourceName, filename);
  const slug = slugify(sourceData.title);

  return {
    slug,
    id: data.id,
    title: data.title,
    version: data.version,
    availability: data.availability,
    specific_info: data.specific_info,
    state: data.state,
    stage: data.stage,
    blocks: data.blocks ?? [],
    locale,
    objectID: `${resourceName}:${locale}:${filename}`,
    sourceFilepath,
    gitlog: await gitlog(sourceFilepath),
  };
}

export async function fileToAnnouncementsPost(
  locale: string,
  filename: string
): Promise<AnnouncementsPost> {
  const resourceName = "announcements";

  const sourceFilepath = path.join("_data", resourceName, filename);
  const sourceData = await yaml(sourceFilepath);
  const data = await translateFile(locale, resourceName, filename);
  const slug = slugify(sourceData.title);

  return {
    slug,
    id: data.id,
    title: data.title,
    description: data.description,
    image: data.image,
    badge: data.badge,
    blocks: data.blocks ?? [],
    locale,
    objectID: `${resourceName}:${locale}:${filename}`,
    sourceFilepath,
    gitlog: await gitlog(sourceFilepath),
  };
}

export interface Page extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly parent_page?: string | undefined;
  readonly title: string;
  readonly template: "landing" | "content" | "narrow content";
  readonly tocCustomTitle?: string;
  readonly breadcrumbs: boolean;
  readonly pageLastUpdated: boolean;
  blocks?: any;

  link?: string;
  breadcrumbs_data?: Page[];
}

export async function fileToPage(
  locale: string,
  filename: string
): Promise<Page> {
  const resourceName = "pages";

  const sourceFilepath = path.join("_data", resourceName, filename);
  const sourceData = await yaml(sourceFilepath);

  const data = await translateFile(locale, resourceName, filename);

  const slug = slugify(sourceData.title);

  return {
    ...data,
    blocks: data.blocks ?? [],
    id: data.id,
    parent_page: data.parent_page,
    slug,
    locale,
    objectID: `${resourceName}:${locale}:${filename}`,
    sourceFilepath,
    gitlog: await gitlog(sourceFilepath),
  };
}

interface PagesData extends SimpleData<Page> {
  readonly idMap: Map<string, Page>;
}

export async function getPages(): Promise<PagesData> {
  const resourceName = "pages";
  const filenameMap = new Map<string, Page>();
  const idMap = new Map<string, Page>();

  const filenames = await scandir(`_data/${resourceName}`);

  for (const locale of locales) {
    for (const filename of filenames) {
      const data = await fileToPage(locale, filename);

      idMap.set(`${locale}:${data.id}`, data);
      filenameMap.set(`${locale}:${filename}`, data);
    }
  }

  for (const locale of locales) {
    for (const filename of filenames) {
      const data = filenameMap.get(`${locale}:${filename}`)!;

      const breadcrumbs = [];
      let currentPage = data;
      while (currentPage.parent_page != null) {
        if (currentPage.parent_page == null) break;
        if (currentPage.parent_page === "") break;

        const key = `${locale}:${currentPage.parent_page}`;

        if (!idMap.has(key)) {
          console.log(currentPage.parent_page);
          console.log("currentPage.parent_page not found!");
          console.log(currentPage);

          break;
        }

        currentPage = idMap.get(key)!;
        breadcrumbs.unshift(currentPage);
      }

      data.link = [
        "",
        locale,
        ...breadcrumbs.map((page) => page.slug),
        data.slug,
      ].join("/");

      data.breadcrumbs_data = breadcrumbs;
    }

    for (const filename of filenames) {
      const data = filenameMap.get(`${locale}:${filename}`)!;

      data.breadcrumbs_data = data.breadcrumbs_data?.map((page) => {
        return {
          ...page,
          blocks: undefined,
          gitlog: undefined,
          breadcrumbs_data: undefined,
        };
      });
    }
  }

  return { filenameMap, idMap, filenames, resourceName };
}

interface PostsData extends SimpleData<Post> {
  readonly idMap: Map<string, Post>;
}

interface RoadmapPostsData extends SimpleData<RoadmapPost> {
  readonly idMap: Map<string, RoadmapPost>;
}

interface RoadmapDetailsData extends SimpleData<RoadmapDetails> {
  readonly idMap: Map<string, RoadmapDetails>;
}

interface AnnouncementsPostsData extends SimpleData<AnnouncementsPost> {
  readonly idMap: Map<string, AnnouncementsPost>;
}

export async function getPosts(): Promise<PostsData> {
  const resourceName = "posts";
  const filenameMap = new Map<string, Post>();
  const idMap = new Map<string, Post>();
  const filenames = await scandir(`_data/${resourceName}`);

  for (const locale of locales) {
    for (const filename of filenames) {
      const data = await fileToPost(locale, filename);

      idMap.set(`${locale}:${data.id}`, data);
      filenameMap.set(`${locale}:${filename}`, data);
    }
  }

  return { filenameMap, filenames, idMap, resourceName };
}

export async function getRoadmapPosts(): Promise<RoadmapPostsData> {
  const resourceName = "roadmap-posts";
  const filenameMap = new Map<string, RoadmapPost>();
  const idMap = new Map<string, RoadmapPost>();
  const filenames = await scandir(`_data/${resourceName}`);

  for (const locale of locales) {
    for (const filename of filenames) {
      const data = await fileToRoadmapPost(locale, filename);

      idMap.set(`${locale}:${data.id}`, data);
      filenameMap.set(`${locale}:${filename}`, data);
    }
  }

  return { filenameMap, filenames, idMap, resourceName };
}

// export async function getRoadmapDetails(): Promise<RoadmapDetailsData> {
//   const roadmapPosts: RoadmapPost[] = [];
//   const filesPath = path.join(process.cwd(), "../../public/data/roadmap-posts", locale)
//   const filesInDir = await scandir(filesPath);

//   const jsonFilesInDir = filesInDir.filter((file) => file.endsWith(".json"));

//   for (const fileName of jsonFilesInDir) {
//     const fileData = await fs.readFile(
//       path.join(
//         process.cwd(),
//         "../../public/data/roadmap-posts",
//         locale,
//         fileName
//       ),
//       "utf8"
//     );
//     const jsonData = JSON.parse(fileData.toString());
//     roadmapPosts.push(jsonData);
//   }

//   return roadmapPosts;

// }
// export async function getRoadmapDetails(): Promise<RoadmapDetailsData> {
//   const resourceName = "roadmap-posts";
//   const filenameMap = new Map<string, RoadmapDetails>();
//   const idMap = new Map<string, RoadmapDetails>();
//   const filenames = await scandir(`_data/${resourceName}`);

//   for (const locale of locales) {
//     for (const filename of filenames) {
//       const {blocks, gitlog, ...data} = await fileToRoadmapPost(locale, filename);

//       idMap.set(`${locale}:${data.id}`, data);
//       filenameMap.set(`${locale}:${filename}`, data);
//     }
//   }

//   return { filenameMap, filenames, idMap, resourceName };
// }

export async function getAnnouncements(): Promise<AnnouncementsPostsData> {
  const resourceName = "announcements";
  const filenameMap = new Map<string, AnnouncementsPost>();
  const idMap = new Map<string, AnnouncementsPost>();

  try {
    const filenames = await scandir(`_data/${resourceName}`);

    for (const locale of locales) {
      for (const filename of filenames) {
        const data = await fileToAnnouncementsPost(locale, filename);
  
        idMap.set(`${locale}:${data.id}`, data);
        filenameMap.set(`${locale}:${filename}`, data);
      }
    }
  
    return { filenameMap, filenames, idMap, resourceName };
  } catch (error:any) {
    if (error.code === "ENOENT" && error.path === "_data/announcements") {
      return Promise.resolve({ filenameMap, filenames: [], idMap, resourceName });
    }

    throw error;
  }
}

export async function getTutorials(): Promise<SimpleData<Meta>> {
  const resourceData = await getSimpleData("tutorials");
  resourceData.filenameMap.forEach((data: any) => {
    if (typeof data.tags === "string") {
      data.tags = convertStringTagsToArray(data.tags);
    }
  });

  return resourceData;
}

interface SimpleData<T> {
  readonly filenameMap: Map<string, T>;
  readonly filenames: string[];
  readonly resourceName: string;
}

export async function getSimpleData<T = {}>(
  resourceName: string
): Promise<SimpleData<T & Meta>> {
  const filenameMap = new Map<string, T & Meta>();
  const filenames = await scandir(`_data/${resourceName}`);
  const slugsInUse = new Set<string>();

  for (const locale of locales) {
    for (const filename of filenames) {
      const sourceFilepath = path.join("_data", resourceName, filename);
      const sourceData = await yaml(sourceFilepath);
      const data = await translateFile(locale, resourceName, filename);
      const defaultLocaleTitle = sourceData.title ?? sourceData.name;
      let slug = defaultLocaleTitle ? slugify(defaultLocaleTitle) : undefined;

      if (slugsInUse.has(slug ?? '')) {
        let number = 1;

        while (slugsInUse.has(`${slug}-${number}`)) {
          number++;
        }

        slug = `${slug}-${number}`;
      }
  
      if (slug) {
        slugsInUse.add(slug);
      }

      const dates: { [key: string]: number } = {};

      for (const key in data) {
        if (/(^|_)(at|date)$/.test(key)) {
          const date = parseISO(data[key]);

          if (isValid(date)) {
            dates[`${key}_ts`] = getUnixTime(date);
          }
        }
      }

      filenameMap.set(`${locale}:${filename}`, {
        ...data,
        ...dates,
        slug,
        locale: locale,
        objectID: `${resourceName}:${locale}:${filename}`,
        sourceFilepath
      });
    }
  }

  return { filenameMap, filenames, resourceName };
}

export interface ItemsFile<T = {}> {
  readonly items: readonly T[];
}

interface SimpleFiles<T> {
  readonly localeMap: Map<string, T>;
  readonly resourceName: string;
  readonly collectionName: string;
  readonly writeRootData?: boolean;
}

export async function getSimpleFiles<T = ItemsFile>(
  collectionName: string,
  resourceName: string,
  writeRootData?: boolean
): Promise<SimpleFiles<T & Meta>> {
  const filename = `${resourceName}.yml`;

  const localeMap = new Map<string, T & Meta>();

  for (const locale of locales) {
    const sourceFilepath = path.join("_data", collectionName, filename);

    const data = await translateFile(locale, collectionName, filename);
    localeMap.set(locale, {
      ...data,
      locale: locale,
      objectID: `${collectionName}:${resourceName}:${locale}`,
      sourceFilepath,
    });
  }

  return { localeMap, resourceName, collectionName, writeRootData };
}

export function updateBlocks(pages: PagesData, posts: PostsData) {
  const resources = [pages, posts] as const;

  function handleBlocks(locale: string, blocks: any) {
    const newBlocks = blocks.map((block: any) => {
      const newBlock = { ...block };

      if (block.blocks) {
        newBlock.blocks = handleBlocks(locale, block.blocks);
      }

      if (block.link) {
        newBlock.link = handleLink(locale, block.link, pages, posts);
      }

      return newBlock;
    });

    return newBlocks;
  }

  for (const { filenameMap } of resources) {
    for (const [, data] of filenameMap) {
      data.blocks = handleBlocks(data.locale, data.blocks);
    }
  }
}

export function handleLink(
  locale: string,
  link: any,
  pages: PagesData,
  posts: PostsData
): any {
  const newLink = { ...link };

  if (link.page != null) {
    const key = `${locale}:${link.page}`;
    if (pages.idMap.has(key)) {
      const data = pages.idMap.get(key)!;

      newLink.page_data = {
        id: data.id,
        slug: data.slug,
        title: data.title,
        template: data.template,
        breadcrumbs: data.breadcrumbs,
        pageLastUpdated: data.pageLastUpdated,
        link: data.link,
      };
    }
  }

  if (link.post != null) {
    const key = `${locale}:${link.post}`;
    if (posts.idMap.has(key)) {
      const data = posts.idMap.get(key)!;

      newLink.post_data = {
        id: data.id,
        slug: data.slug,
        title: data.title,
        image: data.image,
        category: data.category,
        topic: data.topic,
        short_desc: data.short_desc,
        locale: data.locale,
        sourceFilepath: data.sourceFilepath,
      };
    }
  }

  return newLink;
}
