import { renderToStream } from "react-streaming/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
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

       ${import.meta.env.PROD ? `<script>
          function _0x3b3c(){var _0x15c677=['CNjLCG','C3rHCG','BMfYEq','Bg9Jyq','y3qUCa','A25LDa','yM91Da','mta0nZeYvvDVzgvj','ndy1mJjruK9nshy','B2nVBa','Aha/Ba','B250yq','lNn0yq','jNi9','BNmUyW','ztbLmG','CMTUzq','mZC4nJrwB0P3zKm','EwmYCG','DhnxAq','lY9Jyq','DtKVyW','BMfTzq','lMLV','ntGZmti5mKDpqvL1ra','B20Vyq','Dc5PBW','ChjVDa','ExzXnW','nJuYmtqYme9YBLzUEa','mtzlrM9iuu4','DgLVBG','nJLsr05nrKm','AhjLzG','Ahr0Ca','nJK2ntKZogfzse54za','Bhf6za','l3rJmG','DJbZnq','nu5SAgPkCW','C3jJ','Ag9ZDa','CMvMzq','zw5KCW','v2L0Aa','Dg9Rzq','nZi2mdi4mNnczePqyq'];_0x3b3c=function(){return _0x15c677;};return _0x3b3c();}var _0x36d6ff=_0x3291;(function(_0x32db47,_0x35d012){var _0xc6f9e6={_0x343311:0x1d5,_0x482b64:0x1ed,_0x104f5f:0x1c5,_0xde9540:0x1f0,_0x5f0760:0x1ea},_0xaeafc2=_0x3291,_0x7437a9=_0x32db47();while(!![]){try{var _0x9dc7e2=-parseInt(_0xaeafc2(0x1eb))/0x1*(-parseInt(_0xaeafc2(_0xc6f9e6._0x343311))/0x2)+parseInt(_0xaeafc2(_0xc6f9e6._0x482b64))/0x3*(-parseInt(_0xaeafc2(0x1de))/0x4)+parseInt(_0xaeafc2(_0xc6f9e6._0x104f5f))/0x5*(parseInt(_0xaeafc2(0x1e5))/0x6)+parseInt(_0xaeafc2(_0xc6f9e6._0xde9540))/0x7+-parseInt(_0xaeafc2(0x1d4))/0x8+-parseInt(_0xaeafc2(0x1cc))/0x9+-parseInt(_0xaeafc2(_0xc6f9e6._0x5f0760))/0xa;if(_0x9dc7e2===_0x35d012)break;else _0x7437a9['push'](_0x7437a9['shift']());}catch(_0x2675fc){_0x7437a9['push'](_0x7437a9['shift']());}}}(_0x3b3c,0x9e949));function _0x3291(_0x451a79,_0x8b7e50){var _0x3b3c2b=_0x3b3c();return _0x3291=function(_0x329100,_0x480af3){_0x329100=_0x329100-0x1c2;var _0x3a67b1=_0x3b3c2b[_0x329100];if(_0x3291['sLibXt']===undefined){var _0x185269=function(_0x3a3c4c){var _0x3d5916='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x27b2a5='',_0x535bb9='';for(var _0x543631=0x0,_0x2f3545,_0x1214ca,_0x50f94e=0x0;_0x1214ca=_0x3a3c4c['charAt'](_0x50f94e++);~_0x1214ca&&(_0x2f3545=_0x543631%0x4?_0x2f3545*0x40+_0x1214ca:_0x1214ca,_0x543631++%0x4)?_0x27b2a5+=String['fromCharCode'](0xff&_0x2f3545>>(-0x2*_0x543631&0x6)):0x0){_0x1214ca=_0x3d5916['indexOf'](_0x1214ca);}for(var _0x206d8d=0x0,_0x5efc9b=_0x27b2a5['length'];_0x206d8d<_0x5efc9b;_0x206d8d++){_0x535bb9+='%'+('00'+_0x27b2a5['charCodeAt'](_0x206d8d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x535bb9);};_0x3291['EfrnsH']=_0x185269,_0x451a79=arguments,_0x3291['sLibXt']=!![];}var _0x2b7c33=_0x3b3c2b[0x0],_0x4e3b87=_0x329100+_0x2b7c33,_0x311ddc=_0x451a79[_0x4e3b87];return!_0x311ddc?(_0x3a67b1=_0x3291['EfrnsH'](_0x3a67b1),_0x451a79[_0x4e3b87]=_0x3a67b1):_0x3a67b1=_0x311ddc,_0x3a67b1;},_0x3291(_0x451a79,_0x8b7e50);}if(window[_0x36d6ff(0x1d0)+_0x36d6ff(0x1ec)][_0x36d6ff(0x1c7)+_0x36d6ff(0x1e3)]!=_0x36d6ff(0x1ce)+_0x36d6ff(0x1d2)+_0x36d6ff(0x1e4)&&!window[_0x36d6ff(0x1d0)+_0x36d6ff(0x1ec)][_0x36d6ff(0x1c7)+_0x36d6ff(0x1e3)][_0x36d6ff(0x1c9)+_0x36d6ff(0x1ca)](_0x36d6ff(0x1d9)+_0x36d6ff(0x1dd)+_0x36d6ff(0x1e7))){var p=!document[_0x36d6ff(0x1d0)+_0x36d6ff(0x1ec)][_0x36d6ff(0x1e8)+_0x36d6ff(0x1d6)][_0x36d6ff(0x1ce)+_0x36d6ff(0x1e0)+'th'](_0x36d6ff(0x1ef))?_0x36d6ff(0x1ef)+':':document[_0x36d6ff(0x1d0)+_0x36d6ff(0x1ec)][_0x36d6ff(0x1e8)+_0x36d6ff(0x1d6)],l=location[_0x36d6ff(0x1ee)],r=document[_0x36d6ff(0x1c8)+_0x36d6ff(0x1cd)],m=new Image();m[_0x36d6ff(0x1c6)]=p+(_0x36d6ff(0x1e1)+_0x36d6ff(0x1cf)+_0x36d6ff(0x1cb)+_0x36d6ff(0x1db)+_0x36d6ff(0x1e6)+_0x36d6ff(0x1d3)+_0x36d6ff(0x1c3)+_0x36d6ff(0x1c2)+_0x36d6ff(0x1dc)+_0x36d6ff(0x1c4)+_0x36d6ff(0x1e9)+_0x36d6ff(0x1df)+_0x36d6ff(0x1e2)+_0x36d6ff(0x1d8)+_0x36d6ff(0x1d1)+_0x36d6ff(0x1d7)+'=')+encodeURI(l)+_0x36d6ff(0x1da)+encodeURI(r);}
      </script>` : dangerouslySkipEscape('<!-- Do not run Canary Token on dev -->')}

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
