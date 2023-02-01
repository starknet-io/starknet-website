import * as path from "node:path";

process.chdir(path.resolve(__dirname, "../../.."));

import algoliasearch from "algoliasearch";
import * as dotenv from "dotenv";

import { getPages, getPosts, getSimpleData } from "./data";

const dotenvFiles = [".env.local", ".env"];

dotenvFiles.forEach((path) => dotenv.config({ path }));

try {
  const client = algoliasearch(
    process.env.ALGOLIA_APP_ID!,
    process.env.ALGOLIA_WRITE_API_KEY!,
  );

  const resources = [
    await getPosts(),
    await getPages(),
    await getSimpleData("jobs"),
    await getSimpleData("events"),
    await getSimpleData("tutorials"),
  ] as const;

  for (const { resourceName, filenameMap } of resources) {
    console.log("resourceName", resourceName);

    const indexName = `web_${resourceName}_dev`;
    const objects = Array.from(filenameMap.values());

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
