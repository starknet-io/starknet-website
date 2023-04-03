import { PageLayout } from "@ui/Layout/PageLayout";
import { Tag } from "@ui/Tag/Tag";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { YoutubePlayer } from "@ui/YoutubePlayer/YoutubePlayer";
import moment from "moment";
import { notFound } from "next/navigation";
import { Block } from "src/blocks/Block";
import { getPostBySlug } from "@starknet-io/cms-data/src/posts";
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
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { getCategories } from "@starknet-io/cms-data/src/categories";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { Metadata } from "next";
import { preRenderedLocales } from "@starknet-io/cms-data/src/i18n/config";
import Link from "next/link";

export async function generateMetadata(props: Props): Promise<Metadata> {
  try {
    const post = await getPostBySlug(props.params.slug, props.params.locale);

    const PUBLIC_URL =
      process.env.VERCEL_URL && process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF
        ? process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === "dev"
          ? `https://starknet-website-dev.vercel.app`
          : process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === "production"
          ? `https://www.starknet.io`
          : `https://${process.env.VERCEL_URL}`
        : "";

    return {
      title: post.title,
      description: post.short_desc,
      openGraph: {
        type: "article",
        title: post.title,
        description: post.short_desc,
        images: `${PUBLIC_URL}${post.image}`,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.short_desc,
        images: `${PUBLIC_URL}${post.image}`,
      },
    };
  } catch {
    return {};
  }
}

export async function generateStaticParams() {
  const params = [];

  for (const locale of preRenderedLocales) {
    const files = await fs.readdir(
      path.join(process.cwd(), "_data/_dynamic/posts", locale)
    );

    const categories = await getCategories(locale);

    for (const slug of files) {
      const post = await getPostBySlug(slug.replace(/\.json$/, ""), locale);
      const category = categories.find((c) => c.id === post.category)!;

      params.push({
        locale,
        slug: post.slug,
        category: category.slug,
      });
    }
  }

  return params;
}

export interface Props {
  readonly params: LocaleParams & {
    readonly slug: string;
  };
}

export default async function Page({
  params: { slug, locale },
}: Props): Promise<JSX.Element> {
  try {
    const post = await getPostBySlug(slug, locale);
    const categories = await getCategories(locale);
    const topics = await getTopics(locale);

    const category = categories.find((c) => c.id === post.category)!;

    let videoId = post.post_type === "video" ? post.video?.id : undefined;

    return (
      <PageLayout
        breadcrumbs={
          <Breadcrumb separator="/">
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
              {post.topic.map((topic, i) => (
                <Tag key={i}> {topics.find((t) => t.id === topic)?.name} </Tag>
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
