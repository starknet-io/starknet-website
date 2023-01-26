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
  "glossary",
  "faqs",
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
            const filename = item.page.replace(/(^\/|\/$)/g, "");
            if (filename !== "") {
              const data = await getFirst(
                () => yaml(`_data/pages/${locale.code}/${filename}.yml`),
                () => yaml(`_data/pages/${defaultLocale}/${filename}.yml`),
                async () => null,
              );

              item.page_title = data?.title;
            }
          }

          if (item.post != null) {
            const filename = item.post.replace(/(^\/|\/$)/g, "");
            if (filename !== "") {
              const data = await getFirst(
                () => yaml(`_data/posts/${locale.code}/${filename}.yml`),
                () => yaml(`_data/posts/${defaultLocale}/${filename}.yml`),
                async () => null,
              );

              item.post_title = data?.title;
            }
          }
        }
      }
    }
  }

  await write(`_data/_dynamic/main-menu/${locale.code}.json`, mainMenu);
}

// posts
const filenames = await fs.readdir(`_data/posts/${defaultLocale}`);

for (const locale of locales) {
  await fs.mkdir(`_data/_dynamic/posts/${locale.code}`, { recursive: true });

  for (const filename of filenames) {
    const defaultLocaleData = await yaml(
      `_data/posts/${defaultLocale}/${filename}`,
    );

    const data = await getFirst(
      () => yaml(`_data/posts/${locale.code}/${filename}`),
      () => defaultLocaleData,
    );

    const safeID = slugify(data.id);
    const slug = slugify(defaultLocaleData.title);

    await write(`_data/_dynamic/posts/${locale.code}/${safeID}.json`, {
      ...data,
      id: safeID,
      slug,
    });
  }
}
