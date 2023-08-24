import { DocumentProps, PageContextServer } from "src/renderer/types";
import { getDefaultPageContext } from "src/renderer/helpers";
import { playlist } from "@ui/VideoPlayer/constants";
import { getEducationVideoMeta } from "@ui/VideoPlayer/getEducationVideoMeta";
import { Props } from "src/pages/video-embed/VideoEmbedPage";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const chapter = pageContext.urlParsed.search.chapter ?? playlist[0].id;
  const currentChapter = playlist.find((p) => p.id === chapter) || playlist[0];
  const { imageUrl, videoUrl } = getEducationVideoMeta(currentChapter);

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps: { chapter } satisfies Props,
      documentProps: {
        title: currentChapter?.title,
        description: currentChapter?.description,
        image: imageUrl,
        video: videoUrl,
      } satisfies DocumentProps,

      hasLayout: false,
    },
  };
}
