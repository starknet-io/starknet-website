import { Card, CardBody, CardHeader, Flex } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import {
  RoadmapDetails,
  RoadmapVersion,
} from "@starknet-io/cms-data/src/roadmap";
import RoadmapPostVersion from "./RoadmapPostVersion";
import { CardGradientBorder } from "@ui/Card/components/CardGradientBorder";
import { StatusBadge } from "@ui/Badge/StatusBadge";

type RoadmapPostCardProps = {
  roadmapPost?: RoadmapDetails;
  roadmapVersion: RoadmapVersion;
  locale: string;
};
export default function RoadmapPostCard({
  roadmapPost,
  roadmapVersion,
  locale,
}: RoadmapPostCardProps) {
  return (
    <CardGradientBorder
      height="100%"
      padding="0"
      maxW="md"
      borderRadius="lg"
      borderColor="border.card.value"
    >
      <Card
        bg="surface.card"
        as="a"
        href={`/${locale}/roadmap/${roadmapPost?.slug}`}
        padding="xs"
        height="100%"
      >
        <CardHeader
          minHeight="160px"
          background="surface.transparent.value"
          borderTopRadius="lg"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          paddingTop="lg"
          paddingBottom="xs"
          paddingX="md"
          color="content.accent.value"
        >
          <Heading variant="h3" pb="sm" fontWeight={600} lineHeight="28px">
            {roadmapPost?.title}
          </Heading>
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text variant="body">{roadmapPost?.availability}</Text>
            {roadmapPost?.state ? (
              <StatusBadge
                variant={
                  roadmapPost?.state === "On testnet" ? "success" : "danger"
                }
              >
                {roadmapPost?.state}
              </StatusBadge>
            ) : null}
          </Flex>
        </CardHeader>
        <CardBody paddingY="xl" paddingX="md">
          <RoadmapPostVersion roadmapVersion={roadmapVersion} />
        </CardBody>
      </Card>
    </CardGradientBorder>
  );
}
