import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";
import { getPageBySlug } from "@starknet-io/cms-data/src/pages";
import { getDefaultPageContext } from "src/renderer/helpers";
import { DocumentProps, PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/PagePage";
import { generateGenericMetadata } from "src/utils/seo";

/* for [locale] pages */
// export const generateMetadata = () => generateGenericMetadata();

export async function onBeforeRender(pageContext: PageContextServer) {
  const locale = pageContext.locale ?? defaultLocale;

  const data = await getPageBySlug(
    pageContext.routeParams["*"] || "home",
    locale,
    pageContext.event
  );


  return {
    pageContext: {
      pageProps: { data } satisfies Props,
      documentProps: generateGenericMetadata(data.title) satisfies DocumentProps,
      ...await getDefaultPageContext(pageContext),
    },
  }
}
