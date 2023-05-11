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
    // @ts-expect-error
    preview_context: "Vercel – starknet-website"
  },
  publish_mode: "editorial_workflow",
  show_preview_links: true,
  site_url: "http://localhost:3000",
  media_folder: "public/assets",
  public_folder: "/assets",
  collections,
} satisfies CmsConfig;
