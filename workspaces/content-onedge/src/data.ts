import * as path from "node:path";
import { defaultLocale } from "./locales";
import { getFirst, slugify, yaml } from "./utils";
import { DefaultLogFields, simpleGit } from "simple-git";

const git = simpleGit();

export interface Meta {
  readonly gitlog?: DefaultLogFields | undefined | null;
  readonly sourceFilepath: string;
  readonly locale: string;
}

export interface Post extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly image: string;
  readonly category: string;
  readonly post_type: string;
  readonly published_date: string;
  readonly time_to_consume: string;
  readonly topic: string;
  readonly short_desc: string;
}

export async function fileToPost(
  locale: string,
  filename: string,
): Promise<Post> {
  const resourceName = "posts";
  const defaultLocaleFilepath = path.join(
    "_data",
    resourceName,
    defaultLocale,
    filename,
  );
  const filepath = path.join("_data", resourceName, locale, filename);

  const defaultLocaleData = await yaml(defaultLocaleFilepath);

  const data = await getFirst(
    () => yaml(filepath),
    () => defaultLocaleData,
  );

  const sourceFilepath =
    defaultLocaleData === data ? defaultLocaleFilepath : filepath;

  const log = await git.log({
    file: sourceFilepath,
    maxCount: 1,
  });

  const safeID = slugify(data.id);
  const slug = slugify(defaultLocaleData.title);

  return {
    id: safeID,
    slug,
    title: data.title,
    category: data.category,
    post_type: data.post_type,
    published_date: data.published_date,
    time_to_consume: data.time_to_consume,
    topic: data.topic,
    short_desc: data.short_desc,
    image: data.image,
    locale,
    sourceFilepath: path.join("_data", resourceName, locale, filename),
    gitlog: log.latest
      ? {
          ...log.latest,
          body: "",
        }
      : null,
  };
}

export interface Event extends Meta {
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
}

export async function fileToEvent(
  locale: string,
  filename: string,
): Promise<Event> {
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
    sourceFilepath: path.join("_data", resourceName, locale, filename),
  };
}

export interface Job extends Meta {
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
}

export async function fileToJob(
  locale: string,
  filename: string,
): Promise<Job> {
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
    sourceFilepath: path.join("_data", resourceName, locale, filename),
  };
}

export interface Tutorial extends Meta {
  readonly id: string;
  readonly type: "youtube" | "blog" | "github";
  readonly url: string;
  readonly image?: string;
  readonly title?: string;
  readonly author?: string;
  readonly published_at: string;
  readonly difficulty?: "beginner" | "intermediate" | "advanced";
  readonly tags?: string;
}

export async function fileToTutorial(
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
    sourceFilepath: path.join("_data", resourceName, locale, filename),
  };
}

export interface Page extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly parent_page?: string | undefined;
  readonly title: string;
  readonly template: "landing" | "content";
  readonly breadcrumbs: boolean;
  readonly pageLastUpdated: boolean;
  readonly blocks?: any;

  link?: string;
  breadcrumbs_data?: Page[];
}

export async function fileToPage(
  locale: string,
  filename: string,
): Promise<Page> {
  const resourceName = "pages";
  const defaultLocaleFilepath = path.join(
    "_data",
    resourceName,
    defaultLocale,
    filename,
  );
  const filepath = path.join("_data", resourceName, locale, filename);

  const defaultLocaleData = await yaml(defaultLocaleFilepath);

  const data = await getFirst(
    () => yaml(filepath),
    () => defaultLocaleData,
  );

  const sourceFilepath =
    defaultLocaleData === data ? defaultLocaleFilepath : filepath;

  const log = await git.log({
    file: sourceFilepath,
    maxCount: 1,
  });

  const safeID = slugify(data.id);
  const slug = slugify(defaultLocaleData.title);

  return {
    ...data,
    id: safeID,
    slug,
    locale,
    sourceFilepath,
    gitlog: log.latest
      ? {
          ...log.latest,
          body: "",
        }
      : null,
  };
}
