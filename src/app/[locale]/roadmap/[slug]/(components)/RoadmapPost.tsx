"use client";
import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Flex,
  // HStack,
  Heading,
  Img,
  Spacer,
  // Text,
} from "@chakra-ui/react";
import { PageLayout } from "@ui/Layout/PageLayout";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { BlocksDynamicData } from "src/app/[locale]/(components)/utils/getBlocksDynamicData";
import { Block } from "src/blocks/Block";
import { RoadmapPost as RoadmapPostType } from "workspaces/cms-data/src/roadmap";

export default function RoadmapPost({
  roadmapPost,
  locale,
  blocksDynamicData,
}: {
  roadmapPost: RoadmapPostType;
  locale: string;
  blocksDynamicData: BlocksDynamicData;
}) {
  return (
    <PageLayout
      breadcrumbs={
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${locale}`}
              fontSize="sm"
              noOfLines={1}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${locale}/developers`}
              fontSize="sm"
              noOfLines={1}
            >
              Developers
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${locale}/roadmap`}
              fontSize="sm"
              noOfLines={1}
            >
              Roadmap
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
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
        <Container maxWidth="846px">
          {roadmapPost.image ? (
            <Img
              mb="32px"
              borderRadius={"8px"}
              src={roadmapPost.image}
              alt={roadmapPost.title}
            />
          ) : null}

          {/* <Box mb={"16px"}>
            <Badge variant="stark_at_home" textTransform="capitalize">
              {roadmapPost.post_type}
            </Badge>
          </Box> */}
          <Heading variant="h2" color="heading-navy-fg">
            {roadmapPost.title}
          </Heading>
          {/* <Flex mt="16px">
            <HStack>
              <Text fontSize="sm" color="muted">
                {moment(roadmapPost.published_date).format("MMM DD,YYYY")} ·
              </Text>
              <Text fontSize="sm" color="muted">
                {roadmapPost.timeToConsume}
              </Text>
            </HStack>
            <Spacer />
          </Flex> */}
          <Divider mt="8px" mb="32px" />
          <Flex direction="column" gap="32px">
            {roadmapPost.blocks?.map((block, i) => (
              <Block
                key={i}
                block={block}
                locale={locale}
                blocksDynamicData={blocksDynamicData}
              />
            ))}
          </Flex>
          <Spacer height="32px" />
          <Divider />
        </Container>
      }
    />
  );
}
