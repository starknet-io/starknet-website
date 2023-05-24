import { defaultLocale } from "./i18n/config";
import { Meta, getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";
import path from "node:path";
import { TopLevelBlock } from "./pages";

export interface RoadmapPost extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly image: string;
  readonly category: string;
  readonly topic: string[];
  readonly short_desc: string;
  readonly post_type: string;
  readonly post_date: string;
  readonly toc: boolean;
  readonly published_date: string;
  readonly blocks: readonly TopLevelBlock[];
  readonly timeToConsume: string;
}

export async function getRoadmapPosts(
  locale: string
): Promise<readonly RoadmapPost[]> {
  try {
    const roadmapPosts: RoadmapPost[] = [];

    const filesInDir = await fs.readdir(
      path.join(process.cwd(), "_crowdin/data/roadmap-posts", locale)
    );

    const jsonFilesInDir = filesInDir.filter((file) => file.endsWith(".json"));

    for (const fileName of jsonFilesInDir) {
      const fileData = await fs.readFile(
        path.join(
          process.cwd(),
          "_crowdin/data/roadmap-posts",
          locale,
          fileName
        ),
        "utf8"
      );
      const jsonData = JSON.parse(fileData.toString());
      roadmapPosts.push(jsonData);
    }

    return roadmapPosts;
  } catch (cause) {
    throw new Error("getRoadmapPosts failed!", {
      cause,
    });
  }
}

export async function getRoadmapPostBySlug(
  slug: string,
  locale: string
): Promise<RoadmapPost> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(
                process.cwd(),
                "_crowdin/data/roadmap-posts",
                value,
                slug + ".json"
              ),
              "utf8"
            )
          )
      )
    );
  } catch (cause) {
    throw new Error(`Roadmap Post not found! ${slug}`, {
      cause,
    });
  }
}
