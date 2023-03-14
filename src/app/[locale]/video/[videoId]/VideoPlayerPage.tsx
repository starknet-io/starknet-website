"use client";

import { Button } from "@chakra-ui/react";
import { VideoPlayerInWebsite } from "@ui/VideoPlayer/control-builtin/VideoPlayerInWebsite";
import { VideoPlayer } from "@ui/VideoPlayer/control-custom/VideoPlayerWebsite";
import { playlist } from "@ui/VideoPlayer/utils";
import { useState } from "react";

export default function VideoPlayerPage({ videoId }: { videoId: string }) {
  const [builtin, setBuiltin] = useState(false);
  return (
    <div>
      <Button mb={5} onClick={() => setBuiltin((b) => !b)}>
        {builtin ? "View custom control" : "View built-in control"}
      </Button>
      {builtin && (
        <VideoPlayerInWebsite
          chapters={playlist}
          initialActiveChapter={videoId}
        />
      )}
      {!builtin && (
        <VideoPlayer chapters={playlist} initialActiveChapter={videoId} />
      )}
    </div>
  );
}
