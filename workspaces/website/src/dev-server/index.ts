// We use a Express.js server for development
import express from "express";
import { renderPage } from "vite-plugin-ssr/server";
import { createServer } from "vite";
import fetch from "node-fetch";
import compression from "compression";
import fs from "fs/promises";
import path from "path";

const app = express();

// We don't need gzip compression for dev. We use compression just to show
// that it's properly handled by vite-plugin-ssr and react-streaming.
app.use(compression());

const viteDevMiddleware = (
  await createServer({
    server: { middlewareMode: true },
  })
).middlewares;
app.use(viteDevMiddleware);

app.get("*", async (req, res, next) => {
  const userAgent = req.headers["user-agent"]!;
  const pageContextInit = {
    urlOriginal: req.originalUrl,
    // getJSON: async (src: string) => {
    //   if (import.meta.env.SSR) {
    //     console.log(src)
    //     return JSON.parse(
    //       await fs.readFile(
    //         path.join(process.cwd(), "../../public/", src + ".json"),
    //         "utf8"
    //       )
    //     );
    //   }

    //   return (await fetch("/" + src + ".json")).json();
    // },
    fetch: fetch as WindowOrWorkerGlobalScope["fetch"],
    userAgent,
  };
  const pageContext: any = await renderPage(pageContextInit);

  if (pageContext.redirectTo) {
    res.redirect(pageContext.redirectTo);
  }

  const { httpResponse } = pageContext;
  if (!httpResponse) return next();
  res.type(httpResponse.contentType).status(httpResponse.statusCode);
  httpResponse.pipe(res);
});

const port = 3000;
app.listen(port);
console.log(`Server running at http://localhost:${port}`);
