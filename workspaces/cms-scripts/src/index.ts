import fs from "fs/promises";
import * as path from "path";

process.chdir(path.resolve(__dirname, "../../.."));

import { write, yaml } from "./utils";
import { locales } from "@starknet-io/cms-data/src/i18n/config";
import { MainMenu } from "./main-menu";
import {
  AnnouncementDetails,
  AnnouncementsPost,
  RoadmapDetails,
  RoadmapPost,
  getAnnouncements,
  getPages,
  getPosts,
  getRoadmapPosts,
  getSimpleData,
  getSimpleFiles,
  getTutorials,
  handleLink,
  updateBlocks,
} from "./data";
import { translateFile } from "./crowdin";

const createRoadmapDetails = async () => {
  await fs.mkdir(`public/data/roadmap-details`, {recursive: true});
  for (const locale of locales) {
    const roadmapPosts: RoadmapDetails[] = [];
    const filesPath = path.join("public/data/roadmap-posts", locale)
    const filesInDir = await fs.readdir(filesPath);

    const jsonFilesInDir = filesInDir.filter((file) => file.endsWith(".json"));

    for (const fileName of jsonFilesInDir) {
      const fileData = await fs.readFile(
        path.join(
          process.cwd(),
          "public/data/roadmap-posts",
          locale,
          fileName
        ),
        "utf8"
      );

      const { blocks, gitlog, sourceFilepath, objectID, ...roadmapDetails }: RoadmapPost = JSON.parse(fileData.toString());
      roadmapPosts.push(roadmapDetails);
    }
    await write(path.join("public/data/roadmap-details", `${locale}.json`), roadmapPosts);
  }
}

const createAnnouncementDetails = async () => {
  await fs.mkdir(`public/data/announcements-details`, {recursive: true});
  for (const locale of locales) {
    const roadmapPosts: AnnouncementDetails[] = [];
    const filesPath = path.join("public/data/announcements", locale)
    const filesInDir = await fs.readdir(filesPath);

    const jsonFilesInDir = filesInDir.filter((file) => file.endsWith(".json"));

    for (const fileName of jsonFilesInDir) {
      const fileData = await fs.readFile(
        path.join(
          process.cwd(),
          "public/data/announcements",
          locale,
          fileName
        ),
        "utf8"
      );

      const { blocks, gitlog, sourceFilepath, objectID, ...roadmapDetails }: AnnouncementsPost = JSON.parse(fileData.toString());
      roadmapPosts.push(roadmapDetails);
    }
    await write(path.join("public/data/announcements-details", `${locale}.json`), roadmapPosts);
  }
}

const createSharedData = async () => {
  await fs.mkdir(`public/data/shared-data`, { recursive: true });
  const seoFiles = [
    "home",
    "footer",
    "tutorials",
    "events",
    "jobs",
    "search",
    "language",
    "newsletter"
  ];

  for (const locale of locales) {
    const seo: Record<string, any> = {}

    for (const fileName of seoFiles) {
      const fileData = await fs.readFile(
        path.join(process.cwd(), `public/data/seo/${fileName}/${locale}.json`),
        "utf8"
      );
      
      const fileDataParsed = JSON.parse(fileData.toString());
      seo[fileName] = fileDataParsed
    }

    const mainMenuData = await fs.readFile(
      path.join(process.cwd(), `public/data/main-menu/${locale}.json`),
      "utf8"
    );

    const alertsData = await fs.readFile(
      path.join(process.cwd(), `public/data/alert/${locale}.json`),
      "utf8"
    );

    const sharedData = {
      seo,
      mainMenu: JSON.parse(mainMenuData.toString()),
      alerts: JSON.parse(alertsData.toString()),
    }

    await write(
      path.join("public/data/shared-data", `${locale}.json`),
      sharedData
    );
  }
};

const simpleDataTypes = [
  await getSimpleData("categories"),
  await getSimpleData("events"),
  await getSimpleData("topics"),
  await getSimpleData("roadmap-versions"),
  await getSimpleData("jobs"),
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
  await getSimpleFiles("settings", "wallets"),
  await getSimpleFiles("settings", "redirects"),
  await getSimpleFiles("settings", "alert"),
  await getSimpleFiles("settings", "permissions"),
  await getSimpleFiles("settings", "roadmap", true),
  await getSimpleFiles("settings", "blog-posts", true),
  await getSimpleFiles("seo", "events", true),
  await getSimpleFiles("seo", "tutorials", true),
  await getSimpleFiles("seo", "jobs", true),
  await getSimpleFiles("seo", "footer", true),
  await getSimpleFiles("seo", "home", true),
  await getSimpleFiles("seo", "language", true),
  await getSimpleFiles("seo", "newsletter", true),
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
const tutorials = await getTutorials();

updateBlocks(pages, posts);

for (const locale of locales) {
  await fs.mkdir(`public/data/posts/${locale}`, { recursive: true });
}

for (const data of posts.filenameMap.values()) {
  await write(`public/data/posts/${data.locale}/${data.slug}.json`, data);
  await write(`public/data/posts/${data.locale}/${data.id}.json`, data);
}

for (const locale of locales) {
  await fs.mkdir(`public/data/tutorials/${locale}`, { recursive: true });
}

for (const data of tutorials.filenameMap.values()) {
  //@ts-ignore
  await write(`public/data/tutorials/${data.locale}/${data.id}.json`, data);
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
await createRoadmapDetails()
await createAnnouncementDetails()
await createSharedData()
