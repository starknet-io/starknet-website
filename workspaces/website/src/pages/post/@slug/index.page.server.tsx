/**
 * Module dependencies
 */

import { getCategories } from "@starknet-io/cms-data/src/categories";
import { getPostBySlug } from "@starknet-io/cms-data/src/posts";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { DocumentProps, PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/post/PostPage";
import { getDefaultPageContext } from "src/renderer/helpers";

/**
 * Export `onBeforeRender` function.
 */

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;

  const post = await getPostBySlug(
    pageContext.routeParams.slug,
    locale,
    pageContext.context
  )

  const pageProps: Props = {
    post ,
    categories: await getCategories(locale, pageContext.context),
    topics: await getTopics(locale, pageContext.context),
    env: {
      ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
      ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
      ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
      SITE_URL: import.meta.env.VITE_SITE_URL,
    },
    params: {
      locale,
      slug: pageContext.routeParams!.slug!,
    },
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
      documentProps: {
        title: post.title,
        description: post.short_desc,
        image: `${import.meta.env.VITE_SITE_URL}${post.image}`,
      } satisfies DocumentProps,
    },
  };
}
