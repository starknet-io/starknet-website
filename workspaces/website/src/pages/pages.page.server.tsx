import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";
import { TopLevelBlock, getPageBySlug } from "@starknet-io/cms-data/src/pages";
import { getDefaultPageContext } from "src/renderer/helpers";
import { DocumentProps, PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/PagePage";
import { getShuffledArray } from "src/utils/getShuffledArray";

export async function onBeforeRender(pageContext: PageContextServer) {
  const locale = pageContext.locale ?? defaultLocale;
  const slug = pageContext.routeParams["*"] || "home";
  const data = await getPageBySlug(slug, locale, pageContext.event);

  data.blocks?.forEach((block: TopLevelBlock) => {
    if (block.type === 'link_list' && block.randomize) {
      console.log(block.blocks)
      // @ts-expect-error
      block.blocks = getShuffledArray(block.blocks || []);
    }
  })

  return {
    pageContext: {
      pageProps: { data } satisfies Props,
      documentProps: {
        title: slug == "home" ? undefined : data.title,
      } satisfies DocumentProps,
      ...(await getDefaultPageContext(pageContext)),
    },
  };
}
