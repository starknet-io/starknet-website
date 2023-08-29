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
    <CardGradientBorder height="100%" padding="0" maxW="md" borderRadius="lg">
      <Card
        borderColor="border.card.value"
        bg="surface.card"
        borderWidth="1px"
        borderRadius="lg"
        as="a"
        href={`/${locale}/roadmap/${roadmapPost?.slug}`}
        padding="xs"
        height="100%"
      >
        <CardHeader
          minHeight="194px"
          background="surface.transparent.value"
          borderTopRadius="lg"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          paddingY="lg"
          paddingX="md"
        >
          <Heading
            variant="h3"
            pb="2"
            color="heading-navy-fg"
            fontWeight={600}
            lineHeight="28px"
          >
            {roadmapPost?.title}
          </Heading>
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text variant="cardBody" color="heading-navy-fg">
              {roadmapPost?.availability}
            </Text>
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
