"use client";
import { Box, Container } from "@chakra-ui/react";
import { playlist } from "@ui/VideoPlayer/utils";
import { VideoPlayerInWebsite } from "@ui/VideoPlayer/VideoPlayerInWebsite";

export default function VideoTutorials() {
  return (
    <Container py={{ base: "4", lg: "17px" }}>
      <h1>Video explanation</h1>
      <VideoPlayerInWebsite
        chapters={playlist}
        initialActiveChapter={playlist[0].id}
      />
    </Container>
  );
}
