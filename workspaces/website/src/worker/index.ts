import { apiRouter, corsify, preflight } from "../api";
import { handleStaticAssets } from "./static-assets";
import { renderPage } from "vite-plugin-ssr/server";
import { IRequest, Router } from "itty-router";
import * as redirects from "../../redirects.json";

const router = Router();

router.all("/api/*", apiRouter.handle);

redirects.items.forEach(({ source, destination }) => {
  router.get(
    source,
    (req: IRequest, event: WorkerGlobalScopeEventMap["fetch"]) => {
      let src = destination

      for (const [key, value] of Object.entries(req.params)) {
        src = src.replace(new RegExp(`:${key}\\+?`), value)
      }

      return Response.redirect(new URL(src, event.request.url), 301);
    }
  );
});

async function ittyAssetshandler(
  req: IRequest,
  event: WorkerGlobalScopeEventMap["fetch"]
) {
  return await handleStaticAssets(event);
}

router.get("/*.png", ittyAssetshandler);
router.get("/*.svg", ittyAssetshandler);
router.get("/*.ico", ittyAssetshandler);
router.get("/assets/*", ittyAssetshandler);

router.all("/data/*", preflight);
router.get("/data/*", async (req, event) => {
  return corsify(await handleStaticAssets(event));
});

router.all("*", async (req, event: WorkerGlobalScopeEventMap["fetch"]) => {
  const userAgent = event.request.headers.get("User-Agent")!;

  const pageContextInit = {
    event,
    urlOriginal: event.request.url,
    fetch,
    userAgent,
  };

  const pageContext: any = await renderPage(pageContextInit);

  if (pageContext.redirectTo) {
    return Response.redirect(
      new URL(pageContext.redirectTo, event.request.url),
      301
    );
  } else if (pageContext.httpResponse != null) {
    return new Response(pageContext.httpResponse.getReadableWebStream(), {
      headers: { "content-type": pageContext.httpResponse.contentType },
      status: pageContext.httpResponse.statusCode,
    });
  }

  return await handleStaticAssets(event);
});

addEventListener("fetch", async (event: WorkerGlobalScopeEventMap["fetch"]) => {
  event.respondWith(
    router.handle(event.request, event).catch((err) => {
      console.error(err);
      return new Response("Internal Error", { status: 500 });
    })
  );
});
