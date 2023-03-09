import { Box } from "@chakra-ui/react";
import { playlist } from "@ui/VideoPlayer/utils";
import { VideoPlayer } from "@ui/VideoPlayer/VideoPlayer";

export const metadata = {
  title: "Video Tutorials",
};

export default function Page() {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        maxWidth: 1000,
        width: "100%",
        // marginTop: 100,
        // marginInline: "auto",
        overflow: "hidden",
      }}
    >
      <VideoPlayer chapters={playlist} initialActiveChapter={playlist[0].id} />
    </div>
  );
}
