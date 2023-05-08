import { getMessages } from "@starknet-io/cms-data/src/i18n/intl";
import { getPageBySlug } from "@starknet-io/cms-data/src/pages";
import { getHomeSEO, getFooterSEO, getTutorialsSEO, getEventsSEO, getJobsSEO, getSearchSEO, getLanguageCenterSEO } from "@starknet-io/cms-data/src/seo";
import { getAlerts } from "@starknet-io/cms-data/src/settings/alert";
import { getMainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import { PageContextServer } from "src/renderer/types";

export async function onBeforeRender(pageContext: PageContextServer) {
  const { locale } = pageContext;

  const data = await getPageBySlug(
    pageContext.routeParams["*"] || "home",
    locale,
    pageContext.event
  ).catch(() => null);

  return {
    pageContext: {
      pageProps: { data },
      mainMenu: await getMainMenu(locale, pageContext.event),
      messages: await getMessages(locale),
      alerts: await getAlerts(locale, pageContext.event),
      seo: {
        home: await getHomeSEO(pageContext.locale, pageContext.event),
        footer: await getFooterSEO(pageContext.locale, pageContext.event),
        tutorials: await getTutorialsSEO(pageContext.locale, pageContext.event),
        events: await getEventsSEO(pageContext.locale, pageContext.event),
        jobs: await getJobsSEO(pageContext.locale, pageContext.event),
        search: await getSearchSEO(pageContext.locale, pageContext.event),
        language: await getLanguageCenterSEO(
          pageContext.locale,
          pageContext.event
        ),
      },
    },
  };
}
