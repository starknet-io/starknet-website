import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";
import { getPageBySlug } from "@starknet-io/cms-data/src/pages";
import { getDefaultPageContext } from "src/renderer/helpers";
import { PageContextServer } from "src/renderer/types";

export async function onBeforeRender(pageContext: PageContextServer) {
  const locale = pageContext.locale ?? defaultLocale;

  const data = await getPageBySlug(
    pageContext.routeParams["*"] || "home",
    locale,
    pageContext.event
  );

  return {
    pageContext: {
      pageProps: { data },
      ...await getDefaultPageContext(pageContext),
    },
  }
}
