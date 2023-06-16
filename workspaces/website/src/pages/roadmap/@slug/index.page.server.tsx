import { PageContextServer } from "src/renderer/types";
import { getDefaultPageContext } from "src/renderer/helpers";
import {
  getRoadmapPostBySlug,
  getRoadmapVersions,
} from "@starknet-io/cms-data/src/roadmap";
import { RoadmapPostProps } from "./(components)/RoadmapPost";
import { getRoadmapSettings } from "@starknet-io/cms-data/src/settings/roadmap";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;
  const roadmapPost = await getRoadmapPostBySlug(locale, pageContext.routeParams.slug, pageContext.event);
  const roadmapVersions = await getRoadmapVersions(locale, pageContext.event);
  const roadmapSettings = await getRoadmapSettings(locale, pageContext.event)

  console.log('roadmapVersions', roadmapVersions)

  const pageProps: RoadmapPostProps = {
      roadmapPost,
      roadmapVersion: roadmapVersions.find(r => r.version === roadmapPost.version)!,
      locale,
      psCopy: roadmapSettings.roadmap_post_ps
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
    },
  };
}
