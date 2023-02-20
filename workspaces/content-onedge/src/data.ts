import * as path from "node:path";
import { defaultLocale, locales } from "./locales";
import { getFirst, slugify, yaml } from "./utils";
import { DefaultLogFields } from "simple-git";
import fs from "node:fs/promises";
import { gitlog } from "./git";

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
  readonly post_type: string;
  readonly post_date: string;
  readonly time_to_consume: string;
  readonly published_date: string;
  readonly video: any;
  blocks: readonly any[];
}

export async function fileToPost(
  locale: string,
  filename: string,
): Promise<Post> {
  const resourceName = "posts";
  const defaultLocaleFilepath = path.join(
    "_data",
    resourceName,
    defaultLocale,
    filename,
  );
  const filepath = path.join("_data", resourceName, locale, filename);

  const defaultLocaleData = await yaml(defaultLocaleFilepath);

  const data = await getFirst(
    () => yaml(filepath),
    () => defaultLocaleData,
  );

  const sourceFilepath =
    defaultLocaleData === data ? defaultLocaleFilepath : filepath;

  const slug = slugify(defaultLocaleData.title);

  return {
    id: data.id,
    slug,
    title: data.title,
    category: data.category,
    post_type: data.post_type,
    post_date: data.post_date,
    published_date: data.published_date,
    time_to_consume: data.time_to_consume,
    video: data.video,
    topic: data.topic,
    short_desc: data.short_desc,
    image: data.image,
    blocks: data.blocks ?? [],
    locale,
    objectID: `${resourceName}:${locale}:${filename}`,
    sourceFilepath: path.join("_data", resourceName, locale, filename),
    gitlog: await gitlog(sourceFilepath),
  };
}

export interface Page extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly parent_page?: string | undefined;
  readonly title: string;
  readonly template: "landing" | "content";
  readonly breadcrumbs: boolean;
  readonly pageLastUpdated: boolean;
  blocks?: any;

  link?: string;
  breadcrumbs_data?: Page[];
}

export async function fileToPage(
  locale: string,
  filename: string,
): Promise<Page> {
  const resourceName = "pages";
  const defaultLocaleFilepath = path.join(
    "_data",
    resourceName,
    defaultLocale,
    filename,
  );
  const filepath = path.join("_data", resourceName, locale, filename);

  const defaultLocaleData = await yaml(defaultLocaleFilepath);

  const data = await getFirst(
    () => yaml(filepath),
    () => defaultLocaleData,
  );

  const sourceFilepath =
    defaultLocaleData === data ? defaultLocaleFilepath : filepath;

  const slug = slugify(defaultLocaleData.title);

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

  const filenames = await fs.readdir(`_data/${resourceName}/${defaultLocale}`);

  for (const locale of locales) {
    for (const filename of filenames) {
      const data = await fileToPage(locale.code, filename);

      idMap.set(`${locale.code}:${data.id}`, data);
      filenameMap.set(`${locale.code}:${filename}`, data);
    }
  }

  for (const locale of locales) {
    for (const filename of filenames) {
      const data = filenameMap.get(`${locale.code}:${filename}`)!;

      const breadcrumbs = [];
      let currentPage = data;
      while (currentPage.parent_page != null) {
        if (currentPage.parent_page == null) break;
        if (currentPage.parent_page === "") break;

        const key = `${locale.code}:${currentPage.parent_page}`;

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
        locale.code,
        ...breadcrumbs.map((page) => page.slug),
        data.slug,
      ].join("/");

      data.breadcrumbs_data = breadcrumbs;
    }

    for (const filename of filenames) {
      const data = filenameMap.get(`${locale.code}:${filename}`)!;

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

export async function getPosts(): Promise<PostsData> {
  const resourceName = "posts";
  const filenameMap = new Map<string, Post>();
  const idMap = new Map<string, Post>();
  const filenames = await fs.readdir(`_data/${resourceName}/${defaultLocale}`);

  for (const locale of locales) {
    for (const filename of filenames) {
      const data = await fileToPost(locale.code, filename);

      idMap.set(`${locale.code}:${data.id}`, data);
      filenameMap.set(`${locale.code}:${filename}`, data);
    }
  }

  return { filenameMap, filenames, idMap, resourceName };
}

export async function getTutorials(): Promise<SimpleData<Meta>> {
  const resourceData = await getSimpleData("tutorials");

  resourceData.filenameMap.forEach((data: any) => {
    if (typeof data.tags === "string") {
      data.tags = data.tags.split(",").map((t: string) => t.trim());
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
  resourceName: string,
): Promise<SimpleData<T & Meta>> {
  const filenameMap = new Map<string, T & Meta>();
  const filenames = await fs.readdir(`_data/${resourceName}/${defaultLocale}`);

  for (const locale of locales) {
    for (const filename of filenames) {
      const defaultLocaleFilepath = path.join(
        "_data",
        resourceName,
        defaultLocale,
        filename,
      );
      const filepath = path.join("_data", resourceName, locale.code, filename);

      const defaultLocaleData = await yaml(defaultLocaleFilepath);

      const data = await getFirst(
        () => yaml(filepath),
        () => defaultLocaleData,
      );

      const sourceFilepath =
        defaultLocaleData === data ? defaultLocaleFilepath : filepath;

      const dataTitle = data.title ?? data.name;

      filenameMap.set(`${locale.code}:${filename}`, {
        ...data,
        slug: dataTitle ? slugify(dataTitle) : undefined,
        locale: locale.code,
        objectID: `${resourceName}:${locale.code}:${filename}`,
        sourceFilepath,
      });
    }
  }

  return { filenameMap, filenames, resourceName };
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
  posts: PostsData,
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
