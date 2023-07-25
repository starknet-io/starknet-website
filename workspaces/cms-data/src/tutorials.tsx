import { getFirst, getJSON } from "@starknet-io/cms-utils/src";
// import algoliasearch from "algoliasearch";
import { defaultLocale } from "./i18n/config";

type Author = {
  readonly author?: string;
  readonly author_link?: string;
}

export type Tutorial = {
  readonly id?: string;
  readonly type: "youtube" | "blog" | "github";
  readonly url: string;
  readonly image?: string;
  readonly title: string;
  readonly authors?: Author[];
  readonly published_at: string;
  readonly difficulty?: "beginner" | "intermediate" | "advanced";
  readonly tags?: string[];
  readonly locale: string;
  readonly filepath: string;
  readonly description?: string;
};

export const getTutorialById = async (
  id: string,
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
) => {
  return getFirst(
    ...[locale, defaultLocale].map(
      (value) => async () =>
        getJSON("data/tutorials/" + value + "/" + id, context)
    ),
    // async () => {
    //   const client = algoliasearch(
    //     import.meta.env.VITE_ALGOLIA_APP_ID!,
    //     import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!
    //   );
    //   const index = client.initIndex(`web_posts_${process.env.ALGOLIA_INDEX}`);

    //   const searchResponse = await index.search<Tutorial>("", {
    //     facetFilters: [`locale:${locale}`, `id:${id}`],
    //   });

    //   const tutorial = searchResponse.hits[0];

    //   if (tutorial == null) {
    //     throw new Error("Tutorial not found!");
    //   }

    //   return tutorial;
    // }
  );
};
