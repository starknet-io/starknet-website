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
} from "@chakra-ui/react";
import * as SubNav from "@ui/SubNav/SubNav";
import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
import { useMemo } from "react";
import algoliasearch, { SearchClient } from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
} from "src/libs/react-instantsearch-hooks-web";
import {
  useClearRefinements,
  useHierarchicalMenu,
  useHits,
  useRefinementList,
} from "react-instantsearch-hooks";
import { PageContentContainer } from "../../(components)/PageContentContainer";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
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
    <Box pt="18">
      <InstantSearch searchClient={searchClient} indexName="web_posts_dev">
        <Configure
          hitsPerPage={40}
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
    <Wrap>
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
    <SubNav.Root>
      <SubNav.Item
        isActive={params.category == null}
        onClick={() => {
          router.replace(`/${params.locale}/posts`);
        }}
      >
        All posts
      </SubNav.Item>
      {categories.map((category) => (
        <SubNav.Item
          isActive={category.id === params.category}
          onClick={() => {
            if (category.id === params.category) return;

            router.replace(`/${params.locale}/posts/${category.id}`);
          }}
          key={category.id}
        >
          <> {category.name}</>
        </SubNav.Item>
      ))}
    </SubNav.Root>
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
  }[];
};
function CustomHits() {
  const { hits }: HitProps = useHits();
  console.log("hits", hits);
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
              <ArticleCard.Category category={hit?.category} />
              <ArticleCard.Content title={hit.title} excerpt={hit.short_desc} />
            </ArticleCard.Body>
            <ArticleCard.Footer
              postType="audio"
              publishedAt="Nov 24, 2022"
              duration="1hr 2mins"
            />
          </ArticleCard.Root>
        ))}
      </SimpleGrid>
      <HStack mt="24">
        <Divider />
        <Button flexShrink={0} variant="secondary">
          View More
        </Button>
        <Divider />
      </HStack>
    </>
  );
}
