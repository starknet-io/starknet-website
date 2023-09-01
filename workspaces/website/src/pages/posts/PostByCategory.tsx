import { PageLayout } from "@ui/Layout/PageLayout";
import { Tag } from "@ui/Tag/Tag";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { Breadcrumbs } from "@ui/Breadcrumbs/Breadcrumbs";
import { YoutubePlayer } from "@ui/YoutubePlayer/YoutubePlayer";
import moment from "moment";
import { Block } from "src/blocks/Block";
import { Post } from "@starknet-io/cms-data/src/posts";
import "@ui/CodeHighlight/code-highlight-init";

import {
  Container,
  Flex,
  Img,
  Box,
  Divider,
  Spacer,
  Badge,
  Icon,
} from "@chakra-ui/react";

import { TableOfContents } from "src/pages/(components)/TableOfContents/TableOfContents";
import { Category } from "@starknet-io/cms-data/src/categories";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { blocksToTOC } from "../(components)/TableOfContents/blocksToTOC";
import { FiBookOpen, FiHeadphones, FiTv } from "react-icons/fi";

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
  const renderPostTypeIcon = () => {
    switch (post.post_type) {
      case "article":
        return FiBookOpen;
      case "audio":
        return FiHeadphones;
      case "video":
        return FiTv;

      default:
        return FiBookOpen;
    }
  };
  return (
    <PageLayout
      breadcrumbs={
        <Breadcrumbs
          collapseOnMobile={true}
          locale="en"
          items={[
            {
              link: `/${locale}/posts`,
              label: "Blog",
            },
            {
              link: `/${locale}/posts/${category?.slug}`,
              label: category?.name ?? "",
            },
            {
              link: "",
              label: post.title,
            },
          ]}
        />
      }
      main={
        <Container
          maxWidth="796px"
          sx={{
            p: 0,
            paddingInlineStart: "0 !important",
            paddingInlineEnd: "0 !important",
          }}
          m={0}
        >
          {post.post_type !== "video" ? (
            <Img borderRadius={"8px"} src={post.image} alt={post.title} />
          ) : null}

          <Box my="24px">
            <Badge variant="stark_at_home" textTransform="capitalize">
              {post.post_type}
            </Badge>
          </Box>
          <Heading variant="h1" as="h1" color="heading-navy-fg">
            {post.title}
          </Heading>
          <Flex mt="16px">
            <Flex
              width="100%"
              direction="row"
              alignItems="center"
              pb="16px"
              justifyContent="space-between"
            >
              <Flex direction="row" alignItems="center" gap="4px">
                <Icon as={renderPostTypeIcon()} mr="4px" />
                <Text fontSize="sm" color="muted">
                  {moment(post.published_date).format("MMM DD,YYYY")} ·
                </Text>
                <Text fontSize="sm" color="muted">
                  {post.timeToConsume}
                </Text>
              </Flex>
              <Text variant="cardBody" top="1px" pos="relative">
                {`Page last updated ${moment(post?.gitlog?.date).fromNow()}`}
              </Text>
            </Flex>
            <Spacer />
          </Flex>
          <Divider mt="8px" mb="24px" />
          {post.post_type === "video" ? (
            <Flex mb={!post.blocks?.length ? "32px" : 0} direction="column">
              <YoutubePlayer videoId={videoId} />
              {!post.blocks?.length && (
                <Text pt={2} pb={4} lineHeight="32px" variant="body">
                  {post.short_desc}
                </Text>
              )}
            </Flex>
          ) : null}
          <Flex direction="column" gap="32px">
            {post.blocks?.map((block, i) => (
              <Block key={i} block={block} locale={locale} />
            ))}
          </Flex>
          <Spacer height="32px" />
          <Divider />
          <Flex direction="row" gap="8px" py="24px">
            {post.topic?.map((topic, i) => (
              <Box
                key={i}
                sx={{
                  borderRadius: "999px",
                  border: "1px solid",
                  borderColor: "border.card.value",
                  color: "content.accent.value",
                  p: "0 12px",
                }}
              >
                {" "}
                {topics.find((t) => t.id === topic)?.name}{" "}
              </Box>
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
