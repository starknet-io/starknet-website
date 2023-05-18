import { collections } from "./collections";
import { CmsConfig } from "./types";

export const CMSConfig = {
  slug: {
    clean_accents: true,
    encoding: "ascii",
    sanitize_replacement: "-",
  },
  backend: {
    // @ts-expect-error
    name: "github-yuki",
    repo: "starknet-io/starknet-website",
    branch: "dev",
    base_url: "https://netlify-cms-auth.yukilabs.workers.dev",
    preview_context: "Vercel – starknet-website",
  },
  publish_mode: "editorial_workflow",
  show_preview_links: true,
  media_folder: "public/assets",
  public_folder: "/assets",
  collections,
} satisfies CmsConfig;
