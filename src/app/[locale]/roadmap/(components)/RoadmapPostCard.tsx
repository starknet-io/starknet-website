import { Card, CardBody, CardHeader, Img } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { RoadmapPost, RoadmapVersion } from "workspaces/cms-data/src/roadmap";
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
    <Card
      borderColor="roadmap-card-border-color"
      bg="roadmap-card-bg-color"
      borderWidth="1px"
      borderRadius="24px"
      maxW="md"
      as={Link}
      href={`/${locale}/roadmap/${roadmapPost?.slug}`}
      padding="8px"
    >
      <CardHeader
        height="194px"
        background="btn-filter-bg"
        borderRadius="16px 16px 0px 0px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Heading variant="h3" color="heading-navy-fg" fontWeight={600} lineHeight="28px">{roadmapPost?.title}</Heading>
        <Text variant="cardBody" color="heading-navy-fg">{roadmapPost?.availability}</Text>
      </CardHeader>
      <CardBody padding="24px 16px 16px 16px">
        <RoadmapPostVersion roadmapVersion={roadmapVersion} />
      </CardBody>
    </Card>
  );
}
