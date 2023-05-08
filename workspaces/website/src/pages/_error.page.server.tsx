import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";
import { getMessages } from "@starknet-io/cms-data/src/i18n/intl";
import { getHomeSEO, getFooterSEO, getTutorialsSEO, getEventsSEO, getJobsSEO, getSearchSEO, getLanguageCenterSEO } from "@starknet-io/cms-data/src/seo";
import { getAlerts } from "@starknet-io/cms-data/src/settings/alert";
import { getMainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import { PageContextServer } from "src/renderer/types";

export async function onBeforeRender(pageContext: PageContextServer) {
  const locale = pageContext.locale ?? defaultLocale;

  return {
    pageContext: {
      mainMenu: await getMainMenu(locale, pageContext.event),
      messages: await getMessages(locale),
      alerts: await getAlerts(locale, pageContext.event),
      seo: {
        home: await getHomeSEO(locale, pageContext.event),
        footer: await getFooterSEO(locale, pageContext.event),
        tutorials: await getTutorialsSEO(locale, pageContext.event),
        events: await getEventsSEO(locale, pageContext.event),
        jobs: await getJobsSEO(locale, pageContext.event),
        search: await getSearchSEO(locale, pageContext.event),
        language: await getLanguageCenterSEO(
          locale,
          pageContext.event
        ),
      },
    },
  };
}
