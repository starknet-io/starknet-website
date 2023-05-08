import { PageContextServer } from "./types";
import { getMainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import { getMessages } from "@starknet-io/cms-data/src/i18n/intl";
import { getAlerts } from "@starknet-io/cms-data/src/settings/alert";
import {
  getEventsSEO,
  getFooterSEO,
  getHomeSEO,
  getJobsSEO,
  getLanguageCenterSEO,
  getSearchSEO,
  getTutorialsSEO,
} from "@starknet-io/cms-data/src/seo";
import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";

type DefaultPageContextKeys =
  | "locale"
  | "mainMenu"
  | "messages"
  | "alerts"
  | "seo";

export async function getDefaultPageContext(
  pageContext: PageContextServer
): Promise<Pick<PageContextServer, DefaultPageContextKeys>> {
  const locale = pageContext.locale ?? defaultLocale;

  return {
    locale,
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
      language: await getLanguageCenterSEO(locale, pageContext.event),
    },
  };
}
