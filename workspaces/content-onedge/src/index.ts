import fs from "node:fs/promises";
import * as path from "node:path";

process.chdir(path.resolve(__dirname, "../../.."));

import { getFirst, slugify, write, yaml } from "./utils";
import { defaultLocale, locales } from "./locales";
import { MainMenu } from "./main-menu";

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
            () => yaml(`_data/${datatype}/${defaultLocale}/${filename}`)
          )
        );
      }

      await write(`_data/_dynamic/${datatype}/${locale.code}.json`, data);
    }
  } catch (err) {
    console.log("datatype", datatype);
    console.log(err);
  }
}

const postsIdMap = new Map<string, any>();

{
  // posts
  const filenames = await fs.readdir(`_data/posts/${defaultLocale}`);

  for (const locale of locales) {
    await fs.mkdir(`_data/_dynamic/posts/${locale.code}`, { recursive: true });

    for (const filename of filenames) {
      const defaultLocaleData = await yaml(
        `_data/posts/${defaultLocale}/${filename}`
      );

      const data = await getFirst(
        () => yaml(`_data/posts/${locale.code}/${filename}`),
        () => defaultLocaleData
      );

      const safeID = slugify(data.id);
      const slug = slugify(defaultLocaleData.title);
      const finalData = {
        ...data,
        id: safeID,
        slug,
      };

      postsIdMap.set(`${locale.code}/${safeID}`, finalData);

      await write(
        `_data/_dynamic/posts/${locale.code}/${slug}.json`,
        finalData
      );
    }
  }
}

const pagesIdMap = new Map<string, any>();

{
  // pages
  const filenames = await fs.readdir(`_data/pages/${defaultLocale}`);

  for (const locale of locales) {
    await fs.mkdir(`_data/_dynamic/pages/${locale.code}`, { recursive: true });

    for (const filename of filenames) {
      const defaultLocaleData = await yaml(
        `_data/pages/${defaultLocale}/${filename}`
      );

      const data = await getFirst(
        () => yaml(`_data/pages/${locale.code}/${filename}`),
        () => defaultLocaleData
      );

      const safeID = slugify(data.id);
      const slug = slugify(defaultLocaleData.title);
      const finalData = {
        ...data,
        id: safeID,
        slug,
      };

      pagesIdMap.set(`${locale.code}/${safeID}`, finalData);

      await write(
        `_data/_dynamic/pages/${locale.code}/${slug}.json`,
        finalData
      );
    }
  }
}

// main menu
await fs.mkdir("_data/_dynamic/main-menu", { recursive: true });

for (const locale of locales) {
  const mainMenu: MainMenu = await getFirst(
    () => yaml(`_data/settings/${locale.code}/main-menu.yml`),
    () => yaml(`_data/settings/${defaultLocale}/main-menu.yml`)
  );

  for (const mainMenuItem of mainMenu.items) {
    for (const column of mainMenuItem.columns ?? []) {
      for (const block of column.blocks ?? []) {
        for (const item of block.items ?? []) {
          if (item.page != null) {
            const key = `${locale.code}/${slugify(item.page)}`;
            if (pagesIdMap.has(key)) {
              const data = pagesIdMap.get(key);

              item.page_data = {
                id: data.id,
                slug: data.slug,
                title: data.title,
                template: data.template,
                breadcrumbs: data.breadcrumbs,
                pageLastUpdated: data.pageLastUpdated,
              };
            }
          }

          if (item.post != null) {
            const key = `${locale.code}/${slugify(item.post)}`;
            if (postsIdMap.has(key)) {
              const data = postsIdMap.get(key);

              item.post_data = {
                id: data.id,
                slug: data.slug,
                title: data.title,
                image: data.image,
                category: data.category,
                topic: data.topic,
                short_desc: data.short_desc,
                locale: data.locale,
                filepath: data.filepath,
              };
            }
          }
        }
      }
    }
  }

  await write(`_data/_dynamic/main-menu/${locale.code}.json`, mainMenu);
}
