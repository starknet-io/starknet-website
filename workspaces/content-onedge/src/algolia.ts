import fs from "node:fs/promises";
import * as path from "node:path";

process.chdir(path.resolve(__dirname, "../../.."));

import algoliasearch from "algoliasearch";
import * as dotenv from "dotenv";
import { defaultLocale, locales } from "./locales";
import { getFirst, json, yaml } from "./utils";

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
    () => yaml(path.join("_data", resourceName, locale, filename)),
    () => yaml(path.join("_data", resourceName, defaultLocale, filename)),
  );

  const safeID = data.id.replace(/[^a-z0-9]/gi, "-").toLowerCase();

  return {
    id: safeID,
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
  readonly location: string;
  readonly city: string;
  readonly venue: string;
  readonly type: string;
  readonly url: string;
  readonly tags: string;
  readonly locale: string;
  readonly filepath: string;
}

async function fileToEvent(locale: string, filename: string): Promise<Event> {
  const resourceName = "events";

  const data = await getFirst(
    () => yaml(path.join("_data", resourceName, locale, filename)),
    () => yaml(path.join("_data", resourceName, defaultLocale, filename)),
  );

  return {
    name: data.name,
    image: data.image,
    start_date: data.start_date,
    end_date: data.end_date,
    location: data.location,
    city: data.city,
    venue: data.venue,
    tags: data.tags,
    type: data.type,
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
    readonly title: string;
    readonly description: string;
    readonly role: string;
    readonly type: string;
    readonly required_experience: string;
    readonly scope: string;
    readonly location: string;
    readonly how_to_apply: string;
    readonly apply_url: string;
  };
  readonly locale: string;
  readonly filepath: string;
}

async function fileToJob(locale: string, filename: string): Promise<Job> {
  const resourceName = "jobs";

  const data = await getFirst(
    () => yaml(path.join("_data", resourceName, locale, filename)),
    () => yaml(path.join("_data", resourceName, defaultLocale, filename)),
  );

  return {
    job: {
      title: data.job.title,
      description: data.job.description,
      role: data.job.role,
      type: data.job.type,
      required_experience: data.job.required_experience,
      scope: data.job.scope,
      location: data.job.location,
      how_to_apply: data.job.how_to_apply,
      apply_url: data.job.apply_url,
    },
    contact: {
      name: data.contact.name,
      email: data.contact.email,
      twitter: data.contact.twitter,
      discord: data.contact.discord,
      logo: data.contact.logo,
    },
    locale,
    filepath: path.join("_data", resourceName, locale, filename),
  };
}

interface Tutorial {
  readonly id: string;
  readonly type: "youtube" | "blog" | "github";
  readonly url: string;
  readonly image?: string;
  readonly title?: string;
  readonly author?: string;
  readonly published_at: string;
  readonly difficulty?: "beginner" | "intermediate" | "advanced";
  readonly tags?: string;
  readonly locale: string;
  readonly filepath: string;
}

async function fileToTutorial(
  locale: string,
  filename: string,
): Promise<Tutorial> {
  const resourceName = "tutorials";

  const data = await getFirst(
    () => yaml(path.join("_data", resourceName, locale, filename)),
    () => yaml(path.join("_data", resourceName, defaultLocale, filename)),
  );

  return {
    id: data.id,
    type: data.type,
    url: data.url,
    image: data.image,
    title: data.title,
    author: data.author,
    published_at: data.published_at,
    difficulty: data.difficulty,
    tags: data.tags,
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
    ["tutorials", fileToTutorial],
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
