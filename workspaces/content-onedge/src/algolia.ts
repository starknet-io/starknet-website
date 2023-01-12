import fs from "node:fs/promises";
import * as path from "node:path";

process.chdir(path.resolve(__dirname, "../../.."));

import algoliasearch from "algoliasearch";
import * as dotenv from "dotenv";
import { defaultLocale, locales } from "./locales";
import { getFirst, json } from "./utils";
import { mdx } from "./mdx";

const dotenvFiles = [".env.local", ".env"];

dotenvFiles.forEach((path) => dotenv.config({ path }));

interface Post {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly category: string;
  readonly topic: string;
  readonly short_desc: string;
  readonly locale: string;
  readonly filepath: string;
}

async function fileToPost(locale: string, filename: string): Promise<Post> {
  const resourceName = "posts";

  const data = await getFirst(
    () => mdx(path.join("_data", resourceName, locale, filename)),
    () => mdx(path.join("_data", resourceName, defaultLocale, filename)),
  );

  const id = filename.replace(/\.md$/, "");

  return {
    id,
    title: data.title,
    category: data.category,
    topic: data.topic,
    short_desc: data.short_desc,
    image: data.image,
    locale,
    filepath: path.join("_data", resourceName, locale, filename),
  };
}

export interface Event {
  readonly name: string;
  readonly image: string;
  readonly start_date: Date;
  readonly end_date: Date;
  readonly location: string; //'{"type":"Point","coordinates":[-7.0944214,53.1764117]}'
  readonly location_name: string;
  readonly url: string;
  readonly locale: string;
  readonly filepath: string;
}

async function fileToEvent(locale: string, filename: string): Promise<Event> {
  const resourceName = "events";

  const data = await getFirst(
    () => mdx(path.join("_data", resourceName, locale, filename)),
    () => mdx(path.join("_data", resourceName, defaultLocale, filename)),
  );

  return {
    name: data.name,
    image: data.image,
    start_date: data.start_date,
    end_date: data.end_date,
    location: data.location,
    location_name: data.location_name,
    url: data.url,
    locale,
    filepath: path.join("_data", resourceName, locale, filename),
  };
}

interface Job {
  readonly contact: {
    readonly name: string;
    readonly email: string;
    readonly twitter: string;
    readonly discord: string;
    readonly logo: string;
  };
  readonly job: {
    readonly description: string;
    readonly title: string;
    readonly required_experience: string;
    readonly scope: string;
    readonly location: string;
    readonly how_to_apply: string;
  };
  readonly locale: string;
  readonly filepath: string;
}

async function fileToJob(locale: string, filename: string): Promise<Job> {
  const resourceName = "jobs";

  const data = await getFirst(
    () => json(path.join("_data", resourceName, locale, filename)),
    () => json(path.join("_data", resourceName, defaultLocale, filename)),
  );

  return {
    job: data.job,
    contact: data.contact,
    locale,
    filepath: path.join("_data", resourceName, locale, filename),
  };
}

try {
  const client = algoliasearch(
    process.env.ALGOLIA_APP_ID!,
    process.env.ALGOLIA_WRITE_API_KEY!,
  );

  const resources = [
    ["posts", fileToPost],
    ["jobs", fileToJob],
    ["events", fileToEvent],
  ] as const;

  for (const [resourceName, fileToresource] of resources) {
    console.log("resourceName", resourceName);

    const indexName = `web_${resourceName}_dev`;
    const objects = [];
    const filenames = await fs.readdir(
      path.join("_data", resourceName, defaultLocale),
    );

    for (const locale of locales) {
      for (const filename of filenames) {
        objects.push(await fileToresource(locale.code, filename));
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
