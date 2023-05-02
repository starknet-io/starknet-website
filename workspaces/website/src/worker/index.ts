import { handleSsr } from "./ssr";
import { handleStaticAssets } from "./static-assets";

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
    console.log("ua", userAgent);
    const response = await handleSsr(url, userAgent);
    if (response !== null) return response;
  }
  const response = await handleStaticAssets(event);
  return response;
}

function isAssetUrl(url: string | URL) {
  const { pathname } = new URL(url);
  return pathname.startsWith("/assets/");
}
