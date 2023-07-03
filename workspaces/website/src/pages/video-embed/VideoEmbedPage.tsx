import { playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayerEmbed } from "@ui/VideoPlayer/player-embed/VideoPlayerEmbed";
import { navigate } from "vite-plugin-ssr/client/router";

export interface Props {
  chapter: string;
}

export default function VideoEmbedPage({ chapter }: Props) {
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
