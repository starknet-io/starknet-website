import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vite-plugin-ssr/server";
import { PageContextServer, SeoType } from "./types";
import { PageShell } from "./PageShell";
import { getDefaultPageContext } from "./helpers";
import type { InjectFilterEntry } from "vite-plugin-ssr/types";

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [
  "hasLayout",
  "routeParams",
  "pageProps",
  "documentProps",
  "locale",
  "alerts",
  "mainMenu",
  "data",
  "seo",
];

export async function onBeforeRender(pageContext: PageContextServer) {
  return {
    pageContext: await getDefaultPageContext(pageContext),
  };
}

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps, redirectTo } = pageContext;

  if (redirectTo) return {};

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
  const pageSeo = (pageProps?.data ?? pageProps?.roadmapPost ?? pageProps?.tutorial) as SeoType
  const documentProps =
    pageContext.documentProps ?? pageContext.exports.documentProps

  const title = documentProps?.title ?? pageSeo?.seoTitle
    ? `${documentProps?.title ?? pageSeo?.seoTitle} - Starknet`
    : "Starknet";

  const description =
    documentProps?.description ?? pageSeo?.seoDescription as string ??
    "Starknet is the secure scaling technology bringing Ethereum’s benefits to the world.";

  const image =
    documentProps?.image ??
    `${import.meta.env.VITE_SITE_URL}/assets/share/generic_landing.png`;

  const focusKeywords = pageSeo?.seoFocusKeywords as string[]

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <!-- Primary Meta Tags -->
      <title>${title}</title>
      <meta name="title" content="${title}">
      <meta name="description" content="${description}">
      <meta name="keywords" content="${focusKeywords?.join(',') ?? "starknet"}">

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="article">
      <meta property="og:url" content="${pageContext.urlOriginal}">
      <meta property="og:title" content="${title}">
      <meta property="og:description" content="${description}">
      <meta property="og:image" content="${image}">
      <meta property="og:video" content="${documentProps?.video || ""}">
      <meta property="og:video:height" content="720">
      <meta property="og:video:width" content="1280">


      <!-- Twitter -->
      <meta property="twitter:card" content=${
        documentProps?.video ? "player" : "summary_large_image"
      }>
      <meta property="twitter:site" content="@Starknet">
      <meta property="twitter:url" content="${pageContext.urlOriginal}">
      <meta property="twitter:title" content="${title}">
      <meta property="twitter:description" content="${description}">
      <meta property="twitter:image" content="${image}">
      <meta property="twitter:player" content="${documentProps?.video || ""}">
      <meta property="twitter:player:height" content="720">
      <meta property="twitter:player:width" content="1280">

      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GOOGLE_TAG_ID}');
      </script>
      <!-- Hotjar Tracking Code for Starknet -->
      <script>
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3541762,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      </script>

      ${pageSeo?.seoCanonicalUrl ? `
        <link rel="canonical" href="${pageSeo?.seoCanonicalUrl}" />
      `: ''}
    </head>
    <body>
      <div id="page-view">${stream}</div>
    </body>
  </html>`;

  return { documentHtml, injectFilter };
}

const injectFilter = (assets: InjectFilterEntry[]): void => {
  assets.forEach((asset) => {
    if (
      // We don't touch entry assets (recommended)
      asset.isEntry ||
      // We don't touch JavaScript preloading (recommended)
      asset.assetType === "script"
    ) {
      return;
    }

    // Preload images
    if (asset.assetType === "image") {
      asset.inject = "HTML_BEGIN";
    }

    // Don't preload fonts
    if (asset.assetType === "font") {
      asset.inject = false;
    }

    // Preload videos
    if (asset.mediaType?.startsWith("video")) {
      asset.inject = "HTML_END";
    }
  });
};
