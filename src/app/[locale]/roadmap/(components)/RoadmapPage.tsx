"use client";

import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import { RoadmapPost, RoadmapVersion } from "workspaces/cms-data/src/roadmap";
import { roadmapStagesFields } from "workspaces/cms-config/src/collections/roadmapPosts";
import { PageLayout } from "@ui/Layout/PageLayout";
import SubscribeModal from "../SubscribeModal";
import RoadmapPostCard from "./RoadmapPostCard";
import { useMemo } from "react";

type RoadmapPageProps = {
  roadmapPosts: readonly RoadmapPost[];
  roadmapVersions: readonly RoadmapVersion[];
  locale: string;
};
export default function RoadmapPage({
  roadmapPosts,
  roadmapVersions,
  locale,
}: RoadmapPageProps) {
  const roadmapVersionsDict = useMemo(() => {
    return roadmapVersions.reduce((acc, topic) => {
      acc[topic.id] = topic;
      return acc;
    }, {} as Record<string, RoadmapVersion>);
  }, [roadmapVersions]);

  const roadmapPostsByStage = useMemo(() => {
    const postsByStage: Record<RoadmapPost["stage"], RoadmapPost[]> = {};
    roadmapPosts.forEach((post, i) => {
      if (postsByStage[post.stage]) {
        postsByStage[post.stage].push(post);
      } else {
        postsByStage[post.stage] = [post];
      }
    });

    return postsByStage;
  }, [roadmapPosts]);

  return (
    <>
      <Box
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
        background="#F5F5F5"
        py="4rem"
      >
        <Heading variant="h2" color="heading-navy-fg" fontSize="5xl">
          Roadmap & product updates
        </Heading>
        <Text fontSize="xl" maxW="560px">
          See what we’re building, what’s coming next and keep up to date on
          product announcements
        </Text>
        <SubscribeModal />
      </Box>
      <PageLayout
        main={
          <Container>
            {roadmapStagesFields.map((stage) => {
              const stagePosts = roadmapPostsByStage[stage.value];

              return (
                <Box key={stage.value} mb="4rem">
                  <Heading variant="h3" mb="2rem">
                    {stage.label}
                  </Heading>
                  <Grid
                    templateColumns={{
                      base: "repeat(auto-fit, minmax(300px, 1fr))",
                      lg: "repeat(auto-fit, minmax(300px, 1fr))",
                      xl: "repeat(auto-fit, minmax(300px, 299px))",
                    }}
                    templateRows="1fr"
                    columnGap="24px"
                    rowGap="48px"
                    // justifyContent="center"
                  >
                    {stagePosts.map((post) => {
                      const roadmapVersion = roadmapVersionsDict[post.version];

                      return (
                        <RoadmapPostCard
                          key={post.id}
                          roadmapPost={post}
                          roadmapVersion={roadmapVersion}
                          locale={locale}
                        />
                      );
                    })}
                  </Grid>
                </Box>
              );
            })}
          </Container>
        }
      />
    </>
  );
}
