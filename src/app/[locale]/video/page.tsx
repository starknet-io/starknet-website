import { Box } from "@chakra-ui/react";
import { playlist } from "@ui/VideoPlayer/utils";
import { VideoPlayerInWebsite } from "@ui/VideoPlayer/VideoPlayerInWebsite";

export const metadata = {
  title: "Video Tutorials",
};

export default function Page() {
  return (
    <div
      style={{
        maxWidth: 700,
        minWidth: "min(600px, 100%)",
        marginLeft: "2rem",
      }}
    >
      <h1>Video explanation</h1>
      <VideoPlayerInWebsite
        chapters={playlist}
        initialActiveChapter={playlist[0].id}
      />
    </div>
  );
}
