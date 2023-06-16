import { getCategories } from "@starknet-io/cms-data/src/categories";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { PageContextServer } from "src/renderer/types";
import { getDefaultPageContext } from "src/renderer/helpers";
import { Props } from "./(componnets)/LivePreivewPage";
import { getRoadmapVersions } from "@starknet-io/cms-data/src/roadmap";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;

  const pageProps: Props = {
    categories: await getCategories(locale, pageContext.event),
    topics: await getTopics(locale, pageContext.event),
    roadmapVersions: await getRoadmapVersions(locale, pageContext.event)
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
      hasLayout: false,
    },
  };
}
