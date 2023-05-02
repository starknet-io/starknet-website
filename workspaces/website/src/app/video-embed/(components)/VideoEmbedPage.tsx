import { playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayerEmbed } from "@ui/VideoPlayer/player-embed/VideoPlayerEmbed";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import { navigate } from "vite-plugin-ssr/client/router";

interface VideoEmbedPageProps {
  chapter: string;
}
export default function VideoEmbedPage({ chapter }: VideoEmbedPageProps) {

  const onChapterChange = (currentChapter: string) => {
    navigate(`/video-embed?chapter=${currentChapter}`);
  };

  return (
    <ThemeProvider>
      <VideoPlayerEmbed
        chapters={playlist}
        initialActiveChapter={chapter}
        onChapterChange={onChapterChange}
      />
    </ThemeProvider>
  );
}
