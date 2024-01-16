import { Box, Grid, Heading, Icon } from "@chakra-ui/react";
import { useMemo } from "react";
import { roadmapStagesFields } from "@starknet-io/cms-config/src/collections/roadmapPosts";
import { RoadmapDetails, RoadmapVersion } from "@starknet-io/cms-data/src/roadmap";
import { Roadmap } from "@starknet-io/cms-data/src/settings/roadmap";
import RoadmapLayout from "../../(components)/roadmap/RoadmapLayout";
import RoadmapPostCard from "./RoadmapPostCard";

export type RoadmapPageProps = {
  roadmapPosts: readonly RoadmapDetails[];
  roadmapVersions: readonly RoadmapVersion[];
  roadmapSettings: Roadmap;
  locale: string;
  env: {
    CLOUDFLARE_RECAPTCHA_KEY: string;
  }
};
export default function RoadmapPage({
  env,
  roadmapPosts,
  roadmapVersions,
  roadmapSettings,
  locale,
}: RoadmapPageProps) {
  const roadmapVersionsDict = useMemo(() => {
    return roadmapVersions.reduce((acc, topic) => {
      acc[topic.id] = topic;
      return acc;
    }, {} as Record<string, RoadmapVersion>);
  }, [roadmapVersions]);

  const roadmapPostsByStage = useMemo(() => {
    const postsByStage: Record<RoadmapDetails["stage"], RoadmapDetails[]> = {};
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
    <RoadmapLayout env={env} locale={locale} mode="ROADMAP" roadmapSettings={roadmapSettings}>
      {roadmapStagesFields.map((stage) => {
        const stagePosts = roadmapPostsByStage[stage.value] || [];

        return (
          <Box key={stage.value} mb="5rem">
            <Heading as="h1" variant="h4" display="flex" alignItems="center" mb="2rem" color="heading-navy-fg">
              <Icon
                boxSize="22px"
                as={stage.icon}
                mr="12px"
                color="heading-navy-fg"
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
              rowGap="24px"
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
