import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vite-plugin-ssr/server";
import { PageContextServer } from "./types";
import { PageShell } from "./PageShell";
import { getMainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import { getMessages } from "@starknet-io/cms-data/src/i18n/intl";
import { getAlerts } from "@starknet-io/cms-data/src/settings/alert";

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [
  "pageProps",
  "documentProps",
  "locale",
  "alerts",
  "messages",
  "mainMenu",
  "data",
];

export async function onBeforeRender(pageContext: PageContextServer) {
  const { locale } = pageContext;
  const mainMenu = await getMainMenu(locale, pageContext.event);
  const messages = await getMessages(locale);
  const alerts = await getAlerts(locale, pageContext.event);

  return {
    pageContext: {
      alerts,
      messages,
      mainMenu,
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
