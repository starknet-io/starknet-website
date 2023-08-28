import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";
import { getPageBySlug } from "@starknet-io/cms-data/src/pages";
import { getDefaultPageContext } from "src/renderer/helpers";
import { DocumentProps, PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/PagePage";

export async function onBeforeRender(pageContext: PageContextServer) {
  const locale = pageContext.locale ?? defaultLocale;
  const slug = pageContext.routeParams["*"] || "home";
  const data = await getPageBySlug(slug, locale, pageContext.context);

  return {
    pageContext: {
      pageProps: {
        data,
      } satisfies Props,
      navConfig: {
        invertColorOnLight: slug === "home",
        invertColorOnDark: data.template === "landing",
      },
      documentProps: {
        title: slug == "home" ? undefined : data.title,
      } satisfies DocumentProps,
      ...(await getDefaultPageContext(pageContext)),
    },
  };
}
