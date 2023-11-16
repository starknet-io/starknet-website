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
  const roadmapPost = await getRoadmapPostBySlug(locale, pageContext.routeParams.slug, pageContext.context);
  const roadmapVersions = await getRoadmapVersions(locale, pageContext.context);
  const roadmapSettings = await getRoadmapSettings(locale, pageContext.context)

  console.log('roadmapVersions', roadmapVersions)

  const pageProps: RoadmapPostProps = {
      env: {
        CLOUDFLARE_RECAPTCHA_KEY: import.meta.env.VITE_CLOUDFLARE_RECAPTCHA_KEY,
      },
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
