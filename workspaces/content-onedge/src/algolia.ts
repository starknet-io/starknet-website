import fs from "node:fs/promises";
import * as path from "node:path";

process.chdir(path.resolve(__dirname, "../../.."));

import algoliasearch from "algoliasearch";
import * as dotenv from "dotenv";
import { defaultLocale, locales } from "./locales";
import { fileToEvent, fileToJob, fileToPost, fileToTutorial } from "./data";

const dotenvFiles = [".env.local", ".env"];

dotenvFiles.forEach((path) => dotenv.config({ path }));

try {
  const client = algoliasearch(
    process.env.ALGOLIA_APP_ID!,
    process.env.ALGOLIA_WRITE_API_KEY!,
  );

  const resources = [
    ["posts", fileToPost],
    ["jobs", fileToJob],
    ["events", fileToEvent],
    ["tutorials", fileToTutorial],
  ] as const;

  for (const [resourceName, fileToResource] of resources) {
    console.log("resourceName", resourceName);

    const indexName = `web_${resourceName}_dev`;
    const objects = [];
    const filenames = await fs.readdir(
      path.join("_data", resourceName, defaultLocale),
    );

    for (const locale of locales) {
      for (const filename of filenames) {
        objects.push(await fileToResource(locale.code, filename));
      }
    }

    const index = client.initIndex(indexName);

    await index.clearObjects().wait();

    await index
      .saveObjects(objects, {
        autoGenerateObjectIDIfNotExist: true,
      })
      .wait();
  }
} catch (err) {
  console.error(err);
}
