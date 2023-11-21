import { getCategories } from "@starknet-io/cms-data/src/categories";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/posts/PostsPage";
import { getDefaultPageContext } from "src/renderer/helpers";
import { getFeaturedSections } from "@starknet-io/cms-data/src/settings/featured-settings";
import qs from "qs";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const query = qs.parse((pageContext as any)._urlPristine?.split("?")[1] ?? '');
  const { locale } = defaultPageContext;
  const featuredSections = await getFeaturedSections(pageContext.context);

  const pageProps: Props = {
    categories: await getCategories(locale, pageContext.context),
    featuredSections,
    topics: await getTopics(locale, pageContext.context),
    env: {
      ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
      ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
      ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
    },
    params: {
      locale,
      ...query.postType && {
        postType: query.postType as string,
      },
      ...!!query.topicFilters && {
        topicFilters: (Array.isArray(query.topicFilters) ? query.topicFilters : [query.topicFilters]) as string[],
      }
    },
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
    },
  };
}
