import { PageContextServer } from "src/renderer/types";
import { getDefaultPageContext } from "src/renderer/helpers";
import { playlist } from "@ui/VideoPlayer/constants";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const chapterId = pageContext.urlParsed.search.chapter ?? playlist[0].id

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps: {
        chapterId
      },
      hasLayout: false
    },
  };
}
