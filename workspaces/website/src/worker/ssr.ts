import { renderPage } from "vite-plugin-ssr/server";

export async function handleSsr(url: string, userAgent: string) {
  const pageContextInit = {
    urlOriginal: url,
    fetch,
    userAgent,
  };
  const pageContext: any = await renderPage(
    pageContextInit
  );

  if (pageContext.redirectTo) {
    return Response.redirect(pageContext.redirectTo);
  }

  const { httpResponse } = pageContext;
  if (!httpResponse) {
    return null;
  } else {
    const { statusCode, contentType } = httpResponse;
    const stream = httpResponse.getReadableWebStream();
    return new Response(stream, {
      headers: { "content-type": contentType },
      status: statusCode,
    });
  }
}
