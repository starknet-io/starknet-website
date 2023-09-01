"use client";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { MarkdownBlock } from "src/blocks/MarkdownBlock";
import { useBoolean } from "react-use";
import RoadmapSubscribeForm from "../../../(components)/roadmap/RoadmapSubscribeForm";
import { PageLayout } from "@ui/Layout/PageLayout";
import moment from "moment";
import { useEffect } from "react";
import { Block } from "src/blocks/Block";
import { Text } from "@ui/Typography/Text";
import {
  RoadmapPost as RoadmapPostType,
  RoadmapVersion,
} from "@starknet-io/cms-data/src/roadmap";
import RoadmapPostVersion from "../../(components)/RoadmapPostVersion";
import "@ui/CodeHighlight/code-highlight-init";
import { StatusBadge } from "@ui/Badge/StatusBadge";
import { Breadcrumbs } from "@ui/Breadcrumbs/Breadcrumbs";

interface KeyValuePairs {
  [key: string]: string;
}

const stages: KeyValuePairs = {
  "building-now": "Building now",
  "building-next": "Building next",
  backlog: "Backlog",
};

export type RoadmapPostProps = {
  roadmapPost: RoadmapPostType;
  roadmapVersion?: RoadmapVersion;
  locale: string;
  psCopy?: string;
};

export default function RoadmapPost({
  roadmapPost,
  locale,
  roadmapVersion,
  psCopy,
}: RoadmapPostProps) {
  const [isOpen, setIsOpen] = useBoolean(false);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "A" &&
        (target as HTMLAnchorElement).getAttribute("href") === "#sendgrid"
      ) {
        event.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [setIsOpen]);

  return (
    <PageLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: "Developers",
              link: `/${locale}/developers`,
            },
            {
              label: "Roadmap",
              link: `/${locale}/roadmap`,
            },
            {
              label: roadmapPost?.title,
              link: "",
            },
          ]}
          locale={locale}
        />
      }
      pageLastUpdated={`Page last updated ${moment(
        roadmapPost?.gitlog?.date
      ).fromNow()}`}
      main={
        <Container maxWidth="846px">
          <Box mb={"2rem"}>
            <RoadmapPostVersion roadmapVersion={roadmapVersion} />
          </Box>
          <Heading variant="h1" color="heading-navy-fg">
            {roadmapPost.title}
          </Heading>
          <Flex
            direction="row"
            alignItems="center"
            mt="6"
            mb="32px"
            justifyContent="space-between"
          >
            <Flex direction="row" alignItems="center">
              <Text variant="cardBody">
                <strong>STAGE:</strong> {stages[roadmapPost?.stage]}
              </Text>
              <Heading
                variant="h4"
                fontSize="sm"
                mt="0"
                ml="2"
                pl="2"
                borderLeftWidth="1px"
                mb="0"
                sx={{ borderWeight: "solid", borderColor: "border.card.value" }}
              >
                {roadmapPost.availability}
              </Heading>
              {roadmapPost?.state ? (
                <Flex alignItems="center">
                  {roadmapPost?.specific_info ? (
                    <Text variant="cardBody" ml="2">
                      {roadmapPost?.specific_info}
                    </Text>
                  ) : null}
                </Flex>
              ) : null}
            </Flex>
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
          <Divider mt="8px" mb="32px" />

          <Flex direction="column" gap="32px">
            {roadmapPost.blocks?.map((block, i) => (
              <Block key={i} block={block} locale={locale} />
            ))}
          </Flex>
          <Spacer height="32px" />
          <Divider mb="6" />
          <MarkdownBlock body={psCopy as string} />
          <RoadmapSubscribeForm isOpen={isOpen} setIsOpen={setIsOpen} />
          <Divider mt="6" />
        </Container>
      }
    />
  );
}
