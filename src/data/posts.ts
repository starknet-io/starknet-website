import algoliasearch from "algoliasearch";
import { defaultLocale } from "./i18n/config";
import { TopLevelBlock } from "./pages";
import { getFirst, getJSON, Meta } from "./utils";

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
  readonly time_to_consume: string;
  readonly published_date: string;
  readonly video_link: string;
  readonly blocks: readonly TopLevelBlock[];
}

export async function getPostBySlug(
  slug: string,
  locale: string,
): Promise<Post> {
  try {
    return (await getFirst(
      () => getJSON(`_dynamic/posts/${locale}/${slug}.json`),
      async () => {
        const client = algoliasearch(
          process.env.ALGOLIA_APP_ID!,
          process.env.ALGOLIA_SEARCH_API_KEY!,
        );
        const index = client.initIndex("web_posts_dev");

        const searchResponse = await index.search<Post>("", {
          facetFilters: [`locale:${locale}`, `slug:${slug}`],
        });

        const post = searchResponse.hits[0];

        if (post == null) {
          throw new Error("Post not found!");
        }

        return post;
      },
      () => getJSON(`_dynamic/posts/${defaultLocale}/${slug}.json`),
    )) as Post;
  } catch (cause) {
    throw new Error(`Post not found! ${slug}`, {
      cause,
    });
  }
}
