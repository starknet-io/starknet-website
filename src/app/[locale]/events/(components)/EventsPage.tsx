"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Flex,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
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
import { Event } from "@starknet-io/cms-data/src/events";
import type { BaseHit } from "instantsearch.js";
import Link from "next/link";
import { getUnixTime, startOfDay } from "date-fns";

export interface AutoProps {
  readonly params: {
    readonly locale: string;
  };
}

export interface Props extends AutoProps {
  readonly env: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
  readonly mode: "UPCOMING_EVENTS" | "PAST_EVENTS";
}

const getEventFilter = (mode: "UPCOMING_EVENTS" | "PAST_EVENTS") => {
  if (mode === "UPCOMING_EVENTS") {
    return `start_date_ts > ${getUnixTime(
      startOfDay(new Date())
    )} OR end_date_ts > ${getUnixTime(startOfDay(new Date()))}`;
  }
  return `start_date_ts < ${getUnixTime(
    startOfDay(new Date())
  )} AND end_date_ts < ${getUnixTime(startOfDay(new Date()))}`;
};

export function EventsPage({ params, env, mode }: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  return (
    <Box>
      <InstantSearch
        searchClient={searchClient}
        indexName={
          mode === "UPCOMING_EVENTS"
            ? `web_events_${env.ALGOLIA_INDEX}_asc`
            : `web_events_${env.ALGOLIA_INDEX}_desc`
        }
      >
        <Configure
          hitsPerPage={40}
          facetsRefinements={{ locale: [params.locale] }}
          filters={getEventFilter(mode)}
        />

        <PageLayout
          sectionHeaderTitle="Events"
          sectionHeaderDescription="Find Starknet events, online or around the world."
          breadcrumbs={
            <Breadcrumb separator="/">
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

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontSize="sm" noOfLines={1}>
                  Events
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          }
          leftAside={
            <Box minH="xs" display={{ base: "none", lg: "block" }}>
              <CustomLocation />
              <CustomType />
            </Box>
          }
          main={
            <Box>
              <Flex
                as="ul"
                sx={{ overflowX: "auto" }}
                gap="24px"
                borderBottomWidth="1px"
                borderColor="tabs-main-br"
                width="100%"
                mb={4}
              >
                <Box>
                  <Button
                    variant="category"
                    as={Link}
                    isActive={mode === "UPCOMING_EVENTS"}
                    href={`/${params.locale}/events`}
                  >
                    Upcoming events
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="category"
                    as={Link}
                    isActive={mode === "PAST_EVENTS"}
                    href={`/${params.locale}/events/past`}
                  >
                    Past events
                  </Button>
                </Box>
              </Flex>

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
      <Heading variant="h6" mb={4}>
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
      <Heading variant="h6" mb={4}>
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

function CustomHits() {
  const { hits, showMore, isLastPage } = useInfiniteHits<Event & BaseHit>();

  const hitsByMonth = useMemo(() => {
    let hitsByMonthDict: Record<string, typeof hits> = {};

    hits.forEach((hit) => {
      let startDate = new Date(hit?.start_date);
      let month = startDate.getMonth();
      let year = startDate.getFullYear();
      let key = `${year}-${month + 1}`;
      if (!hitsByMonthDict[key]) {
        hitsByMonthDict[key] = [];
      }
      hitsByMonthDict[key].push(hit);
    });
    return hitsByMonthDict;
  }, [hits]);

  return (
    <>
      {Object.keys(hitsByMonth).map((key) => {
        const monthHits = hitsByMonth[key];

        return (
          <Box key={key}>
            <Heading
              variant="h6"
              fontWeight={700}
              fontSize="lg"
              lineHeight={1.5}
              mt="2.5rem"
              mb="1rem"
            >
              {moment(key, "YYYY-MM").format("MMMM YYYY")}
            </Heading>
            <Flex gap={4} direction="column" flex={1}>
              {monthHits.map((hit) => {
                let startDate = new Date(hit?.start_date);
                let endDate = new Date(hit?.end_date ?? "");
                let hasSameDay = startDate.getDate() === endDate.getDate();
                let hasSameMonth = startDate.getMonth() === endDate.getMonth();
                let hasSameYear =
                  startDate.getFullYear() === endDate.getFullYear();
                return (
                  <ListCard
                    variant="event"
                    href={hit.url}
                    key={hit?.name}
                    startDateTime={
                      hit?.end_date
                        ? `${moment(hit?.start_date).format(
                            hasSameDay
                              ? "DD MMM, YYYY"
                              : hasSameMonth
                              ? "DD"
                              : hasSameYear
                              ? "DD MMM"
                              : "DD MMM, YYYY"
                          )}${!hasSameDay ? " - " : ""}${
                            !hasSameDay
                              ? moment(hit?.end_date).format("DD MMM, YYYY")
                              : ""
                          }`
                        : moment(hit?.start_date).format("DD MMM, YYYY")
                    }
                    image={hit.image}
                    title={hit.name}
                    description={hit.description}
                    type={[hit.type]}
                    location={hit.location}
                    city={hit.city}
                    country={hit.country}
                  />
                );
              })}
            </Flex>
          </Box>
        );
      })}
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
