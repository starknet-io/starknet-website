"use client";
import { Box, Container } from "@chakra-ui/react";
import { playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayerWebsite } from "@ui/VideoPlayer/player-website/VideoPlayerWebsite";
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
      <Box mb={10}>
        <Box as="h1" fontSize="lg">
          Video tutorial
        </Box>
      </Box>
      <VideoPlayerWebsite
        chapters={playlist}
        initialActiveChapter={chapter}
        onChapterChange={onChapterChange}
      />
    </Container>
  );
}
