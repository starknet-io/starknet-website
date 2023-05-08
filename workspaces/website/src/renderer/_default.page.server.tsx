import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vite-plugin-ssr/server";
import { PageContextServer } from "./types";
import { PageShell } from "./PageShell";
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

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [
  "pageProps",
  "documentProps",
  "locale",
  "alerts",
  "messages",
  "mainMenu",
  "data",
  "seo",
  "event",
];

export async function onBeforeRender(pageContext: PageContextServer) {
  const { locale } = pageContext;

  return {
    pageContext: {
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

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // Streaming is optional and we can use renderToString() instead
  const stream = await renderToStream(page, {
    userAgent: pageContext.userAgent,
  });

  const GOOGLE_TAG_ID = "G-WY42TERK5P";

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html>
    <head>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GOOGLE_TAG_ID}');
      </script>
    </head>
    <body>
      <div id="page-view">${stream}</div>
    </body>
  </html>`;

  return { documentHtml };
}
