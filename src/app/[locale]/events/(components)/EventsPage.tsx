"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Button,
  Flex,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  useInfiniteHits,
} from "src/libs/react-instantsearch-hooks-web";
import { useRefinementList } from "react-instantsearch-hooks";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { ListCard } from "@ui/ListCards/ListCard";
import { titleCase } from "src/utils/utils";
import moment from "moment";
import { Event } from "src/data/events";
import type { BaseHit } from "instantsearch.js";

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

export function EventsPage({ params, env }: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  return (
    <Box>
      <InstantSearch searchClient={searchClient} indexName="web_events_dev">
        <Configure
          hitsPerPage={40}
          facetsRefinements={{ locale: [params.locale] }}
        />

        <PageLayout
          sectionHeaderTitle="Events"
          sectionHeaderDescription="Find StarkNet events taking place all over the world and online."
          breadcrumbs={
            <Breadcrumb separator="->">
              <BreadcrumbItem>
                <BreadcrumbLink fontSize="sm" href="#">
                  Community
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontSize="sm" href="#">
                  Events
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          }
          leftAside={
            <Box minH="xs" display={{ base: "none", lg: "block" }}>
              <CustomLocation />
              <CustomType />
              <CustomTags />
            </Box>
          }
          main={
            <Box>
              <CustomHits />
            </Box>
          }
        />
      </InstantSearch>
    </Box>
  );
}

function CustomLocation() {
  const { items, refine } = useRefinementList({
    attribute: "location",
    sortBy: ["name:asc"],
  });

  return (
    <Box>
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Location
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => (
          <Button
            justifyContent="flex-start"
            size="sm"
            variant={item.isRefined ? "filterActive" : "filter"}
            onClick={() => refine(item.value)}
            key={i}
          >
            {titleCase(item.label)}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

function CustomType() {
  const { items, refine } = useRefinementList({
    attribute: "type",
    sortBy: ["name:asc"],
  });

  return (
    <Box mt={8}>
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Type
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => (
          <Button
            justifyContent="flex-start"
            size="sm"
            variant={item.isRefined ? "filterActive" : "filter"}
            onClick={() => refine(item.value)}
            key={i}
          >
            {titleCase(item.label)}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

function CustomTags() {
  const { items, refine } = useRefinementList({
    attribute: "tags",
    sortBy: ["name:asc"],
  });

  return (
    <Box mt={8} maxHeight="300px" overflowY="auto">
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Tags
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => {
          let label = titleCase(item.label);

          return (
            <Button
              size="sm"
              variant={item.isRefined ? "filterActive" : "filter"}
              onClick={() => refine(item.value)}
              key={i}
              justifyContent="flex-start"
            >
              {label}
            </Button>
          );
        })}
      </VStack>
    </Box>
  );
}

function CustomHits() {
  const { hits, showMore, isLastPage } = useInfiniteHits<Event & BaseHit>();

  return (
    <>
      <Flex gap={4} direction="column" flex={1}>
        {hits.map((hit) => {
          return (
            <ListCard
              variant="event"
              href={hit.url}
              key={hit?.name}
              startDateTime={
                hit?.end_date
                  ? `${moment(hit?.start_date).format("MMM DD")} - ${moment(
                      hit?.end_date
                    ).format("MMM DD, YYYY")}`
                  : moment(hit?.start_date).format("MMM DD, YYYY")
              }
              image={hit.image}
              title={hit.name}
              description={hit.description}
              type={hit.tags}
            />
          );
        })}
      </Flex>
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
