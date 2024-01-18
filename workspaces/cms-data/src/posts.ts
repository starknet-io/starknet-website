import algoliasearch from "algoliasearch";
import { defaultLocale } from "./i18n/config";
import type { TopLevelBlock } from "./pages";
import { getFirst, Meta, getJSON } from "@starknet-io/cms-utils/src/index";
import type { youtube_v3 } from "googleapis";

interface VideoMeta {
  readonly url: string;
  readonly id?: string | undefined;
  readonly data?: youtube_v3.Schema$Video;
}

export interface Post extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly seoTitle: string;
  readonly image: string;
  readonly category: string;
  readonly topic: string[];
  readonly short_desc: string;
  readonly post_desc: string;
  readonly seo_desc: string;
  readonly post_type: string;
  readonly post_date: string;
  readonly toc: boolean;
  readonly published_date: string;
  readonly video?: VideoMeta;
  readonly blocks?: readonly TopLevelBlock[];
  readonly timeToConsume: string;
}

export async function getPostBySlug(
  slug: string,
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<Post> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          getJSON("data/posts/" + value + "/" + slug, context)
      ),
      async () => {
        const client = algoliasearch(
          import.meta.env.VITE_ALGOLIA_APP_ID!,
          import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!
        );
        const index = client.initIndex(
          `web_posts_${import.meta.env.VITE_ALGOLIA_INDEX}`
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
  locale: string | string[],
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<Post> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/posts/" + value + "/" + id, context)
      ),
      async () => {
        const client = algoliasearch(
          import.meta.env.VITE_ALGOLIA_APP_ID!,
          import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!
        );
        const index = client.initIndex(
          `web_posts_${import.meta.env.VITE_ALGOLIA_INDEX}`
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
