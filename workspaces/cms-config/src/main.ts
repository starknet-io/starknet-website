import { collections } from "./collections";
import { CmsConfig } from "./types";

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
    base_url: "https://netlify-cms-auth.yukilabs.workers.dev",
  },
  media_folder: "public/assets",
  public_folder: "/assets",
  collections,
} satisfies CmsConfig;
