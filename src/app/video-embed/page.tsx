import { VideoPlayerEmbed } from "@ui/VideoPlayer/control-custom/VideoPlayerEmbed";
import { playlist } from "@ui/VideoPlayer/utils";

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
