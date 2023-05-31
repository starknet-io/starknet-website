"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Flex,
  Heading,
  Img,
  Spacer
} from "@chakra-ui/react";
import { Badge } from "@ui/Badge";
import { PageLayout } from "@ui/Layout/PageLayout";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { BlocksDynamicData } from "src/app/[locale]/(components)/utils/getBlocksDynamicData";
import { Block } from "src/blocks/Block";
import { AnnouncementPost as AnnouncementPostType } from "workspaces/cms-data/src/announcements";

export default function AnnouncementPost({
  announcementsPost,
  locale,
  blocksDynamicData,
}: {
  announcementsPost: AnnouncementPostType;
  locale: string;
  blocksDynamicData: BlocksDynamicData;
}) {
  return (
    <PageLayout
      maxW="734px"
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
              href={`/${locale}/announcements`}
              fontSize="sm"
              noOfLines={1}
            >
              Announcements
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      }
      pageLastUpdated={`Page last updated ${moment(
        announcementsPost?.gitlog?.date
      ).fromNow()}`}
      main={
        <Container maxWidth="846px">
          {announcementsPost.image ? (
            <Img
              mb="32px"
              borderRadius={"8px"}
              src={announcementsPost.image}
              alt={announcementsPost.title}
            />
          ) : null}
          <Badge variant="community_and_events">{announcementsPost.badge}</Badge>
          <Heading variant="h2" mt="4" color="heading-navy-fg">
            {announcementsPost.title}
          </Heading>
          <Divider mt="8px" mb="32px" />
          <Flex direction="column" gap="32px">
            {announcementsPost.blocks?.map((block, i) => (
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
