import * as path from "node:path";
import { defaultLocale, locales } from "./locales";
import { getFirst, slugify, yaml } from "./utils";
import { DefaultLogFields, simpleGit } from "simple-git";
import fs from "node:fs/promises";

const git = simpleGit();

export interface Meta {
  readonly gitlog?: DefaultLogFields | undefined | null;
  readonly sourceFilepath: string;
  readonly locale: string;
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
  readonly video_link: string;
  readonly blocks: readonly any[];
}

export async function fileToPost(
  locale: string,
  filename: string
): Promise<Post> {
  const resourceName = "posts";
  const defaultLocaleFilepath = path.join(
    "_data",
    resourceName,
    defaultLocale,
    filename
  );
  const filepath = path.join("_data", resourceName, locale, filename);

  const defaultLocaleData = await yaml(defaultLocaleFilepath);

  const data = await getFirst(
    () => yaml(filepath),
    () => defaultLocaleData
  );

  const sourceFilepath =
    defaultLocaleData === data ? defaultLocaleFilepath : filepath;

  const log = await git.log({
    file: sourceFilepath,
    maxCount: 1,
  });

  const safeID = slugify(data.id);
  const slug = slugify(defaultLocaleData.title);

  return {
    id: safeID,
    slug,
    title: data.title,
    category: data.category,
    post_type: data.post_type,
    post_date: data.post_date,
    published_date: data.published_date,
    time_to_consume: data.time_to_consume,
    video_link: data.video_link,
    topic: data.topic,
    short_desc: data.short_desc,
    image: data.image,
    blocks: data.blocks,
    locale,
    sourceFilepath: path.join("_data", resourceName, locale, filename),
    gitlog: log.latest
      ? {
          ...log.latest,
          body: "",
        }
      : null,
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
  readonly blocks?: any;

  link?: string;
  breadcrumbs_data?: Page[];
}

export async function fileToPage(
  locale: string,
  filename: string
): Promise<Page> {
  const resourceName = "pages";
  const defaultLocaleFilepath = path.join(
    "_data",
    resourceName,
    defaultLocale,
    filename
  );
  const filepath = path.join("_data", resourceName, locale, filename);

  const defaultLocaleData = await yaml(defaultLocaleFilepath);

  const data = await getFirst(
    () => yaml(filepath),
    () => defaultLocaleData
  );

  const sourceFilepath =
    defaultLocaleData === data ? defaultLocaleFilepath : filepath;

  const log = await git.log({
    file: sourceFilepath,
    maxCount: 1,
  });

  const safeID = slugify(data.id);
  const slug = slugify(defaultLocaleData.title);

  return {
    ...data,
    id: safeID,
    parent_page: data.parent_page ? slugify(data.parent_page) : undefined,
    slug,
    locale,
    sourceFilepath,
    gitlog: log.latest
      ? {
          ...log.latest,
          body: "",
        }
      : null,
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
        currentPage = idMap.get(`${locale.code}:${currentPage.parent_page}`)!;

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

      filenameMap.set(`${locale.code}:${filename}`, {
        ...data,
        locale: locale.code,
        sourceFilepath,
      });
    }
  }

  return { filenameMap, filenames, resourceName };
}
