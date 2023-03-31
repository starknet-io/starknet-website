"use client";
import { Box, Container } from "@chakra-ui/react";
import { playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayer } from "@ui/VideoPlayer/player/VideoPlayer";
import { useRouter } from "next/navigation";

interface Props {
  chapter: string;
  locale: string;
}

export default function VideoPage({ chapter, locale }: Props) {
  const router = useRouter();
  const onChapterChange = (chapterId: string) => {
    router.push(`/${locale}/video?chapter=${chapterId}`);
  };
  return (
    <Container py={{ base: "4", lg: "17px" }}>
      <Box as="h1" fontSize="lg" mb={10}>
        Video tutorial
      </Box>
      <VideoPlayer
        chapters={playlist}
        initialActiveChapter={chapter}
        onChapterChange={onChapterChange}
      />
    </Container>
  );
}
