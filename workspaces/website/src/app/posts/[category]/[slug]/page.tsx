import { PageLayout } from "@ui/Layout/PageLayout";
import { Tag } from "@ui/Tag/Tag";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { YoutubePlayer } from "@ui/YoutubePlayer/YoutubePlayer";
import moment from "moment";
import { Block } from "src/blocks/Block";
import { Post } from "@starknet-io/cms-data/src/posts";
import { TableOfContents } from "src/app/(components)/TableOfContents";
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
} from "@chakra-ui/react";
// import * as fs from "node:fs/promises";
// import * as path from "node:path";
import { Category } from "@starknet-io/cms-data/src/categories";
import { Topic } from "@starknet-io/cms-data/src/topics";
// import { Metadata } from "next";
// import { preRenderedLocales } from "@starknet-io/cms-data/src/i18n/config";
import Link from "next/link";

// export async function generateMetadata(props: Props): Promise<Metadata> {
//   try {
//     const post = await getPostBySlug(props.params.slug, props.params.locale);

//     const PUBLIC_URL =
//       process.env.VERCEL_URL && process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF
//         ? process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === "dev"
//           ? `https://starknet-website-dev.vercel.app`
//           : process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === "production"
//           ? `https://www.starknet.io`
//           : `https://${process.env.VERCEL_URL}`
//         : "";

//     return {
//       title: post.title,
//       description: post.short_desc,
//       openGraph: {
//         type: "article",
//         title: post.title,
//         description: post.short_desc,
//         images: `${PUBLIC_URL}${post.image}`,
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: post.title,
//         description: post.short_desc,
//         images: `${PUBLIC_URL}${post.image}`,
//       },
//     };
//   } catch {
//     return {};
//   }
// }

// export async function generateStaticParams() {
//   const params = [];

//   for (const locale of preRenderedLocales) {
//     const files = await fs.readdir(
//       path.join(process.cwd(), "_crowdin/data/posts", locale)
//     );

//     const categories = await getCategories(locale);

//     for (const slug of files) {
//       const post = await getPostBySlug(slug.replace(/\.json$/, ""), locale);
//       const category = categories.find((c) => c.id === post.category)!;

//       params.push({
//         locale,
//         slug: post.slug,
//         category: category.slug,
//       });
//     }
//   }

//   return params;
// }

export interface Props {
  readonly params: LocaleParams & {
    readonly slug: string;
  };
  readonly categories: readonly Category[]
  readonly topics: readonly Topic[]
  readonly post: Post
}
interface Block {
  body?: string;
  type?: string;
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

export function Page({ params: { slug, locale }, categories, topics, post }: Props): JSX.Element {
  const category = categories.find((c) => c.id === post.category)!;
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
