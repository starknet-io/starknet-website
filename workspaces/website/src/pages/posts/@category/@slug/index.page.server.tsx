import { getCategories } from "@starknet-io/cms-data/src/categories";
import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";
import { getMessages } from "@starknet-io/cms-data/src/i18n/intl";
import { getPostBySlug } from "@starknet-io/cms-data/src/posts";
import {
  getHomeSEO,
  getFooterSEO,
  getTutorialsSEO,
  getEventsSEO,
  getJobsSEO,
  getSearchSEO,
  getLanguageCenterSEO,
} from "@starknet-io/cms-data/src/seo";
import { getAlerts } from "@starknet-io/cms-data/src/settings/alert";
import { getMainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { PageContextServer } from "src/renderer/types";
import { Props } from "src/app/posts/[category]/[slug]/page";

export async function onBeforeRender(pageContext: PageContextServer) {
  const locale = pageContext.locale ?? defaultLocale;

  const post = await getPostBySlug(
    pageContext.routeParams.slug,
    locale,
    pageContext.event
  );

  const categories = await getCategories(pageContext.locale, pageContext.event);
  const topics = await getTopics(pageContext.locale, pageContext.event);

  const params = {
    locale,
    slug: pageContext.routeParams!.slug!,
  };

  return {
    pageContext: {
      pageProps: { post, categories, topics, params } satisfies Props,
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
    },
  };
}
