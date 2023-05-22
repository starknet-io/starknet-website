import { getCategories } from "@starknet-io/cms-data/src/categories";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { DocumentProps, PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/posts/PostsPage";
import { getDefaultPageContext } from "src/renderer/helpers";
import { generateBlogMetadata } from "src/utils/seo";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;

  const pageProps: Props = {
    categories: await getCategories(locale, pageContext.event),
    topics: await getTopics(locale, pageContext.event),
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

  const category = pageProps.categories.find(
    (c) => c.id === pageProps.params.category
  );

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
      documentProps: generateBlogMetadata(category?.name) satisfies DocumentProps,
    },
  };
}
