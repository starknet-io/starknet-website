import { DocumentProps, PageContextServer } from "src/renderer/types";
import { getDefaultPageContext } from "src/renderer/helpers";
import { playlist } from "@ui/VideoPlayer/constants";
import { Props } from "src/pages/video/VideoPage";
import { getEducationVideoMeta } from "@ui/VideoPlayer/getEducationVideoMeta";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  // @ts-ignore
  const parsedUrl = new URL(pageContext._urlPristine, "https://starknet.io");
  const chapter = parsedUrl.searchParams.get("chapter") || playlist[0].id;
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
      hasLayout: true,
    },
  };
}
