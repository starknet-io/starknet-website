import { CmsConfig } from "../types";
import { categoriesCollectionConfig } from "./categories";
import { eventsCollectionConfig } from "./events";
import { jobsCollectionConfig } from "./jobs";
import { pagesCollectionConfig } from "./pages";
import { postsCollectionConfig } from "./posts";
import { settingsCollectionConfig } from "./settings";
import { topicsCollectionConfig } from "./topics";
import { tutorialsCollectionConfig } from "./tutorials";
import { SEOCollectionConfig } from "./seo";
import { roadmapPostsCollectionConfig } from "./roadmapPosts";
import { roadmapVersionsCollectionConfig } from "./roadmapVersions";
import { announcementsCollectionConfig } from "./announcements";

export const collections: CmsConfig["collections"] = [
  pagesCollectionConfig,
  postsCollectionConfig,
  topicsCollectionConfig,
  categoriesCollectionConfig,
  eventsCollectionConfig,
  jobsCollectionConfig,
  tutorialsCollectionConfig,
  settingsCollectionConfig,
  SEOCollectionConfig,
  roadmapPostsCollectionConfig,
  roadmapVersionsCollectionConfig,
  announcementsCollectionConfig,
];
