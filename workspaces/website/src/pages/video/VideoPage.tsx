import { Box, Container } from "@chakra-ui/react";
import { Breadcrumbs } from "@ui/Breadcrumbs/Breadcrumbs";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayerWebsite } from "@ui/VideoPlayer/player-website/VideoPlayerWebsite";
import { usePageContext } from "src/renderer/PageContextProvider";
import { navigate } from "vite-plugin-ssr/client/router";

export interface Props {
  chapter: string;
}

export default function VideoPage({ chapter }: Props) {
  const pageContext = usePageContext();
  const locale = pageContext.locale;

  const currentChapter = playlist.find((c) => c.id === chapter) || playlist[0];

  const onChapterChange = (chapterId: string) => {
    navigate(`/${locale}/video?chapter=${chapterId}`);
  };

  return (
    <PageLayout
      breadcrumbs={
        <Breadcrumbs
          collapseOnMobile={true}
          locale="en"
          items={[
            {
              link: `/${locale}/learn`,
              label: "Learn",
            },
            {
              link: ``,
              label: currentChapter.title,
            },
          ]}
        />
      }
      main={
        <Box>
          <Heading
            as="h1"
            variant="h2"
            pb="2xl"
            mb="2xl"
            borderBottom="1px solid"
            borderColor="border.divider"
          >
            {currentChapter.title}
          </Heading>
          <VideoPlayerWebsite
            chapters={playlist}
            initialActiveChapter={chapter}
            onChapterChange={onChapterChange}
          />
        </Box>
      }
    />
  );
}
