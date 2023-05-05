"use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Event } from "@starknet-io/cms-data/src/events";
import { Button } from "@ui/Button";
import { ListCard } from "@ui/Card/ListCard";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { getUnixTime, startOfDay } from "date-fns";
import type { BaseHit } from "instantsearch.js";
import moment from "moment";
import Link from "next/link";
import { useMemo } from "react";
import { useRefinementList } from "react-instantsearch-hooks";
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  Configure,
  InstantSearch,
  useInfiniteHits,
} from "src/libs/react-instantsearch-hooks-web";
import { titleCase } from "src/utils/utils";
import {
  eventsLocationsLabels,
  eventsTypesLabels,
} from "workspaces/cms-config/src/collections/events";
import MobileFiltersButton from "../../(components)/MobileFilter/MobileFiltersButton";
import MobileFiltersDrawer from "../../(components)/MobileFilter/MobileFiltersDrawer";
import useMobileFiltersDrawer from "../../(components)/MobileFilter/useMobileFiltersDrawer";

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
  readonly seo: {
    title: string;
    subtitle: string;
  };
}

const getEventFilter = (mode: "UPCOMING_EVENTS" | "PAST_EVENTS") => {
  if (mode === "UPCOMING_EVENTS") {
    return `start_date_ts > ${getUnixTime(
      startOfDay(new Date())
    )} OR end_date_ts > ${getUnixTime(startOfDay(new Date()))}`;
  }
  return `NOT show_in_past_events:false AND start_date_ts < ${getUnixTime(
    startOfDay(new Date())
  )} AND end_date_ts < ${getUnixTime(startOfDay(new Date()))}`;
};

export function EventsPage({
  params,
  env,
  mode,
  seo,
}: Props): JSX.Element | null {
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

        <EventsPageLayout params={params} mode={mode} seo={seo} />
      </InstantSearch>
    </Box>
  );
}

const EventsPageLayout = ({
  params,
  mode,
  seo,
}: Pick<Props, "params" | "mode" | "seo">) => {
  const { items: locations, refine: refineLocation } = useRefinementList({
    attribute: "location",
    sortBy: ["name:asc"],
  });

  const { items: types, refine: refineTypes } = useRefinementList({
    attribute: "type",
    sortBy: ["name:asc"],
  });

  const { isOpen, filtersCount, onOpen, onClose } = useMobileFiltersDrawer([
    ...locations,
    ...types,
  ]);

  return (
    <PageLayout
      sectionHeaderTitle={seo.title}
      sectionHeaderDescription={seo.subtitle}
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

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontSize="sm" noOfLines={1}>
              Events
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      }
      leftAside={
        <Box minH="xs" display={{ base: "none", lg: "block" }}>
          <CustomLocation
            refineLocation={refineLocation}
            locations={locations}
          />
          <CustomType types={types} refineTypes={refineTypes} />
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
          <MobileFiltersButton
            filtersCount={filtersCount}
            onClick={onOpen}
            style={{ marginTop: "24px" }}
          />
          <MobileFiltersDrawer isOpen={isOpen} onClose={onClose}>
            <CustomLocation
              locations={locations}
              refineLocation={refineLocation}
            />
            <CustomType types={types} refineTypes={refineTypes} />
          </MobileFiltersDrawer>
          <CustomHits isPastEvent={mode === "PAST_EVENTS"} />
        </Box>
      }
    />
  );
};

type CustomLocationProps = {
  locations: RefinementListProps["items"];
  refineLocation: (value: string) => void;
};

function CustomLocation({ locations, refineLocation }: CustomLocationProps) {
  return (
    <Box>
      <Heading variant="h6" mb={4}>
        Location
      </Heading>
      <Flex direction="column" gap="8px">
        {locations.map((item, i) => (
          <Button
            justifyContent="flex-start"
            size="sm"
            variant={item.isRefined ? "filterActive" : "filter"}
            onClick={() => refineLocation(item.value)}
            key={i}
            style={{ order: item.value === "online_remote" ? -1 : 0 }}
          >
            {eventsLocationsLabels[item.value] || titleCase(item.label)}
          </Button>
        ))}
      </Flex>
    </Box>
  );
}

function CustomType({
  types,
  refineTypes,
}: {
  types: RefinementListProps["items"];
  refineTypes: (value: string) => void;
}) {
  return (
    <Box mt={8}>
      <Heading variant="h6" mb={4}>
        Type
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {types.map((item, i) => (
          <Button
            justifyContent="flex-start"
            size="sm"
            variant={item.isRefined ? "filterActive" : "filter"}
            onClick={() => refineTypes(item.value)}
            key={i}
          >
            {eventsTypesLabels[item.value] || titleCase(item.label)}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

function CustomHits({ isPastEvent }: { isPastEvent: boolean }) {
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
                    recap={isPastEvent ? hit.recap : undefined}
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
