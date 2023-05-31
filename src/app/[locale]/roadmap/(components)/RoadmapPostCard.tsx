import { Card, CardBody, CardHeader, Img } from "@chakra-ui/react";
import { RoadmapPost, RoadmapVersion } from "workspaces/cms-data/src/roadmap";
import { Badge } from "@ui/Badge";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import RoadmapPostVersion from "./RoadmapPostVersion";
import Link from "next/link";

type RoadmapPostCardProps = {
  roadmapPost?: RoadmapPost;
  roadmapVersion: RoadmapVersion;
  locale: string;
};
export default function RoadmapPostCard({
  roadmapPost,
  roadmapVersion,
  locale,
}: RoadmapPostCardProps) {
  return (
    <Card as={Link} href={`/${locale}/announcements/${roadmapPost?.slug}`}>
      <Img
        objectFit="cover"
        src={roadmapPost?.image}
        alt="Chakra UI"
        width="full"
        height="full"
      />
      <CardBody>
        <Badge variant="community_and_events">{roadmapPost.badge}</Badge>
        <Heading my="4" variant="h4">{roadmapPost?.title}</Heading>
        <Text size="lg">{roadmapPost?.description}</Text>
      </CardBody>
    </Card>
  );
}
