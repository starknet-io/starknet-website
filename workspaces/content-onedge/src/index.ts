import fs from "node:fs/promises";
import * as path from "node:path";

process.chdir(path.resolve(__dirname, "../../.."));

import { getFirst, write, yaml } from "./utils";
import { defaultLocale, locales } from "./locales";
import { MainMenu } from "./main-menu";
import {
  getPages,
  getPosts,
  getSimpleData,
  handleLink,
  updateBlocks,
} from "./data";

const simpleDataTypes = [
  await getSimpleData("categories"),
  await getSimpleData("events"),
  await getSimpleData("topics"),
  await getSimpleData("dapps"),
  await getSimpleData("wallets"),
  await getSimpleData("block_explorers"),
  await getSimpleData("bridges"),
  await getSimpleData("fiat-on-ramps"),
];

for (const simpleData of simpleDataTypes) {
  try {
    await fs.mkdir(`_data/_dynamic/${simpleData.resourceName}`, {
      recursive: true,
    });

    for (const locale of locales) {
      const data = simpleData.filenames.map((filename) =>
        simpleData.filenameMap.get(`${locale.code}:${filename}`),
      );

      await write(
        `_data/_dynamic/${simpleData.resourceName}/${locale.code}.json`,
        data,
      );
    }
  } catch (err) {
    console.log("simpleData.resourceName", simpleData.resourceName);
    console.log(err);
  }
}

const posts = await getPosts();
const pages = await getPages();

updateBlocks(pages, posts);

for (const locale of locales) {
  await fs.mkdir(`_data/_dynamic/posts/${locale.code}`, { recursive: true });
}

for (const data of posts.filenameMap.values()) {
  await write(`_data/_dynamic/posts/${data.locale}/${data.slug}.json`, data);
}

for (const locale of locales) {
  await fs.mkdir(`_data/_dynamic/pages/${locale.code}`, { recursive: true });
}

for (const data of pages.filenameMap.values()) {
  await fs.mkdir(
    path.join(
      "_data/_dynamic/pages",
      data.locale,
      ...(data.breadcrumbs_data?.map((page) => page.slug) ?? []),
    ),
    { recursive: true },
  );

  await write(path.join("_data/_dynamic/pages", `${data.link}.json`), data);

  // TODO stop using this in favor of above
  await write(`_data/_dynamic/pages/${data.locale}/${data.slug}.json`, data);
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
        block.items = block.items?.map((item) =>
          handleLink(locale.code, item, pages, posts),
        );
      }
    }
  }

  await write(`_data/_dynamic/main-menu/${locale.code}.json`, mainMenu);
}
