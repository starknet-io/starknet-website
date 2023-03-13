import { playlist } from "@ui/VideoPlayer/utils";
import { VideoPlayerEmbed } from "@ui/VideoPlayer/control-builtin/VideoPlayerEmbed";

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
