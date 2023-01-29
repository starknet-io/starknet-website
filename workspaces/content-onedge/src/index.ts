import fs from "node:fs/promises";
import * as path from "node:path";

process.chdir(path.resolve(__dirname, "../../.."));

import { getFirst, slugify, write, yaml } from "./utils";
import { defaultLocale, locales } from "./locales";
import { MainMenu } from "./main-menu";
import { fileToPage, fileToPost, Page, Post } from "./data";

const datatypes = [
  "categories",
  "events",
  "topics",
  "dapps",
  "wallets",
  "block_explorers",
  "bridges",
];

for (const datatype of datatypes) {
  try {
    await fs.mkdir(`_data/_dynamic/${datatype}`, { recursive: true });

    const filenames = await fs.readdir(`_data/${datatype}/${defaultLocale}`);

    for (const locale of locales) {
      const data: any[] = [];

      for (const filename of filenames) {
        data.push(
          await getFirst(
            () => yaml(`_data/${datatype}/${locale.code}/${filename}`),
            () => yaml(`_data/${datatype}/${defaultLocale}/${filename}`),
          ),
        );
      }

      await write(`_data/_dynamic/${datatype}/${locale.code}.json`, data);
    }
  } catch (err) {
    console.log("datatype", datatype);
    console.log(err);
  }
}

const postsIdMap = new Map<string, Post>();

{
  // posts
  const filenames = await fs.readdir(`_data/posts/${defaultLocale}`);

  for (const locale of locales) {
    await fs.mkdir(`_data/_dynamic/posts/${locale.code}`, { recursive: true });

    for (const filename of filenames) {
      const data = await fileToPost(locale.code, filename);

      postsIdMap.set(`${locale.code}/${data.id}`, data);
      postsIdMap.set(`${locale.code}/${filename}`, data);

      await write(
        `_data/_dynamic/posts/${locale.code}/${data.slug}.json`,
        data,
      );
    }
  }
}

const pagesIdMap = new Map<string, Page>();

{
  // pages
  const filenames = await fs.readdir(`_data/pages/${defaultLocale}`);

  for (const locale of locales) {
    await fs.mkdir(`_data/_dynamic/pages/${locale.code}`, { recursive: true });

    for (const filename of filenames) {
      const data = await fileToPage(locale.code, filename);

      pagesIdMap.set(`${locale.code}/${data.id}`, data);
      pagesIdMap.set(`${locale.code}/${filename}`, data);
    }
  }

  for (const locale of locales) {
    await fs.mkdir(`_data/_dynamic/pages/${locale.code}`, { recursive: true });

    for (const filename of filenames) {
      const data = pagesIdMap.get(`${locale.code}/${filename}`)!;

      const breadcrumbs = [];
      let currentPage = data;

      while (currentPage.parent_page != null) {
        currentPage = pagesIdMap.get(
          `${locale.code}/${slugify(currentPage.parent_page)}`,
        )!;

        breadcrumbs.unshift(currentPage);
      }

      data.link = [
        "",
        locale.code,
        ...breadcrumbs.map((page) => page.slug),
        data.slug,
      ].join("/");

      data.breadcrumbs_data = breadcrumbs.map((page) => {
        return {
          ...page,
          blocks: undefined,
          gitlog: undefined,
        };
      });
    }
  }

  for (const locale of locales) {
    await fs.mkdir(`_data/_dynamic/pages/${locale.code}`, { recursive: true });

    for (const filename of filenames) {
      const data = pagesIdMap.get(`${locale.code}/${filename}`)!;

      await fs.mkdir(
        path.join(
          "_data/_dynamic/pages",
          locale.code,
          ...(data.breadcrumbs_data?.map((page) => page.slug) ?? []),
        ),
        { recursive: true },
      );

      await write(
        path.join(
          "_data/_dynamic/pages",
          locale.code,
          ...(data.breadcrumbs_data?.map((page) => page.slug) ?? []),
          `${data.slug}.json`,
        ),
        data,
      );

      await write(
        `_data/_dynamic/pages/${locale.code}/${data.slug}.json`,
        data,
      );
    }
  }
}

// main menu
await fs.mkdir("_data/_dynamic/main-menu", { recursive: true });

for (const locale of locales) {
  const mainMenu: MainMenu = await getFirst(
    () => yaml(`_data/settings/${locale.code}/main-menu.yml`),
    () => yaml(`_data/settings/${defaultLocale}/main-menu.yml`),
  );

  for (const mainMenuItem of mainMenu.items) {
    for (const column of mainMenuItem.columns ?? []) {
      for (const block of column.blocks ?? []) {
        for (const item of block.items ?? []) {
          if (item.page != null) {
            const key = `${locale.code}/${slugify(item.page)}`;
            if (pagesIdMap.has(key)) {
              const data = pagesIdMap.get(key)!;

              item.page_data = {
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

          if (item.post != null) {
            const key = `${locale.code}/${slugify(item.post)}`;
            if (postsIdMap.has(key)) {
              const data = postsIdMap.get(key)!;

              item.post_data = {
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
        }
      }
    }
  }

  await write(`_data/_dynamic/main-menu/${locale.code}.json`, mainMenu);
}
