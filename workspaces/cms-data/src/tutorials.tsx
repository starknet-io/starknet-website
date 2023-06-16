import algoliasearch from "algoliasearch";

export type Tutorial = {
  readonly id?: string;
  readonly type: "youtube" | "blog" | "github";
  readonly url: string;
  readonly image?: string;
  readonly title: string;
  readonly author?: string;
  readonly published_at: string;
  readonly difficulty?: "beginner" | "intermediate" | "advanced";
  readonly tags?: string[];
  readonly locale: string;
  readonly filepath: string;
  readonly description?: string;
};

export const getTutorialById = async (id: string, locale: string) => {
  const client = algoliasearch(
    process.env.ALGOLIA_APP_ID!,
    process.env.ALGOLIA_SEARCH_API_KEY!
  );
  //   const index = client.initIndex(`web_posts_${process.env.ALGOLIA_INDEX}`);
  const index = client.initIndex(`web_tutorials_${process.env.ALGOLIA_INDEX}`);

  const searchResponse = await index.search<Tutorial>("", {
    facetFilters: [`locale:${locale}`, `id:${id}`],
  });

  const tutorial = searchResponse.hits[0];

  if (tutorial == null) {
    throw new Error("Tutorial not found!");
  }

  return tutorial;
};
