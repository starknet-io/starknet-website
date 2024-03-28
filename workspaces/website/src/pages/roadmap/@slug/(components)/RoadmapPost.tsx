"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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

interface KeyValuePairs {
  [key: string]: string;
}

const stages: KeyValuePairs = {
  completed: "Completed",
  "building-now": "Building now",
  "building-next": "Building next",
  backlog: "Details are WIP",
};

export type RoadmapPostProps = {
  env?: {
    CLOUDFLARE_RECAPTCHA_KEY: string;
  };
  roadmapPost: RoadmapPostType;
  roadmapVersion?: RoadmapVersion;
  locale: string;
  psCopy?: string;
};

export default function RoadmapPost({
  env,
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
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${locale}`} fontSize="sm" noOfLines={1}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/${locale}/developers`}
              fontSize="sm"
              noOfLines={1}
            >
              Developers
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/${locale}/roadmap`}
              fontSize="sm"
              noOfLines={1}
            >
              Roadmap
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/${locale}/roadmap/${roadmapPost?.slug}`}
              fontSize="sm"
              noOfLines={1}
            >
              {roadmapPost?.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      }
      pageLastUpdated={`Page last updated ${moment(
        roadmapPost?.gitlog?.date
      ).fromNow()}`}
      main={
        <Box maxWidth="846px">
          <Box mb={"2rem"}>
            <RoadmapPostVersion roadmapVersion={roadmapVersion} />
          </Box>
          <Heading
            as="h1"
            variant="h2"
            color="heading-navy-fg"
            fontWeight="extrabold"
          >
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
                sx={{ borderWeight: "solid", borderColor: "fg-default" }}
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
            <div>
              {roadmapPost?.state ? (
                <Text
                  display="flex"
                  alignItems="center"
                  variant="cardBody"
                  color="roadmap-availability-state-fg"
                  borderRadius="5px"
                  padding="4px 12px"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="roadmap-card-border-color"
                  bg="roadmap-card-tag-bg"
                >
                  {roadmapPost?.state}
                  <Box
                    display="inline-block"
                    bg={
                      roadmapPost?.state === "On testnet"
                        ? "#00815C"
                        : "#EF5600"
                    }
                    borderRadius="50%"
                    width="14px"
                    height="14px"
                    ml="2"
                  ></Box>
                </Text>
              ) : null}
            </div>
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
          <RoadmapSubscribeForm
            env={env}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <Divider mt="6" />
        </Box>
      }
    />
  );
}
