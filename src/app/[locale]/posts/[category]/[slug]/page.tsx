import { PageLayout } from "@ui/Layout/PageLayout";
import { Tag } from "@ui/Tag/Tag";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { YoutubePlayer } from "@ui/YoutubePlayer/YoutubePlayer";
import moment from "moment";
import { notFound } from "next/navigation";
import { FiBookOpen } from "react-icons/fi";
import { Block } from "src/blocks/Block";
import { getPostBySlug } from "src/data/posts";
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
  Icon,
} from "src/libs/chakra-ui";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly slug: string;
  };
}

export default async function Page({
  params: { slug, locale },
}: Props): Promise<JSX.Element> {
  try {
    const post = await getPostBySlug(slug, locale);

    let videoId;
    if (post.post_type === "video") {
      if (post.video_link) {
        videoId = post.video_link.split("v=")[1];
      }
    }
    console.log(post);

    return (
      <PageLayout
        breadcrumbs={
          <Breadcrumb separator="->">
            <title>{post.title} - Starknet</title>
            <BreadcrumbItem>
              <BreadcrumbLink fontSize="sm" href="#">
                <BreadcrumbLink fontSize="sm" href="# " noOfLines={1}>
                  Blog
                </BreadcrumbLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink fontSize="sm" href="#" noOfLines={1}>
                {post.category}
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
            <Heading variant="h2" as="h2" color="heading-navy-fg">
              {post.title}
            </Heading>
            <Flex mt="16px">
              <HStack>
                <Text fontSize="sm" color="muted">
                  {moment(post.published_date).format("MMM DD,YYYY")} ·
                </Text>
                <Text fontSize="sm" color="muted">
                  {post.time_to_consume}
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
              {post.blocks.map((block, i) => (
                <Block key={i} block={block} locale={locale} />
              ))}
            </Flex>
            <Spacer height="32px" />
            <Divider />
            <Flex direction="row" gap="8px" mt="64px">
              {post.topic.map((item, i) => (
                <Tag key={i}> {item} </Tag>
              ))}
            </Flex>
          </Container>
        }
      />
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}
