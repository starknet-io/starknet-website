import { Box, Container } from "@chakra-ui/react";
import { playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayerWebsite } from "@ui/VideoPlayer/player-website/VideoPlayerWebsite";
import { usePageContext } from "src/renderer/usePageContext";
import { navigate } from "vite-plugin-ssr/client/router";

export interface Props {
  chapter: string;
  locale: string;
}

export default function VideoPage() {
  const pageContext = usePageContext()
  const chapter = pageContext.urlParsed.search.chapter ?? playlist[0].id
  const locale = pageContext.locale

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
