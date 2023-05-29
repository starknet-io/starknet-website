import { Flex, Tag, TagLabel } from "@chakra-ui/react";
import { RoadmapVersion } from "workspaces/cms-data/src/roadmap";

export default function RoadmapPostVersion({
  roadmapVersion,
}: {
  roadmapVersion?: RoadmapVersion;
}) {
  return (
    <Flex gap="0.5rem" flexWrap="wrap">
      <Tag bg={roadmapVersion?.bgColor}>
        <TagLabel color={roadmapVersion?.textColor}>
          {roadmapVersion?.version}
        </TagLabel>
      </Tag>
      <Tag bg={roadmapVersion?.bgColor}>
        <TagLabel color={roadmapVersion?.textColor}>
          {roadmapVersion?.impact}
        </TagLabel>
      </Tag>
    </Flex>
  );
}
