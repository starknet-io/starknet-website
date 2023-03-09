import { playlist } from "@ui/VideoPlayer/utils";
import { VideoPlayer } from "@ui/VideoPlayer/VideoPlayerInWebsite";
import { VideoPlayerEmbed } from "@ui/VideoPlayer/VideoPlayerEmbed";

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
