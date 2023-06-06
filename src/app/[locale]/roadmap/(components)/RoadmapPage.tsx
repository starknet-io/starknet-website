"use client";

import { Box, Grid, Heading } from "@chakra-ui/react";
import { useMemo } from "react";
import { roadmapStagesFields } from "workspaces/cms-config/src/collections/roadmapPosts";
import { RoadmapPost, RoadmapVersion } from "workspaces/cms-data/src/roadmap";
import RoadmapLayout from "../../(components)/roadmap/RoadmapLayout";
import RoadmapPostCard from "./RoadmapPostCard";

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
    <RoadmapLayout locale={locale} mode="ROADMAP">
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
    </RoadmapLayout>
  );
}
