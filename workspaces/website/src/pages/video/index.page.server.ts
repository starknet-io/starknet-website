import { DocumentProps, PageContextServer } from "src/renderer/types";
import { getDefaultPageContext } from "src/renderer/helpers";
import { playlist } from "@ui/VideoPlayer/constants";
import { imageUrl } from "@ui/VideoPlayer/getVideoMetadata";
import { Props } from "src/pages/video/VideoPage";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const chapter = pageContext.urlParsed.search.chapter ?? playlist[0].id;
  const currentChapter = playlist.find((p) => p.id === chapter);

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps: { chapter } satisfies Props,
      documentProps: {
        title: currentChapter?.title,
        description: currentChapter?.description,
        image: imageUrl,
      } satisfies DocumentProps,
      hasLayout: true,
    },
  };
}
