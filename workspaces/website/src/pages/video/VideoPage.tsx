import { Box, Container } from "@chakra-ui/react";
import { AnalyticsCard } from "@ui/Card/AnalyticsCard";
import { playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayerWebsite } from "@ui/VideoPlayer/player-website/VideoPlayerWebsite";
import { SiTwitter } from "react-icons/si";
import { usePageContext } from "src/renderer/PageContextProvider";
import { navigate } from "vite-plugin-ssr/client/router";

export interface Props {
  chapter: string;
}

export default function VideoPage({ chapter }: Props) {
  const pageContext = usePageContext();
  const locale = pageContext.locale;

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
      <AnalyticsCard
        icon={SiTwitter}
        description="Followers on Social Media"
        stat="100k"
      />
    </Container>
  );
}
