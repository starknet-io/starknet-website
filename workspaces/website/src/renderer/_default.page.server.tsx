import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vite-plugin-ssr/server";
import { PageContextServer } from "./types";
import { PageShell } from "./PageShell";
import { getDefaultPageContext } from "./helpers";

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [
  "hasLayout",
  "routeParams",
  "pageProps",
  "documentProps",
  "locale",
  "alerts",
  "messages",
  "mainMenu",
  "data",
  "seo",
];


export async function onBeforeRender(pageContext: PageContextServer) {
  return {
    pageContext: await getDefaultPageContext(pageContext)
  };
}

// TODO
// export const metadata = {
//   title: {
//     default: "Starknet",
//     template: "%s - Starknet",
//   },
//   description:
//     "Starknet is a Validity Rollup Layer 2. It provides high throughput, low gas costs, and retains Ethereum Layer 1 levels of security",
//   openGraph: {
//     type: "website",
//     siteName: "StarkNet",
//   },
//   twitter: {
//     card: "summary_large_image",
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const documentProps = pageContext.documentProps ?? pageContext.exports.documentProps

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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <!-- Primary Meta Tags -->
      <title>${documentProps?.title ?? 'Starknet'}</title>
      <meta name="title" content="${documentProps?.title ?? 'Starknet'}">
      <meta name="description" content="${documentProps?.description ?? ''}">

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="${pageContext.urlOriginal}">
      <meta property="og:title" content="${documentProps?.title ?? 'Starknet'}">
      <meta property="og:description" content="${documentProps?.description ?? ''}">
      <meta property="og:image" content="${documentProps?.image ?? ''}">

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="${pageContext.urlOriginal}">
      <meta property="twitter:title" content="${documentProps?.title ?? 'Starknet'}">
      <meta property="twitter:description" content="${documentProps?.description ?? ''}">
      <meta property="twitter:image" content="${documentProps?.image ?? ''}">

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
