import fs from "node:fs/promises";
import * as path from "node:path";

process.chdir(path.resolve(__dirname, "../../.."));

import { getFirst, write, yaml } from "./utils";
import { defaultLocale, locales } from "./locales";
import { mdx } from "./mdx";
import { transformMainMenu } from "./main-menu";

// events
await fs.mkdir("_data/_dynamic/events", { recursive: true });

const filenames = await fs.readdir(`_data/events/${defaultLocale}`);

for (const locale of locales) {
  const events: any[] = [];

  for (const filename of filenames) {
    events.push(
      await getFirst(
        () => mdx(`_data/events/${locale.code}/${filename}`),
        () => mdx(`_data/events/${defaultLocale}/${filename}`),
      ),
    );
  }

  await write(`_data/_dynamic/events/${locale.code}.json`, events);
}

// main menu
await fs.mkdir("_data/_dynamic/main-menu", { recursive: true });

for (const locale of locales) {
  const mainMenu = await transformMainMenu(
    await getFirst(
      () => yaml(`_data/settings/${locale.code}/main-menu.yml`),
      () => yaml(`_data/settings/${defaultLocale}/main-menu.yml`),
    ),
    async (page) => {
      const filename = page.page.replace(/(^\/|\/$)/g, "");

      const data = await getFirst(
        () => mdx(`_data/pages/${locale}/${filename}.md`),
        () => mdx(`_data/pages/${defaultLocale}/${filename}.md`),
      );

      return {
        ...page,
        title: data.title,
      };
    },
  );

  await write(`_data/_dynamic/main-menu/${locale.code}.json`, mainMenu);
}
