import { router } from "src/api";
import { handleStaticAssets } from "./static-assets";
import { renderPage } from "vite-plugin-ssr/server";

addEventListener("fetch", (event: WorkerGlobalScopeEventMap["fetch"]) => {
  try {
    const { pathname } = new URL(event.request.url);

    if (pathname.startsWith("/api/")) {
      event.respondWith(router.handle(event.request, event));
    } else {
      event.respondWith(handleFetchEvent(event));
    }
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
      event,
      urlOriginal: url,
      fetch,
      userAgent,
    };
    const pageContext: any = await renderPage(pageContextInit);

    if (pageContext.redirectTo) {
      return Response.redirect(new URL(pageContext.redirectTo, url));
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
  return pathname.startsWith("/assets/") || pathname.startsWith("/data/");
}
