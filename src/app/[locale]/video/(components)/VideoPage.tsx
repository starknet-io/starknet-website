"use client";
import { Box, Button, Container } from "@chakra-ui/react";
import { playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayer } from "@ui/VideoPlayer/player/VideoPlayer";
import { VideoPlayerSeperate } from "@ui/VideoPlayer/player/VideoPlayerSeperate";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  chapter: string;
  locale: string;
}

export default function VideoPage({ chapter, locale }: Props) {
  const [seperateVideos, setSeperateVideos] = useState(true);
  const router = useRouter();
  const onChapterChange = (chapterId: string) => {
    router.push(`/${locale}/video?chapter=${chapterId}`);
  };
  return (
    <Container py={{ base: "4", lg: "17px" }}>
      <Box mb={10}>
        <Box as="h1" fontSize="lg">
          Video tutorial
        </Box>
        <Button my="4" onClick={() => setSeperateVideos((b) => !b)}>
          {seperateVideos
            ? "Use a single video for all chapters"
            : "Use seperate videos for each chapter"}
        </Button>
        <Box as="h1" fontSize="lg">
          {seperateVideos
            ? "Player is now using seperate videos for each chapter"
            : "Player is now using a single video for all chapters"}
        </Box>
      </Box>
      {seperateVideos ? (
        <VideoPlayerSeperate
          chapters={playlist}
          initialActiveChapter={chapter}
          onChapterChange={onChapterChange}
        />
      ) : (
        <VideoPlayer
          chapters={playlist}
          initialActiveChapter={chapter}
          onChapterChange={onChapterChange}
        />
      )}
    </Container>
  );
}
