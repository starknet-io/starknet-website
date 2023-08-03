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
import { Block } from "src/blocks/Block";
import { AnnouncementsPost as AnnouncementPostType } from "@starknet-io/cms-data/src/announcements";
import '@ui/CodeHighlight/code-highlight-init'

export type AnnouncementPostProps = {
  announcementsPost: AnnouncementPostType;
  locale: string;
}

export default function AnnouncementPost({
  announcementsPost,
  locale,
}: AnnouncementPostProps) {
  return (
    <PageLayout
      maxW="734px"
      breadcrumbs={
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/${locale}`}
              fontSize="sm"
              noOfLines={1}
            >
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
          <Heading variant="h2" mt="4" color="heading-navy-fg" fontWeight="extrabold">
            {announcementsPost.title}
          </Heading>
          <Divider mt="8px" mb="32px" />
          <Flex direction="column" gap="32px">
            {announcementsPost.blocks?.map((block, i) => (
              <Block
                key={i}
                block={block}
                locale={locale}
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
