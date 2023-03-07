import { Box } from "@chakra-ui/react";
import { playlist } from "@ui/VideoPlayer/utils";
import { VideoPlayer } from "@ui/VideoPlayer/VideoPlayer";

export const metadata = {
  title: "Video Tutorials",
};

export default function Page() {
  return (
    <VideoPlayer chapters={playlist} initialActiveChapter={playlist[0].id} />
  );
}
