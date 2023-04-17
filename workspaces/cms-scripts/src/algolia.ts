import * as path from "node:path";

process.chdir(path.resolve(__dirname, "../../.."));

import algoliasearch from "algoliasearch";
import * as dotenv from "dotenv";

import {
  getPages,
  getPosts,
  getSimpleData,
  getTutorials,
  updateBlocks,
} from "./data";

const dotenvFiles = [".env.local", ".env"];

dotenvFiles.forEach((path) => dotenv.config({ path }));

try {
  const client = algoliasearch(
    process.env.ALGOLIA_APP_ID!,
    process.env.ALGOLIA_WRITE_API_KEY!,
  );
  const posts = await getPosts();
  const pages = await getPages();

  updateBlocks(pages, posts);

  const resources = [
    posts,
    pages,
    await getSimpleData("jobs"),
    await getSimpleData("events"),
    await getTutorials(),
  ] as const;

  for (const { resourceName, filenameMap } of resources) {
    console.log("resourceName", resourceName);

    const indexName = `web_${resourceName}_${process.env.ALGOLIA_INDEX}`;
    const objects = Array.from(filenameMap.values());

    const index = client.initIndex(indexName);

    const objectIDsSet = new Set(objects.map((a) => a.objectID));
    const deleteObjectIDs: string[] = [];

    await index.browseObjects({
      batch: (batch) => {
        for (const obj of batch) {
          if (!objectIDsSet.has(obj.objectID)) {
            deleteObjectIDs.push(obj.objectID);
          }
        }
      },
    });

    await index.deleteObjects(deleteObjectIDs).wait();
    await index.saveObjects(objects).wait();

    if (resourceName === "events") {
      await index
        .setSettings({
          customRanking: ["desc(start_date_ts)"],
          replicas: [`${indexName}_desc`, `${indexName}_asc`],
        })
        .wait();

      const desc = client.initIndex(`${indexName}_desc`);
      await desc
        .setSettings({
          customRanking: ["desc(start_date_ts)"],
        })
        .wait();

      const asc = client.initIndex(`${indexName}_asc`);
      await asc
        .setSettings({
          customRanking: ["asc(start_date_ts)"],
        })
        .wait();
    }
  }
} catch (err) {
  console.error(err);
}
