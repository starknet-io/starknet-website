import { getAssetFromKV } from "@cloudflare/kv-asset-handler";
import { handleStaticAssets } from "./static-assets";
import { renderPage } from "vite-plugin-ssr/server";

addEventListener("fetch", (event: WorkerGlobalScopeEventMap["fetch"]) => {
  try {
    event.respondWith(handleFetchEvent(event));
  } catch (err: any) {
    console.error(err.stack);
    event.respondWith(new Response("Internal Error", { status: 500 }));
  }
});

async function handleFetchEvent(event: WorkerGlobalScopeEventMap["fetch"]) {
  const { url } = event.request;
  if (!isAssetUrl(url)) {
    const userAgent = event.request.headers.get("User-Agent")!;

    const pageContextInit = {
      urlOriginal: url,
      // getJSON: async (src: string) => {
      //   if (import.meta.env.SSR) {
      //     const data = await getAssetFromKV({
      //       request: new Request(
      //         new URL("/" + src + ".json", event.request.url)
      //       ),
      //       waitUntil: event.waitUntil,
      //     });

      //     return data.json();
      //   }

      //   return (await fetch("/" + src + ".json")).json();
      // },
      fetch,
      userAgent,
    };
    const pageContext: any = await renderPage(pageContextInit);

    if (pageContext.redirectTo) {
      return Response.redirect(pageContext.redirectTo);
    }

    const { httpResponse } = pageContext;

    if (httpResponse != null) {
      const { statusCode, contentType } = httpResponse;
      const stream = httpResponse.getReadableWebStream();
      return new Response(stream, {
        headers: { "content-type": contentType },
        status: statusCode,
      });
    }
  }
  const response = await handleStaticAssets(event);
  return response;
}

function isAssetUrl(url: string | URL) {
  const { pathname } = new URL(url);
  return pathname.startsWith("/assets/");
}
