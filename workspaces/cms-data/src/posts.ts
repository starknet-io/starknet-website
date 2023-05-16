import algoliasearch from "algoliasearch";
import { defaultLocale } from "./i18n/config";
import type { TopLevelBlock } from "./pages";
import { getFirst, Meta } from "@starknet-io/cms-utils/src/index";
import { youtube_v3 } from "googleapis";
import fs from "node:fs/promises";
import path from "node:path";

interface VideoMeta {
  readonly url: string;
  readonly id?: string | undefined;
  readonly data?: youtube_v3.Schema$Video;
}

export interface Post extends Meta {
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
  readonly video?: VideoMeta;
  readonly deploy_id: string;
  readonly blocks: readonly TopLevelBlock[];
  readonly timeToConsume: string;
}

export async function getPostBySlug(
  slug: string,
  locale: string
): Promise<Post> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(
                process.cwd(),
                "_crowdin/data/posts",
                value as string,
                slug + ".json"
              ),
              "utf8"
            )
          )
      ),
      async () => {
        const client = algoliasearch(
          process.env.ALGOLIA_APP_ID!,
          process.env.ALGOLIA_SEARCH_API_KEY!
        );
        const index = client.initIndex(
          `web_posts_${process.env.ALGOLIA_INDEX}`
        );

        const searchResponse = await index.search<Post>("", {
          facetFilters: [`locale:${locale}`, `slug:${slug}`],
        });

        const post = searchResponse.hits[0];

        if (post == null) {
          throw new Error("Post not found!");
        }

        return post;
      }
    );
  } catch (cause) {
    throw new Error(`Post not found! ${slug}`, {
      cause,
    });
  }
}

export async function getPostById(
  id: string | string[] | undefined,
  locale: string | string[]
): Promise<Post> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(
                process.cwd(),
                "_crowdin/data/posts",
                value as string,
                id + ".json"
              ),
              "utf8"
            )
          )
      ),
      async () => {
        const client = algoliasearch(
          process.env.ALGOLIA_APP_ID!,
          process.env.ALGOLIA_SEARCH_API_KEY!
        );
        const index = client.initIndex(
          `web_posts_${process.env.ALGOLIA_INDEX}`
        );

        const searchResponse = await index.search<Post>("", {
          facetFilters: [`locale:${locale}`, `slug:${id}`],
        });

        const post = searchResponse.hits[0];

        if (post == null) {
          throw new Error("Post not found!");
        }

        return post;
      }
    );
  } catch (cause) {
    throw new Error(`Post not found! ${id}`, {
      cause,
    });
  }
}
