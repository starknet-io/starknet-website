import fs from "fs/promises";
import * as path from "path";

process.chdir(path.resolve(__dirname, "../../.."));

import { write, yaml } from "./utils";
import { locales } from "@starknet-io/cms-data/src/i18n/config";
import { MainMenu } from "./main-menu";
import {
  getAnnouncements,
  getPages,
  getPosts,
  getRoadmapPosts,
  getSimpleData,
  getSimpleFiles,
  handleLink,
  updateBlocks,
} from "./data";
import { translateFile } from "./crowdin";

const simpleDataTypes = [
  await getSimpleData("categories"),
  await getSimpleData("events"),
  await getSimpleData("topics"),
  await getSimpleData("roadmap-versions"),
];

for (const simpleData of simpleDataTypes) {
  await fs.mkdir(`public/data/${simpleData.resourceName}`, {
    recursive: true,
  });

  for (const locale of locales) {
    const data = simpleData.filenames.map((filename) =>
      simpleData.filenameMap.get(`${locale}:${filename}`)
    );

    await write(`public/data/${simpleData.resourceName}/${locale}.json`, data);
  }
}

const simpleFiles = [
  await getSimpleFiles("settings", "dapps"),
  await getSimpleFiles("settings", "wallets"),
  await getSimpleFiles("settings", "block-explorers"),
  await getSimpleFiles("settings", "bridges"),
  await getSimpleFiles("settings", "fiat-on-ramps"),
  await getSimpleFiles("settings", "redirects"),
  await getSimpleFiles("settings", "alert"),
  await getSimpleFiles("settings", "roadmap", true),
  await getSimpleFiles("settings", "blog-posts", true),
  await getSimpleFiles("seo", "events", true),
  await getSimpleFiles("seo", "tutorials", true),
  await getSimpleFiles("seo", "jobs", true),
  await getSimpleFiles("seo", "footer", true),
  await getSimpleFiles("seo", "home", true),
  await getSimpleFiles("seo", "language", true),
  await getSimpleFiles("seo", "search", true),
];

for (const simpleFile of simpleFiles) {
  const resourceDir =
    simpleFile.collectionName === "settings"
      ? simpleFile.resourceName
      : `${simpleFile.collectionName}/${simpleFile.resourceName}`;

  await fs.mkdir(`public/data/${resourceDir}`, {
    recursive: true,
  });

  for (const locale of locales) {
    const data = simpleFile.localeMap.get(locale)!;

    await write(
      `public/data/${resourceDir}/${locale}.json`,
      simpleFile.writeRootData ? data : data.items
    );
  }
}

const posts = await getPosts();
const roadmapPosts = await getRoadmapPosts();
const announcements = await getAnnouncements();
const pages = await getPages();

updateBlocks(pages, posts);

for (const locale of locales) {
  await fs.mkdir(`public/data/posts/${locale}`, { recursive: true });
}

for (const data of posts.filenameMap.values()) {
  await write(`public/data/posts/${data.locale}/${data.slug}.json`, data);
  await write(`public/data/posts/${data.locale}/${data.id}.json`, data);
}

for (const locale of locales) {
  await fs.mkdir(`public/data/pages/${locale}`, { recursive: true });
  await fs.mkdir(`public/data/roadmap-posts/${locale}`, { recursive: true });
  await fs.mkdir(`public/data/announcements/${locale}`, { recursive: true });
}

for (const data of roadmapPosts.filenameMap.values()) {
  await write(
    `public/data/roadmap-posts/${data.locale}/${data.slug}.json`,
    data
  );
}

for (const data of announcements.filenameMap.values()) {
  await write(
  `public/data/announcements/${data.locale}/${data.slug}.json`,
  data
);
}

for (const locale of locales) {
  await fs.mkdir(`public/data/pages/${locale}`, { recursive: true });
}

for (const data of pages.filenameMap.values()) {
  await fs.mkdir(
    path.join(
      "public/data/pages",
      data.locale,
      ...(data.breadcrumbs_data?.map((page) => page.slug) ?? [])
    ),
    { recursive: true }
  );

  await write(path.join("public/data/pages", `${data.link}.json`), data);

  // TODO stop using this in favor of above
  await write(`public/data/pages/${data.locale}/${data.slug}.json`, data);
  await write(`public/data/pages/${data.locale}/${data.id}.json`, data);
}

// main menu
await fs.mkdir("public/data/main-menu", { recursive: true });

for (const locale of locales) {
  const mainMenu: MainMenu = await translateFile(
    locale,
    "settings",
    "main-menu.yml"
  );

  for (const mainMenuItem of mainMenu.items) {
    for (const column of mainMenuItem.columns ?? []) {
      for (const block of column.blocks ?? []) {
        block.items = block.items?.map((item) =>
          handleLink(locale, item, pages, posts)
        );
      }
    }
  }

  await write(`public/data/main-menu/${locale}.json`, mainMenu);
}

const redirects = await yaml("_data/settings/redirects.yml");

await write(`workspaces/website/redirects.json`, redirects);
