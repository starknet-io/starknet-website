/**
 * Module dependencies.
 */

import { getCategories } from "@starknet-io/cms-data/src/categories";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/posts/PostsPage";
import { getDefaultPageContext } from "src/renderer/helpers";

/**
 * Export `onBeforeRender` function.
 */

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;
  const { category: categorySlug } = pageContext.routeParams!;
  const categories = await getCategories(locale, pageContext.context);
  const category = categories.find((category) => category.slug === categorySlug);

  const pageProps: Props = {
    categories,
    topics: await getTopics(locale, pageContext.context),
    env: {
      ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
      ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
      ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
    },
    params: {
      locale,
      category: pageContext.routeParams!.category!,
    },
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
      documentProps: {
        title: `Starknet Blog - ${category?.name}`,
        description: "Get the latest insights from across the Starknet ecosystem, learn what community members are building or take a deep dive into the math that powers Starknet.",
        image: `${import.meta.env.VITE_SITE_URL}/assets/share/blog_landing.png`,
      },
    },
  };
}
