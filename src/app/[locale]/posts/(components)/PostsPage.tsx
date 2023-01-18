"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
  Breadcrumb,
  Box,
  Stack,
  Button,
  Wrap,
  HStack,
  Divider,
} from "@chakra-ui/react";
import * as SubNav from "@ui/SubNav/SubNav";
import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
import { use, useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
} from "src/libs/react-instantsearch-hooks-web";
import {
  useClearRefinements,
  useHits,
  useRefinementList,
} from "react-instantsearch-hooks";
import { PageContentContainer } from "../../(components)/PageContentContainer";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
import { getCategories } from "src/data/categories";

export interface AutoProps {
  readonly params: {
    readonly locale: string;
  };
}

export interface Props extends AutoProps {
  readonly env: {
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

export function PostsPage({ params, env }: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  return (
    <PageContentContainer pt="18">
      <InstantSearch searchClient={searchClient} indexName="web_posts_dev">
        <Configure
          hitsPerPage={40}
          facetsRefinements={{ locale: [params.locale] }}
        />

        <Box>
          <CustomCategories />
        </Box>

        <Box mt={6}>
          <Breadcrumb separator="->">
            <BreadcrumbItem>
              <BreadcrumbLink fontSize="sm" href="#">
                Parent
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink fontSize="sm" href="#">
                Blog
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box>
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "12", lg: "16" }}
            flex="1"
            pt={8}
          >
            <Box width={{ sm: "full", md: "2xl" }}>
              <CustomTopics />
            </Box>
            <Box>
              <SectionHeader
                title={"Blog"}
                description={
                  "The latest articles, podcasts and videos on all things StarkNet."
                }
              />

              <CustomHits />
            </Box>
          </Stack>
        </Box>
      </InstantSearch>
    </PageContentContainer>
  );
}

function CustomTopics() {
  const { items, refine } = useRefinementList({
    attribute: "topic",
    sortBy: ["name:asc"],
  });
  console.log("topics", items);
  return (
    <Wrap>
      {items.map((item, i) => (
        <Button
          size="sm"
          variant="outline"
          onClick={() => refine(item.value)}
          key={i}
        >
          {item.label}
        </Button>
      ))}
    </Wrap>
  );
}

function CustomCategories() {
  const { items, refine } = useRefinementList({
    attribute: "category",
    sortBy: ["name:asc"],
  });
  const { refine: clearRefine } = useClearRefinements();

  return (
    <SubNav.Root>
      <SubNav.Item onClick={() => clearRefine()}>All posts</SubNav.Item>
      {items.map((item, i) => (
        <SubNav.Item onClick={() => refine(item.value)} key={item.value}>
          <> {item.label}</>
        </SubNav.Item>
      ))}
    </SubNav.Root>
  );
}

type HitProps = {
  readonly hits: readonly {
    readonly title: string;
    readonly short_desc: string;
    readonly image: string;
    readonly category: string;
  }[];
};
function CustomHits() {
  const { hits }: HitProps = useHits();

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 3 }}
        rowGap={{ base: "8", md: "12" }}
        columnGap="8"
        pt={2}
      >
        {hits.map((hit, i) => (
          <ArticleCard.Root href="$" key={i}>
            <ArticleCard.Image url={`/static/${hit.image}`} />

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
