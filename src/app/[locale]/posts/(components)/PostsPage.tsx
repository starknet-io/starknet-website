"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Button,
  Wrap,
  Container,
  Flex,
  HStack,
  Divider,
  Grid,
} from "@chakra-ui/react";
import moment from "moment";
import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
import { useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  useRefinementList,
} from "src/libs/react-instantsearch-hooks-web";
import type { Category } from "src/data/categories";
import { PageLayout } from "@ui/Layout/PageLayout";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Topic } from "src/data/topics";
import { useInfiniteHits } from "react-instantsearch-hooks-web";

export interface Props extends LocaleProps {
  readonly categories: readonly Category[];
  readonly topics: readonly Topic[];
  readonly params: LocaleParams & {
    readonly category?: string;
  };
  readonly env: {
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

  const searchParams = useSearchParams();
  const category = categories.find((c) => c.slug === params.category);

  return (
    <Box pt="18" minH="100vh">
      <InstantSearch searchClient={searchClient} indexName="web_posts_dev">
        <Configure
          hitsPerPage={50}
          facetsRefinements={{
            locale: [params.locale],
            topic: searchParams.get("topic")?.split(",") ?? [],
            category: category != null ? [category.id] : [],
          }}
        />
        <Container maxW="container.xl" mb={4}>
          <CustomCategories categories={categories} params={params} />
        </Container>
        <PageLayout
          sectionHeaderTitle="Blog"
          sectionHeaderDescription="The latest articles, podcasts and videos on all things StarkNet."
          breadcrumbs={
            <Breadcrumb separator="/">
              <BreadcrumbItem>
                <BreadcrumbLink fontSize="sm" href="#">
                  Community
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontSize="sm" href="#">
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          }
          leftAside={
            <Box minH="xs" display={{ base: "none", lg: "block" }}>
              <CustomTopics topics={topics} />
            </Box>
          }
          main={
            <Box>
              <CustomHits categories={categories} />
            </Box>
          }
        />
      </InstantSearch>
    </Box>
  );
}

function CustomTopics({ topics }: Pick<Props, "topics">) {
  const router = useRouter();
  const pathname = usePathname()!;
  const searchParams = useSearchParams();
  const topicSet = useMemo(() => {
    return new Set(searchParams.get("topic")?.split(",") ?? []);
  }, [searchParams]);

  const { items } = useRefinementList({
    attribute: "topic",
    sortBy: ["name:asc"],
  });

  return (
    <Wrap flexWrap="wrap">
      {items.map((topic, i) => (
        <Button
          size="sm"
          variant={topicSet.has(topic.value) ? "filterActive" : "filter"}
          onClick={() => {
            const params = new URLSearchParams(searchParams);

            if (topicSet.has(topic.value)) {
              topicSet.delete(topic.value);
            } else {
              topicSet.add(topic.value);
            }

            if (topicSet.size === 0) {
              router.replace(pathname);
            } else {
              params.set("topic", Array.from(topicSet.values()).join(","));
              router.replace(`${pathname}?${params.toString()}`);
            }
          }}
          key={i}
        >
          {topics.find((a) => a.id === topic.value)?.name}
        </Button>
      ))}
    </Wrap>
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
      sx={{ overflowX: "scroll" }}
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
};

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
                timeToConsume={hit?.time_to_consume}
              />
            </ArticleCard.Root>
          );
        })}
      </Grid>
      {!isLastPage && (
        <HStack mt="24">
          <Divider />
          <Button onClick={() => showMore()} flexShrink={0} variant="secondary">
            View More
          </Button>
          <Divider />
        </HStack>
      )}
    </>
  );
}
