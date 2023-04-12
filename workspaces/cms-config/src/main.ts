import type { Config } from "@staticcms/core";
import type { CmsConfig } from "netlify-cms-core";
import { collections } from "./collections";

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
    // base_url: "https://cms-auth-cf-worker.thecotne.workers.dev",
    base_url: "https://cms-auth-cf-worker.thecotne.workers.dev",
  },
  media_folder: "public/assets",
  public_folder: "/assets",
  collections,
} satisfies CmsConfig & Config;
