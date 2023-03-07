import { Box } from "@chakra-ui/react";
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
      }}
    >
      <iframe
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
        }}
        src="http://localhost:3000/en/video-embed"
      >
        <VideoPlayer />
      </iframe>
    </div>
  );
}
