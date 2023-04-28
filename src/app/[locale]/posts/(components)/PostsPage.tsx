"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Container,
  Flex,
  HStack,
  Divider,
  Grid,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
import moment from "moment";
import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
import { useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  useRefinementList,
} from "src/libs/react-instantsearch-hooks-web";
import type { Category } from "@starknet-io/cms-data/src/categories";
import { PageLayout } from "@ui/Layout/PageLayout";
import { useRouter } from "next/navigation";
import type { Topic } from "@starknet-io/cms-data/src/topics";
import { useInfiniteHits } from "react-instantsearch-hooks-web";
import { Heading } from "@ui/Typography/Heading";
import Link from "next/link";
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";
import MobileFiltersButton from "../../(components)/MobileFilter/MobileFiltersButton";
import useMobileFiltersDrawer from "../../(components)/MobileFilter/useMobileFiltersDrawer";
import MobileFiltersDrawer from "../../(components)/MobileFilter/MobileFiltersDrawer";

export interface Props extends LocaleProps {
  readonly categories: readonly Category[];
  readonly topics: readonly Topic[];
  readonly params: LocaleParams & {
    readonly category?: string;
  };
  readonly env: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

export function PostsPage({
  env,
  params,
  categories,
  topics,
}: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  // const searchParams = useSearchParams();
  const category = categories.find((c) => c.slug === params.category);

  return (
    <Box pt="18" minH="100vh">
      <InstantSearch
        searchClient={searchClient}
        indexName={`web_posts_${env.ALGOLIA_INDEX}`}
      >
        <Configure
          hitsPerPage={50}
          facetsRefinements={useMemo(
            () => ({
              locale: [params.locale],
              // topic: searchParams.get("topic")?.split(",") ?? [],
              category: category != null ? [category.id] : [],
            }),
            [category, params.locale]
          )}
        />
        <Container maxW="container.xl" mb={4}>
          <CustomCategories categories={categories} params={params} />
        </Container>
        <PostsPageLayout
          categories={categories}
          params={params}
          topics={topics}
        />
      </InstantSearch>
    </Box>
  );
}

const PostsPageLayout = ({
  params,
  categories,
  topics,
}: Pick<Props, "categories" | "params" | "topics">) => {
  const category = categories.find((c) => c.slug === params.category);
  const { items: topicsItems, refine: refineTopics } = useRefinementList({
    attribute: "topic",
    limit: 50,
    sortBy: ["count:desc"],
  });

  const { isOpen, filtersCount, onOpen, onClose } =
    useMobileFiltersDrawer(topicsItems);

  return (
    <PageLayout
      sectionHeaderTitle={category != null ? category.name : "All posts"}
      sectionHeaderBottomContent={
        <MobileFiltersButton
          filtersCount={filtersCount}
          onClick={onOpen}
          style={{
            marginBlock: "16px",
          }}
        />
      }
      breadcrumbs={
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${params.locale}`}
              fontSize="sm"
              noOfLines={1}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${params.locale}/community`}
              fontSize="sm"
              noOfLines={1}
            >
              Community
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage fontSize="sm">
            <BreadcrumbLink fontSize="sm">Blog</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      }
      leftAside={
        <Box minH="xs" display={{ base: "none", lg: "block" }}>
          <Heading mt="-24px" color="heading-navy-fg" variant="h4" mb="1rem">
            Topics
          </Heading>
          <CustomTopics
            topics={topics}
            items={topicsItems}
            refineTopics={refineTopics}
          />
        </Box>
      }
      main={
        <Box>
          <CustomHits categories={categories} />
          <MobileFiltersDrawer isOpen={isOpen} onClose={onClose}>
            <CustomTopics
              topics={topics}
              items={topicsItems}
              refineTopics={refineTopics}
            />
          </MobileFiltersDrawer>
        </Box>
      }
    />
  );
};

type CustomTopicsProps = {
  topics: readonly Topic[];
  items: RefinementListProps["items"];
  refineTopics: (value: string) => void;
};
function CustomTopics({ topics, items, refineTopics }: CustomTopicsProps) {
  // const router = useRouter();
  // const pathname = usePathname()!;
  // const searchParams = useSearchParams();
  // const topicSet = useMemo(() => {
  //   return new Set(searchParams.get("topic")?.split(",") ?? []);
  // }, [searchParams]);

  const topicsDict = useMemo(() => {
    return topics.reduce((acc, topic) => {
      acc[topic.id] = topic;
      return acc;
    }, {} as Record<string, Topic>);
  }, [topics]);

  const validTopics = useMemo(() => {
    return items.filter((topic) => topicsDict[topic.value] != null);
  }, [topicsDict, items]);

  return (
    <Box display="flex" flexWrap="wrap" gap="8px" columnGap="4px" width="100%">
      {validTopics.map((topic, i) => (
        <Button
          size="sm"
          px="8px"
          // variant={topicSet.has(topic.value) ? "filterActive" : "filter"}
          variant={topic.isRefined ? "filterActive" : "filter"}
          onClick={() => {
            refineTopics(topic.value);

            // const params = new URLSearchParams(searchParams);

            // if (topicSet.has(topic.value)) {
            //   topicSet.delete(topic.value);
            // } else {
            //   topicSet.add(topic.value);
            // }

            // if (topicSet.size === 0) {
            //   router.replace(pathname);
            // } else {
            //   params.set("topic", Array.from(topicSet.values()).join(","));
            //   router.replace(`${pathname}?${params.toString()}`);
            // }
          }}
          key={i}
        >
          {topicsDict[topic.value].name}
        </Button>
      ))}
    </Box>
  );
}

function CustomCategories({
  categories,
  params,
}: Pick<Props, "categories" | "params">) {
  const router = useRouter();

  return (
    <Flex
      as="ul"
      sx={{ overflowX: "auto" }}
      gap="24px"
      borderBottomWidth="1px"
      borderColor="tabs-main-br"
      width="100%"
    >
      <Box>
        <Button
          variant="category"
          as="a"
          isActive={params.category == null}
          onClick={() => {
            router.replace(`/${params.locale}/posts`);
          }}
        >
          All posts
        </Button>
      </Box>
      {categories.map((category) => (
        <Box key={category.slug}>
          <Button
            variant="category"
            as="a"
            isActive={category.slug === params.category}
            onClick={() => {
              if (category.slug === params.category) return;

              router.replace(`/${params.locale}/posts/${category.slug}`);
            }}
          >
            <> {category.name}</>
          </Button>
        </Box>
      ))}
    </Flex>
  );
}

type VideoData = {
  etag: string;
  id: string;
  kind: string;
  snippet: object;
  contentDetails: {
    duration: string;
  }
}

type Video = {
  data: VideoData;
  url: string;
  id: string;
}

type Hit = {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly image: string;
  readonly category: string;
  readonly topic: string;
  readonly short_desc: string;
  readonly locale: string;
  readonly filepath: string;
  readonly post_type: string;
  readonly time_to_consume: string;
  readonly published_date: string;
  readonly blocks: Array<Block>;
  readonly video: Video;
};

interface Block {
  body?: string;
  type?: string;
}

function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) {
    return '';
  }
  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const totalMinutes = hours * 60 + minutes; // pretvaranje u minute
  const formattedMinutes = totalMinutes > 0 ? `${totalMinutes}min` : ""; // samo minute
  return formattedMinutes.trim();
}


function concatenateBodies(blocks: readonly Block[]): string {
  let fullText = "";
  blocks.forEach((block) => {
    if (block.body) {
      fullText += block.body;
    }
  });
  return fullText;
}

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const wordsPerImage = 12;
  const words = text.trim().split(/\s+/).length;
  const imageCount = (text.match(/!\[\]/g) || []).length;
  const wordsWithImages = words + imageCount * wordsPerImage;
  const decimalMinutes = wordsWithImages / wordsPerMinute;

  const minutes = Math.ceil(decimalMinutes); // zaokruživanje na višu minutu
  return `${minutes}min`;
}

function CustomHits({ categories }: Pick<Props, "categories">) {
  const { hits, showMore, isLastPage } = useInfiniteHits<Hit>();

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(280px, 1fr))",
          lg: "repeat(auto-fit, minmax(280px, 1fr))",
          xl: "repeat(auto-fit, minmax(280px, 299px))",
        }}
        templateRows="1fr"
        columnGap="24px"
        rowGap="48px"
      >
        {hits.map((hit, i) => {
          // todo: add a featured image once we have image templates in place
          const fullText = concatenateBodies(hit.blocks);
          let timeToRead;
          if (hit.post_type === "video") {
            timeToRead = `${formatDuration(hit.video?.data?.contentDetails?.duration || '')} watch`;
          } else {
            timeToRead = `${calculateReadingTime(fullText)} read`;
          }
          const date = moment(hit.published_date).format("MMM DD, YYYY");
          const category = categories.find((c) => c.id === hit.category)!;

          return (
            <ArticleCard.Root
              href={`/${hit.locale}/posts/${category.slug}/${hit.slug}`}
              key={i}
            >
              <ArticleCard.Image url={hit.image} />

              <ArticleCard.Body>
                <ArticleCard.Category category={category} />
                <ArticleCard.Content
                  title={hit.title}
                  excerpt={hit.short_desc}
                />
              </ArticleCard.Body>
              <ArticleCard.Footer
                postType={hit.post_type}
                publishedAt={date}
                timeToConsume={timeToRead}
              />
            </ArticleCard.Root>
          );
        })}
      </Grid>
      {!isLastPage && (
        <HStack mt="24">
          <Divider />
          <Button
            onClick={() => showMore()}
            flexShrink={0}
            variant="outlineLight"
          >
            View More
          </Button>
          <Divider />
        </HStack>
      )}
    </>
  );
}
