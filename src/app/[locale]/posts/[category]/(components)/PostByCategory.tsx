import React from "react";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Tag } from "@ui/Tag/Tag";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { YoutubePlayer } from "@ui/YoutubePlayer/YoutubePlayer";
import moment from "moment";
// import { Block } from "src/blocks/Block";
import { Block } from "src/blocks/BlockClient";
import { Post } from "@starknet-io/cms-data/src/posts";
import { TableOfContents } from "src/app/[locale]/(components)/TableOfContents";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { Index } from "unist-util-index";
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
} from "src/libs/chakra-ui";
import Link from "next/link";
import { Topic } from "workspaces/cms-data/src/topics";
import { Category } from "workspaces/cms-data/src/categories";

type PostByCategoryProps = {
  post: Post;
  category: Category;
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
              href={`/${locale}/posts/${category.slug}`}
              fontSize="sm"
              noOfLines={1}
            >
              {category.name}
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
            />
          ) : null}

          <Box mb={"16px"}>
            <Badge variant="stark_at_home" textTransform="capitalize">
              {post.post_type}
            </Badge>
          </Box>
          <Heading variant="h2" color="heading-navy-fg">
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
          <Divider mt="8px" mb="32px" />
          {post.post_type === "video" ? (
            <Flex mb="32px">
              <YoutubePlayer videoId={videoId} />
            </Flex>
          ) : null}
          <Flex direction="column" gap="32px">
            {post.blocks?.map((block, i) => (
              <Block key={i} block={block} locale={locale} />
            ))}
          </Flex>
          <Spacer height="32px" />
          <Divider />
          <Flex direction="row" gap="8px" mt="64px">
            {post.topic.map((topic, i) => (
              <Tag key={i}> {topics.find((t) => t.id === topic)?.name} </Tag>
            ))}
          </Flex>
        </Container>
      }
      rightAside={
        <>
          {!!post.toc ? (
            <TableOfContents headings={pageToTableOfContents(post)} />
          ) : null}
        </>
      }
    />
  );
}

interface HeadingData {
  readonly title: string;
  readonly level: 2 | 3;
}
export interface MarkdownBlock {
  readonly type: "markdown";
  readonly body: string;
}

function pageToTableOfContents(page: any): readonly HeadingData[] {
  const data = page.blocks.flatMap(
    (block: {
      title: string;
      type: string;
      heading: string;
      body: string;
      blocks: [{ title: string; body: MarkdownBlock; heading: string }];
    }) => {
      if (block.type === "page_header") {
        return [];
      } else if (block.type === "ordered_block") {
        let blocks = Array.from(block.blocks).sort((a: any, b: any) => {
          return a.title.localeCompare(b.title);
        });

        return blocks.map((block) => {
          return {
            title: block.title,
            level: 2,
          };
        });
      } else if (block.type === "accordion") {
        return [
          ...(block.heading != null
            ? [
                {
                  title: block.heading,
                  level: 2,
                },
              ]
            : []),
          // ...block.blocks.map(block => {
          //   return {
          //     title: block.label,
          //     level: 3,
          //   };
          // })
        ];
      } else if (block.type === "markdown") {
        const processor = unified()
          .use(remarkParse)
          .use(() => {
            return (tree: any) => {
              const typeIndex = new Index("type", tree);
              const headings = typeIndex.get("heading");

              return headings.map((node: any) => {
                const textNode = node.children.find((n: any) => {
                  return n.type === "text";
                });

                return {
                  title: textNode?.value ?? "",
                  level: 2,
                };
              });
            };
          });

        const node = processor.parse(block.body);
        const tree = processor.runSync(node);

        return tree;
      } else if ("title" in block) {
        return {
          title: block.title,
          level: 2,
        };
      }

      return [];
    }
  );

  return data;
}
