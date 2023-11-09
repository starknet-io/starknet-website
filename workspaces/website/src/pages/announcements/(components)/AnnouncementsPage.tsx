import { Grid, Heading } from "@chakra-ui/react";
import { AnnouncementDetails } from "@starknet-io/cms-data/src/announcements";
import RoadmapLayout from "../../(components)/roadmap/RoadmapLayout";
import AnnouncementPostCard from "./AnnouncementPostCard";

export type AnnouncementsPageProps = {
  announcements: readonly AnnouncementDetails[];
  locale: string;
  env: {
    CLOUDFLARE_RECAPTCHA_KEY: string;
  }
};
export default function AnnouncementsPage({
  announcements,
  env,
  locale,
}: AnnouncementsPageProps) {
  return (
    <RoadmapLayout env={env} locale={locale} mode="ANNOUNCEMENTS">
      <Heading variant="h3" mb="2rem">
        Announcements
      </Heading>
      <Grid
        templateColumns="repeat(1, 1fr)"
        templateRows="1fr"
        columnGap="24px"
        rowGap="48px"
      >
        {announcements.map((post) => {
          return (
            <AnnouncementPostCard
              post={post}
              key={`announcement-${post.id}`}
              locale={locale}
            />
          );
        })}
      </Grid>
    </RoadmapLayout>
  );
}
