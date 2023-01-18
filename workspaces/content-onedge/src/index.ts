import fs from "node:fs/promises";
import * as path from "node:path";

process.chdir(path.resolve(__dirname, "../../.."));

import { getFirst, write, yaml } from "./utils";
import { defaultLocale, locales } from "./locales";
import { mdx } from "./mdx";
import { transformMainMenu } from "./main-menu";

const datatypes = [
  "categories",
  "events",
  "topics",
  "glossary",
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
            () => mdx(`_data/${datatype}/${locale.code}/${filename}`),
            () => mdx(`_data/${datatype}/${defaultLocale}/${filename}`)
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

// main menu
await fs.mkdir("_data/_dynamic/main-menu", { recursive: true });

for (const locale of locales) {
  const mainMenu = await transformMainMenu(
    await getFirst(
      () => yaml(`_data/settings/${locale.code}/main-menu.yml`),
      () => yaml(`_data/settings/${defaultLocale}/main-menu.yml`)
    ),
    async (page) => {
      const filename = page.page.replace(/(^\/|\/$)/g, "");

      const data = await getFirst(
        () => mdx(`_data/pages/${locale.code}/${filename}.md`),
        () => mdx(`_data/pages/${defaultLocale}/${filename}.md`),
        async () => null
      );

      return {
        ...page,
        title: data?.title ?? "",
      };
    }
  );

  await write(`_data/_dynamic/main-menu/${locale.code}.json`, mainMenu);
}
