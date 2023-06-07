"use client";

import { Box, Grid, Heading, Icon } from "@chakra-ui/react";
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
          <Box key={stage.value} mb="5rem">
            <Heading variant="h4" display="flex" alignItems="center" mb="2rem" color="heading-navy-fg">
              <Icon
                boxSize="18px"
                color="list-card-icon-fg"
                as={stage.icon}
                mr="12px"
              />
              {stage.label} ({stagePosts.length})
            </Heading>
            <Grid
              templateColumns={{
                base: "repeat(auto-fit, minmax(300px, 1fr))",
                lg: "1fr 1fr 1fr",
                xl: "1fr 1fr 1fr",
              }}
              templateRows="1fr"
              columnGap="32px"
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
