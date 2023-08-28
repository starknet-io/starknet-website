import { PageContextServer } from "src/renderer/types";
import { RoadmapPageProps } from "src/pages/roadmap/(components)/RoadmapPage";
import { getDefaultPageContext } from "src/renderer/helpers";
import {
  getRoadmapDetails,
  getRoadmapVersions,
} from "@starknet-io/cms-data/src/roadmap";
import { getRoadmapSettings } from "@starknet-io/cms-data/src/settings/roadmap";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;
  const roadmapPosts = await getRoadmapDetails(locale, pageContext.context);
  const roadmapVersions = await getRoadmapVersions(locale, pageContext.context);
  const roadmapSettings = await getRoadmapSettings(locale, pageContext.context);

  const pageProps: RoadmapPageProps = {
    roadmapPosts,
    roadmapVersions,
    roadmapSettings,
    locale,
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
      navConfig: {
        invertColorOnDark: true,
      },
    },
  };
}
