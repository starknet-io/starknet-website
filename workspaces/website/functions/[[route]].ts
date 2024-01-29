import { apiRouter, corsify, preflight } from "../src/api";
import { renderPage } from "vite-plugin-ssr/server";
import { IRequest, Router } from "itty-router";
import * as redirects from "../redirects.json";

const router = Router();

router.all("/api/*", (req, context) => apiRouter.handle(req, context.env));

redirects.items.forEach(({ source, destination }) => {
  router.get(
    source,
    (req: IRequest, context: EventContext<{}, any, Record<string, unknown>>) => {
      let src = destination

      for (const [key, value] of Object.entries(req.params)) {
        src = src.replace(new RegExp(`:${key}\\+?`), value)
      }

      return Response.redirect(new URL(src, req.url), 301);
    }
  );
});

/**
 * Redirects for old posts.
 */

router.get(
  '/:locale?/posts/:category',
  (req: IRequest, _context: EventContext<{}, any, Record<string, unknown>>) => {
    return Response.redirect(
      new URL(
        `${req.params.locale ? `/${req.params.locale}` : ``}/content/category/${req.params.category}`,
        req.url
      ), 
      301);
  }
);

router.get(
  '/:locale?/posts/:cat/:slug',
  (req: IRequest, _context: EventContext<{}, any, Record<string, unknown>>) => {
    return Response.redirect(
      new URL(
        `${req.params.locale ? `/${req.params.locale}` : ``}/content/${req.params.slug}`,
        req.url
      ),
    301);
  }
);


async function ittyAssetshandler(
  req: IRequest,
  context: EventContext<{}, any, Record<string, unknown>>
) {
  return context.env.ASSETS.fetch(req);
}

router.get("/*.png", ittyAssetshandler);
router.get("/*.svg", ittyAssetshandler);
router.get("/*.ico", ittyAssetshandler);
router.get("/*.txt", ittyAssetshandler);
router.get("/assets/*", ittyAssetshandler);
router.get("/sitemap.xml", ittyAssetshandler);

router.all("/data/*", preflight);
router.get("/data/*", async (req, context: EventContext<{}, any, Record<string, unknown>>) => {
  return corsify(await context.env.ASSETS.fetch(req));
});

router.all("*", async (req, context: EventContext<{}, any, Record<string, unknown>>) => {
  const userAgent = req.headers.get("User-Agent")!;

  const pageContextInit = {
    context,
    urlOriginal: req.url,
    fetch,
    userAgent,
  };

  const pageContext: any = await renderPage(pageContextInit);

  if (pageContext.redirectTo) {
    return Response.redirect(
      new URL(pageContext.redirectTo, req.url),
      301
    );
  } else if (pageContext.httpResponse != null) {
    return new Response(pageContext.httpResponse.getReadableWebStream(), {
      headers: { "content-type": pageContext.httpResponse.contentType },
      status: pageContext.httpResponse.statusCode,
    });
  }

  return context.env.ASSETS.fetch(req);
});


export const onRequest: PagesFunction<{}> = async (context) => {
  return router.handle(context.request, context).catch((err) => {
    console.error(err);
    return new Response("Internal Error", { status: 500 });
  })
}
