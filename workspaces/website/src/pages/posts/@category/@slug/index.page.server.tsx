import { getCategories } from "@starknet-io/cms-data/src/categories";
import { getPostBySlug } from "@starknet-io/cms-data/src/posts";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { DocumentProps, PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/posts/PostPage";
import { getDefaultPageContext } from "src/renderer/helpers";

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
