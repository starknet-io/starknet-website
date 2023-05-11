import { getCategories } from "@starknet-io/cms-data/src/categories";
import { getPostBySlug } from "@starknet-io/cms-data/src/posts";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { DocumentProps, PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/posts/PostPage";
import { getDefaultPageContext } from "src/renderer/helpers";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;

  const pageProps: Props = {
    post: await getPostBySlug(
      pageContext.routeParams.slug,
      locale,
      pageContext.event
    ),
    categories: await getCategories(locale, pageContext.event),
    topics: await getTopics(locale, pageContext.event),
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
        title: pageProps.post.title,
        description: pageProps.post.short_desc,
        image: pageProps.post.image,
      } satisfies DocumentProps,
    },
  };
}
