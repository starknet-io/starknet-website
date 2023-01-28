"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
  Breadcrumb,
  Box,
  Button,
  Wrap,
  HStack,
  Divider,
  Container,
  Flex,
} from "@chakra-ui/react";

import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
import { useMemo } from "react";
import algoliasearch, { SearchClient } from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  useHits,
  useRefinementList,
  useInfiniteHits,
} from "src/libs/react-instantsearch-hooks-web";

import type { Category } from "src/data/categories";
import { PageLayout } from "@ui/Layout/PageLayout";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Topic } from "src/data/topics";

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

  return (
    <Box pt="18" minH="100vh">
      <InstantSearch searchClient={searchClient} indexName="web_posts_dev">
        <Configure
          hitsPerPage={50}
          facetsRefinements={{
            locale: [params.locale],
            topic: searchParams.get("topic")?.split(",") ?? [],
            category: params.category != null ? [params.category] : [],
          }}
        />
        <Container maxW="container.xl" mb={4}>
          <CustomCategories categories={categories} params={params} />
        </Container>
        <PageLayout
          sectionHeaderTitle="Blog"
          sectionHeaderDescription="The latest articles, podcasts and videos on all things StarkNet."
          breadcrumbs={
            <Breadcrumb separator="->">
              <BreadcrumbItem>
                <BreadcrumbLink fontSize="sm" href="#">
                  Parent
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontSize="sm" href="#">
                  Jobs
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          }
          pageLastUpdated="Page last updated 21 Nov 2023"
          leftAside={
            <Box minH="xs" display={{ base: "none", lg: "block" }}>
              <CustomTopics topics={topics} />
            </Box>
          }
          main={<CustomHits />}
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
  console.log(params);
  return (
    <Flex as="ul" gap="24px" borderBottomWidth="1px" borderColor="tabs-main-br">
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
      {categories.map((category) => (
        <Button
          variant="category"
          as="a"
          isActive={category.id === params.category}
          onClick={() => {
            if (category.id === params.category) return;

            router.replace(`/${params.locale}/posts/${category.id}`);
          }}
          key={category.id}
        >
          <> {category.name}</>
        </Button>
      ))}
    </Flex>
  );
}

type HitProps = {
  readonly hits: readonly {
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
  }[];
};

const categories = {
  "community-calls": {
    label: "Community calls",
    id: "community_calls",
  },
  "community-and-events": {
    label: "Community and events",
    id: "community_and_events",
  },
  "stark-struck": {
    label: "Stark Struck",
    id: "stark_struct",
  },
  engineering: {
    label: "Engineering",
    id: "engineering",
  },
  governance: {
    label: "Governance",
    id: "governance",
  },
  "stark-math": {
    label: "Stark Math",
    id: "stark_math",
  },
};
function CustomHits() {
  const { hits }: HitProps = useHits();
  const { showMore } = useInfiniteHits();
  console.log(hits);
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 3 }}
        rowGap={{ base: "8", md: "12" }}
        columnGap="8"
        pt={2}
      >
        {hits.map((hit, i) => (
          <ArticleCard.Root
            href={`/${hit.locale}/posts/${hit.category}/${hit.slug}`}
            key={i}
          >
            <ArticleCard.Image url={hit.image} />

            <ArticleCard.Body>
              {/* @ts-expect-error TODO: fix this */}

              <ArticleCard.Category category={categories[`${hit.category}`]} />
              <ArticleCard.Content title={hit.title} excerpt={hit.short_desc} />
            </ArticleCard.Body>
            <ArticleCard.Footer
              postType={hit.post_type}
              publishedAt={hit.published_date}
              timeToConsume={hit?.time_to_consume}
            />
          </ArticleCard.Root>
        ))}
      </SimpleGrid>

      {/* <HStack mt="24">
        <Divider />
        <Button onClick={() => showMore()} flexShrink={0} variant="secondary">
          View More
        </Button>
        <Divider />
      </HStack> */}
    </>
  );
}
