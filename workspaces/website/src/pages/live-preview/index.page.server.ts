import { getCategories } from "@starknet-io/cms-data/src/categories";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { PageContextServer } from "src/renderer/types";
import { getDefaultPageContext } from "src/renderer/helpers";
import { Props } from "./(componnets)/LivePreivewPage";
import { getRoadmapVersions } from "@starknet-io/cms-data/src/roadmap";
import { getLatestAnnouncements } from "@starknet-io/cms-data/src/settings/latest-announcenents";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;
  const latestAnnouncements = await getLatestAnnouncements(pageContext.context);
  console.log("latestAnnouncements", latestAnnouncements);

  const pageProps: Props = {
    categories: await getCategories(locale, pageContext.context),
    latestAnnouncements: latestAnnouncements,
    topics: await getTopics(locale, pageContext.context),
    roadmapVersions: await getRoadmapVersions(locale, pageContext.context),
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
      hasLayout: false,
    },
  };
}
