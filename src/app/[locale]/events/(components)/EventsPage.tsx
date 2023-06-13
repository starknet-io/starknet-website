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
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { getUnixTime, startOfDay } from "date-fns";
import type { BaseHit } from "instantsearch.js";
import moment from "moment";
import Link from "next/link";
import { useMemo, useState } from "react";
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
import EventCard from "./EventCard";

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

  const { items: months, refine: refineMonths } = useRefinementList({
    attribute: "month",
    sortBy: ["name:asc"],
  });

  const {
    isOpen,
    setFilterOpen,
    onOpen,
    onClose,
    handleFilterClick,
    filtersCounts,
    selectedFilters,
    setSelectedFilters } = useMobileFiltersDrawer([
    ...locations,
    ...types,
  ]);

  const mapSelectedFilters = () => {
    let result: { location?: string[], type?: string[], month?: string[] } = {};

    let locationsFilteredValues = locations
        .filter(item => item.isRefined)
        .map(item => item.value);

    if (locationsFilteredValues.length > 0) {
        result["location"] = locationsFilteredValues;
    }

    let typesFilteredValues = types
        .filter(item => item.isRefined)
        .map(item => item.value);

    if (typesFilteredValues.length > 0) {
        result["type"] = typesFilteredValues;
    }

    let monthsFilteredValues = months
        .filter(item => item.isRefined)
        .map(item => item.value);

    if (monthsFilteredValues.length > 0) {
        result["month"] = monthsFilteredValues;
    }

    return result;
  }

  const handleModalClose = () => {
    onClose();
    setSelectedFilters(mapSelectedFilters());
  }

  const handleApplyChanges = () => {
    if (selectedFilters["location"]?.length) {
      selectedFilters["location"].map((location) => {
        refineLocation(location);
      });
    } else {
      locations.map((location) => {
        location.isRefined && refineLocation(location.value);
      });
    }

    if (selectedFilters["type"]?.length) {
      selectedFilters["type"].map(type => {
        refineTypes(type);
      })
    } else {
      types.map((type) => {
        type.isRefined && refineTypes(type.value);
      });
    }

    if (selectedFilters["month"]?.length) {
      selectedFilters["month"].map(month => {
        refineMonths(month);
      })
    } else {
      months.map((month) => {
        month.isRefined && refineMonths(month.value);
      });
    }
  }

  const handleApplyFilters = () => {
    handleApplyChanges();
    setFilterOpen(false);
  };

  const checkIsRefined = (arr: any) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hasOwnProperty('isRefined') && arr[i].isRefined === true) {
        return true;
      }
    }
    return false;
  }
  

  const handleClearFilters = () => {
    const locationsRefined = checkIsRefined(locations);
    const typesRefined = checkIsRefined(types);
    const monthsRefined = checkIsRefined(months);
    const anyFilterApplied = locationsRefined || typesRefined || monthsRefined;
    anyFilterApplied && handleApplyChanges();
    setSelectedFilters({});
  };
console.log('months ', months)
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
            selectedFilters={selectedFilters}
          />
          <CustomType types={types} refineTypes={refineTypes} selectedFilters={selectedFilters} />
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
            filtersCount={filtersCounts}
            onClick={onOpen}
            style={{ marginTop: "24px" }}
          />
          <MobileFiltersDrawer isOpen={isOpen} onClose={handleModalClose}>
            <CustomLocation
              locations={locations}
              refineLocation={handleFilterClick}
              selectedFilters={selectedFilters}
              isDesktop={false}
            />
            <CustomType types={types} refineTypes={handleFilterClick} selectedFilters={selectedFilters} isDesktop={false} />
            <CustomMonth
              refineMonths={handleFilterClick}
              months={months}
              selectedFilters={selectedFilters}
              isDesktop={false}
            />
            <Button variant="solid" fullWidth mb={2} mt={6} onClick={handleApplyFilters}>Apply filters</Button>
            <Button variant="outline" onClick={handleClearFilters} fullWidth>Clear all</Button>
          </MobileFiltersDrawer>
          <CustomHits isPastEvent={mode === "PAST_EVENTS"} />
        </Box>
      }
    />
  );
};

type CustomLocationProps = {
  locations: RefinementListProps["items"];
  refineLocation: any;
  selectedFilters: any;
  isDesktop?: boolean;
};

function CustomLocation({
  locations,
  refineLocation,
  selectedFilters,
  isDesktop = true
}: CustomLocationProps) {
  const checkIfFilterExists = (role: string, filter: string, selectedFilters: { [key: string]: string[] }) => {
    const rolesA = selectedFilters[filter];
    return rolesA && rolesA.includes(role);
  };
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
            variant={isDesktop ? (item.isRefined ? "filterActive" : "filter") : checkIfFilterExists(item.label, "location", selectedFilters) ? "filterActive" : "filter"}
            onClick={() => isDesktop ? refineLocation(item.value) : refineLocation("location", item.label)}
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

type CustomMonthProps = {
  months: RefinementListProps["items"];
  refineMonths: any;
  selectedFilters: any;
  isDesktop?: boolean;
};

function CustomMonth({
  months,
  refineMonths,
  selectedFilters,
  isDesktop = true
}: CustomMonthProps) {
  const checkIfFilterExists = (role: string, filter: string, selectedFilters: { [key: string]: string[] }) => {
    const rolesA = selectedFilters[filter];
    return rolesA && rolesA.includes(role);
  };
  return (
    <Box>
      <Heading variant="h6" mb={4} mt={7}>
        Month
      </Heading>
      <Flex direction="column" gap="8px">
        {months.sort((a, b) => new Date(a.value).getTime() - new Date(b.value).getTime()).map((item, i) => (
          <Button
            justifyContent="flex-start"
            size="sm"
            variant={isDesktop ? (item.isRefined ? "filterActive" : "filter") : checkIfFilterExists(item.label, "month", selectedFilters) ? "filterActive" : "filter"}
            onClick={() => isDesktop ? refineMonths(item.value) : refineMonths("month", item.label)}
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
  selectedFilters,
  isDesktop = true
}: {
  types: RefinementListProps["items"];
  refineTypes: any;
  selectedFilters: any;
  isDesktop?: boolean;
}) {
  const checkIfFilterExists = (role: string, filter: string, selectedFilters: { [key: string]: string[] }) => {
    const rolesA = selectedFilters[filter];
    return rolesA && rolesA.includes(role);
  };
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
            variant={isDesktop ? (item.isRefined ? "filterActive" : "filter") : checkIfFilterExists(item.label, "type", selectedFilters) ? "filterActive" : "filter"}
            onClick={() => isDesktop ? refineTypes(item.value) : refineTypes("type", item.label)}
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
              {monthHits.map((hit) => (
                <EventCard
                  key={hit.objectID}
                  event={hit}
                  isPastEvent={isPastEvent}
                />
              ))}
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
