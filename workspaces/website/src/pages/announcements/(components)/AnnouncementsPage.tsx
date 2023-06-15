import { Grid, Heading } from "@chakra-ui/react";
import { AnnouncementsPost } from "@starknet-io/cms-data/src/announcements";
import RoadmapLayout from "../../(components)/roadmap/RoadmapLayout";
import AnnouncementPostCard from "./AnnouncementPostCard";

type AnnouncementsPageProps = {
  announcements: readonly AnnouncementsPost[];
  locale: string;
};
export default function AnnouncementsPage({
  announcements,
  locale,
}: AnnouncementsPageProps) {
  return (
    <RoadmapLayout locale={locale} mode="ANNOUNCEMENTS">
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
