import { VideoPlayerEmbed } from "@ui/VideoPlayer/player-embed/VideoPlayerEmbed";
import { playlist } from "@ui/VideoPlayer/constants";

export const metadata = {
  title: "Video Tutorials",
};

export default function Page() {
  return (
    <VideoPlayerEmbed
      chapters={playlist}
      initialActiveChapter={playlist[0].id}
    />
  );
}
