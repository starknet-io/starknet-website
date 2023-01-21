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
  Flex,
  Container,
  Spacer,
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
import { Text } from "@ui/Typography/Text";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";

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

export function JobsPage({ params, env }: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  return (
    <Box>
      <InstantSearch searchClient={searchClient} indexName="web_jobs_dev">
        <Configure
          hitsPerPage={40}
          facetsRefinements={{ locale: [params.locale] }}
        />

        <PageLayout
          sectionHeaderTitle="Jobs"
          sectionHeaderDescription="Find a job at Mozilla"
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
          leftAside={<Box minH="xs">Filters</Box>}
          main={
            <Box>
              <Heading variant="h3" as="h3" pt={0}>
                Hello there
              </Heading>
              <Text variant="baseRegular" fontSize="sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                delectus quis illo nesciunt doloribus molestias quas
                reprehenderit quo accusamus odit natus consequuntur, quasi
                aspernatur veritatis dolorum distinctio aut repellendus cumque!
              </Text>
            </Box>
          }
        />
      </InstantSearch>
    </Box>
  );
}

function CustomTopics() {
  const { items, refine } = useRefinementList({
    attribute: "topic",
    sortBy: ["name:asc"],
  });
  console.log("topics", items);
  return (
    <Box bg="red">
      <Wrap>
        Hello
        {/* {items.map((item, i) => (
        <Button
          size="sm"
          variant="outline"
          onClick={() => refine(item.value)}
          key={i}
        >
          {item.label}
        </Button>
      ))} */}
      </Wrap>
    </Box>
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
        Hello
        {/* {hits.map((hit, i) => (
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
        ))} */}
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
