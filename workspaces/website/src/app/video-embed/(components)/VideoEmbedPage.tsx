import { playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayerEmbed } from "@ui/VideoPlayer/player-embed/VideoPlayerEmbed";
import { usePageContext } from "src/renderer/usePageContext";
import { navigate } from "vite-plugin-ssr/client/router";

export default function VideoEmbedPage() {
  const pageContext = usePageContext();
  const chapter = pageContext.urlParsed.search.chapter ?? playlist[0].id;

  const onChapterChange = (currentChapter: string) => {
    navigate(`/video-embed?chapter=${currentChapter}`);
  };

  return (
    <VideoPlayerEmbed
      chapters={playlist}
      initialActiveChapter={chapter}
      onChapterChange={onChapterChange}
    />
  );
}
