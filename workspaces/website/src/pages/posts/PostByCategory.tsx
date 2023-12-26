import { PageLayout } from "@ui/Layout/PageLayout";
import { Tag } from "@ui/Tag/Tag";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { YoutubePlayer } from "@ui/YoutubePlayer/YoutubePlayer";
import moment from "moment";
import { Block } from "src/blocks/Block";
import { Post } from "@starknet-io/cms-data/src/posts";
import '@ui/CodeHighlight/code-highlight-init'

import {
  Container,
  Flex,
  Img,
  Box,
  Divider,
  Spacer,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Link,
} from "@chakra-ui/react";

import { TableOfContents } from "src/pages/(components)/TableOfContents/TableOfContents";
import { Category } from "@starknet-io/cms-data/src/categories";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { blocksToTOC } from "../(components)/TableOfContents/blocksToTOC";

type PostByCategoryProps = {
  post: Post;
  category?: Category; // Category can be undefined in live preview
  locale: string;
  topics: readonly Topic[];
};
export default function PostByCategory({
  post,
  category,
  locale,
  topics,
}: PostByCategoryProps) {
  let videoId = post.post_type === "video" ? post.video?.id : undefined;
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
              href={`/${locale}/posts`}
              fontSize="sm"
              noOfLines={1}
            >
              Blog
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${locale}/posts/${category?.slug}`}
              fontSize="sm"
              noOfLines={1}
            >
              {category?.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontSize="sm" noOfLines={1}>
              {post.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      }
      pageLastUpdated={`Page last updated ${moment(
        post?.gitlog?.date
      ).fromNow()}`}
      main={
        <Container maxWidth="846px">
          {post.post_type !== "video" ? (
            <Img
              mb="32px"
              borderRadius={"8px"}
              src={post.image}
              alt={post.title}
              width={"100%"}
            />
          ) : null}

          <Box mb={"16px"}>
            <Badge variant="stark_at_home" textTransform="capitalize">
              {post.post_type}
            </Badge>
          </Box>
          <Heading as="h1" variant="h2" color="heading-navy-fg" fontWeight="extrabold">
            {post.title}
          </Heading>
          <Flex mt="16px">
            <HStack>
              <Text fontSize="sm" color="muted">
                {moment(post.published_date).format("MMM DD,YYYY")} ·
              </Text>
              <Text fontSize="sm" color="muted">
                {post.timeToConsume}
              </Text>
            </HStack>
            <Spacer />
          </Flex>
          <Divider mt="8px" mb="24px" />
          {post.post_type === "video" ? (
            <Flex mb={!post.blocks?.length ? "32px" : 0} direction="column">
              <YoutubePlayer videoId={videoId} />
              {!post.blocks?.length && <Text
                pt={2}
                pb={4}
                lineHeight="32px"
                variant="body"
              >{post.short_desc}</Text>}
            </Flex>
          ) : null}
          <Flex direction="column" gap="32px">
            {post.blocks?.map((block, i) => (
              <Block
                key={i}
                block={block}
                locale={locale}
              />
            ))}
          </Flex>
          <Spacer height="32px" />
          <Divider />
          <Flex direction="row" gap="8px" mt="64px">
            {post.topic?.map((topic, i) => (
              <Tag key={i} capitalize={false}> {topics.find((t) => t.id === topic)?.name} </Tag>
            ))}
          </Flex>
        </Container>
      }
      rightAside={
        <>
          {!!post.toc ? (
            <TableOfContents headings={blocksToTOC(post.blocks, 1)} />
          ) : null}
        </>
      }
    />
  );
}
