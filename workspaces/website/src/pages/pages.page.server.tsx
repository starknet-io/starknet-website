import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";
import { getPageBySlug } from "@starknet-io/cms-data/src/pages";
import { getSocialMediaData } from "@starknet-io/cms-data/src/getSocialMediaData";
import { getDefaultPageContext } from "src/renderer/helpers";
import { DocumentProps, PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/PagePage";

export async function onBeforeRender(pageContext: PageContextServer) {
  const locale = pageContext.locale ?? defaultLocale;
  const slug = pageContext.routeParams["*"] || "home";
  const data = await getPageBySlug(slug, locale, pageContext.context);
  const socialMedia = await getSocialMediaData(pageContext.context)

  return {
    pageContext: {
      pageProps: { data, socialMedia } satisfies Props,
      documentProps: {
        title: slug == "home" ? undefined : data.title,
      } satisfies DocumentProps,
      ...(await getDefaultPageContext(pageContext)),
    },
  };
}
