import { Box, Flex } from "@chakra-ui/react";
import { Badge } from "@ui/Badge";
import { Breadcrumbs } from "@ui/Breadcrumbs/Breadcrumbs";
import { CategoryTabs } from "@ui/CategoryTabs/CategoryTabs";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { Chapter, playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayerWebsite } from "@ui/VideoPlayer/player-website/VideoPlayerWebsite";
import { useState } from "react";
import { usePageContext } from "src/renderer/PageContextProvider";
import { navigate } from "vite-plugin-ssr/client/router";

export interface Props {
  chapter: string;
}

export default function EducationPage({ chapter }: Props) {
  const pageContext = usePageContext();
  const locale = pageContext.locale;

  const currentChapter = playlist.find((c) => c.id === chapter) || playlist[0];
  const [transcriptTab, setTranscriptTab] = useState<Chapter["id"]>(
    currentChapter.id
  );
  const transcriptInfo =
    playlist.find((ch) => ch.id === transcriptTab) || currentChapter;

  const onChapterChange = (chapterId: string) => {
    navigate(`/${locale}/education?chapter=${chapterId}`);
    setTranscriptTab(chapterId);
  };

  return (
    <PageLayout
      contentMaxW="1020px"
      breadcrumbs={
        <Breadcrumbs
          collapseOnMobile={true}
          locale="en"
          items={[
            {
              link: `/${locale}/learn`,
              isDisabled: true,
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
            playlistOnBottom
          />
          <Box mt="md">
            <CategoryTabs
              activeItemId={transcriptTab}
              onTabClick={(id) => setTranscriptTab(id)}
              items={playlist.map((p) => ({
                id: p.id,
                label: p.subtitle,
              }))}
              contentProps={{
                maxW: "656px",
                marginLeft: "auto",
              }}
            />
            <Box
              maxW="656px"
              marginInline="auto"
              sx={{
                "> p": {
                  pt: "xs",
                  pb: "md",
                },
                "> h3": {
                  pt: "2xl",
                  pb: "sm",
                  margin: 0,
                  fontSize: "20px",
                  fontWeight: 700,
                },
              }}
            >
              <Heading variant="h3">{transcriptInfo.title}</Heading>
              <Text as="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                deserunt velit repellat fugit. Explicabo molestias distinctio
                fuga ipsum, alias maxime sapiente autem ducimus voluptate?
                Fugiat earum voluptatibus illo deserunt asperiores dicta alias
                nisi debitis soluta facere dolore tempore obcaecati architecto
                accusamus reprehenderit neque velit explicabo culpa quaerat,
                similique repudiandae vero quam? Neque ex labore temporibus vel
                ipsum?
              </Text>
              <Heading variant="h3">Summary</Heading>
              <Text as="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                deserunt velit repellat fugit. Explicabo molestias distinctio
                fuga ipsum, alias maxime sapiente autem ducimus voluptate?
                Fugiat earum voluptatibus illo deserunt asperiores dicta alias
                nisi debitis soluta facere dolore tempore obcaecati architecto
                accusamus reprehenderit neque velit explicabo culpa quaerat,
                similique repudiandae vero quam? Neque ex labore temporibus vel
                ipsum?
              </Text>
            </Box>
            {/* <Flex py="xl" gap="sm" overflowX="auto">
              {["Scalability", "Roadmap", "Cairo", "Layer 2"].map((b) => (
                <Badge variant="outline" key={b}>
                  {b}
                </Badge>
              ))}
            </Flex> */}
          </Box>
        </Box>
      }
    />
  );
}
