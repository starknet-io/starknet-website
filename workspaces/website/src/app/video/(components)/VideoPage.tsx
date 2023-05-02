import { Box, Container } from "@chakra-ui/react";
import { playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayerWebsite } from "@ui/VideoPlayer/player-website/VideoPlayerWebsite";
import { navigate } from "vite-plugin-ssr/client/router";

interface Props {
  chapter: string;
  locale: string;
}

export default function VideoPage({ chapter, locale }: Props) {
  const onChapterChange = (chapterId: string) => {
    navigate(`/${locale}/video?chapter=${chapterId}`);
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
