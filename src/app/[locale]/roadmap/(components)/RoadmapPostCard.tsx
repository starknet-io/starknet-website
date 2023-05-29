import { Card, CardBody, CardHeader, Img, Text } from "@chakra-ui/react";
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
    <Card maxW="md" as={Link} href={`/${locale}/roadmap/${roadmapPost?.slug}`}>
      <CardHeader>
        <Text size="lg">{roadmapPost?.title}</Text>
      </CardHeader>
      <Img
        objectFit="cover"
        src={roadmapPost?.image}
        alt="Chakra UI"
        width="full"
        height="full"
      />
      <CardBody>
        <RoadmapPostVersion roadmapVersion={roadmapVersion} />
      </CardBody>
    </Card>
  );
}
