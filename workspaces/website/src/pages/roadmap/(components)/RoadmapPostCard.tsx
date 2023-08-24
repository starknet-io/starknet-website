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
        borderColor="roadmap-card-border-color"
        bg="roadmap-card-bg-color"
        borderWidth="1px"
        borderRadius="24px"
        as="a"
        href={`/${locale}/roadmap/${roadmapPost?.slug}`}
        padding="8px"
        height="100%"
      >
        <CardHeader
          minHeight="194px"
          background="btn-filter-bg"
          borderTopRadius="lg"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
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
        <CardBody padding="24px 16px 16px 16px">
          <RoadmapPostVersion roadmapVersion={roadmapVersion} />
        </CardBody>
      </Card>
    </CardGradientBorder>
  );
}
