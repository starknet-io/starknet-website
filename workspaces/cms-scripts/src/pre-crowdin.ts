import fs from "node:fs/promises";
import * as path from "node:path";
import * as dotenv from "dotenv";
import YAML from "yaml";

process.chdir(path.resolve(__dirname, "../../.."));

const dotenvFiles = [".env.local", ".env"];

dotenvFiles.forEach((path) => dotenv.config({ path }));

import { yaml } from "./utils";
import { defaultLocale } from "./locales";

const resources = [
  "categories",
  "events",
  "jobs",
  "pages",
  "posts",
  "settings",
  "topics",
  "tutorials",
];

for (const resourceName of resources) {
  const locale = defaultLocale;
  const filenames = await fs.readdir(`_data/${resourceName}/${locale}`);

  for (const filename of filenames) {
    const filepath = path.join("_data", resourceName, locale, filename);

    const data = await yaml(filepath);

    await fs.writeFile(
      filepath,
      YAML.stringify(data, {
        strict: true,
        collectionStyle: "block",
        defaultStringType: "PLAIN",
        defaultKeyType: "PLAIN",
        doubleQuotedAsJSON: true,
        version: "1.1",
      }),
      {
        encoding: "utf8",
      },
    );
  }
}
