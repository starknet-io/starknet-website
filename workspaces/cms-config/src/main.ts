import type { Config } from "@staticcms/core";
import type { CmsConfig } from "netlify-cms-core";
import { categoriesCollectionConfig } from "./collections/categories";
import { eventsCollectionConfig } from "./collections/events";
import { jobsCollectionConfig } from "./collections/jobs";
import { pagesCollectionConfig } from "./collections/pages";
import { postsCollectionConfig } from "./collections/posts";
import { settingsCollectionConfig } from "./collections/settings";
import { topicsCollectionConfig } from "./collections/topics";
import { tutorialsCollectionConfig } from "./collections/tutorials";

export const CMSConfig = {
  slug: {
    clean_accents: true,
    encoding: "ascii",
    sanitize_replacement: "-",
  },
  backend: {
    name: "github",
    repo: "starknet-io/starknet-website",
    branch: "dev",
    base_url: "https://starknet-website-cms-auth-api.vercel.app",
  },
  media_folder: "public/assets",
  public_folder: "/assets",
  collections: [
    pagesCollectionConfig,
    postsCollectionConfig,
    topicsCollectionConfig,
    categoriesCollectionConfig,
    eventsCollectionConfig,
    jobsCollectionConfig,
    tutorialsCollectionConfig,
    settingsCollectionConfig,
  ],
} satisfies CmsConfig & Config;
