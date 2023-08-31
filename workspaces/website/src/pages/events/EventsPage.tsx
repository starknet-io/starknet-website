import { Box, Divider, Flex, HStack } from "@chakra-ui/react";
import { Event } from "@starknet-io/cms-data/src/events";
import { Button } from "@ui/Button";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { getUnixTime, startOfDay } from "date-fns";
import type { BaseHit } from "instantsearch.js";
import moment from "moment";
import { useMemo } from "react";
import { useRefinementList } from "react-instantsearch-hooks";
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";
import algoliasearch from "algoliasearch/lite";
import {
  Configure,
  InstantSearch,
  useInfiniteHits,
} from "react-instantsearch-hooks-web";
import { titleCase } from "src/utils/utils";
import {
  eventsLocationsLabels,
  eventsTypesLabels,
} from "@starknet-io/cms-config/src/collections/events";
import MobileFiltersButton from "../(components)/MobileFilter/MobileFiltersButton";
import MobileFiltersDrawer from "../(components)/MobileFilter/MobileFiltersDrawer";
import useMobileFiltersDrawer from "../(components)/MobileFilter/useMobileFiltersDrawer";
import { SEOTexts } from "@starknet-io/cms-data/src/seo";
import EventCard from "./EventCard";
import { Chip } from "@ui/Chip/Chip";
import { Breadcrumbs } from "@ui/Breadcrumbs/Breadcrumbs";
import { ChipFilterLabel } from "@ui/ChipFilter/ChipFilterLabel";
import { ChipFilterContainer } from "@ui/ChipFilter/ChipFilterContainer";

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
  readonly seo: SEOTexts["events"];
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
    setSelectedFilters,
  } = useMobileFiltersDrawer([...locations, ...types]);

  const mapSelectedFilters = () => {
    let result: { location?: string[]; type?: string[]; month?: string[] } = {};

    let locationsFilteredValues = locations
      .filter((item) => item.isRefined)
      .map((item) => item.value);

    if (locationsFilteredValues.length > 0) {
      result["location"] = locationsFilteredValues;
    }

    let typesFilteredValues = types
      .filter((item) => item.isRefined)
      .map((item) => item.value);

    if (typesFilteredValues.length > 0) {
      result["type"] = typesFilteredValues;
    }

    let monthsFilteredValues = months
      .filter((item) => item.isRefined)
      .map((item) => item.value);

    if (monthsFilteredValues.length > 0) {
      result["month"] = monthsFilteredValues;
    }

    return result;
  };

  const handleModalClose = () => {
    onClose();
    setSelectedFilters(mapSelectedFilters());
  };

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
      selectedFilters["type"].map((type) => {
        refineTypes(type);
      });
    } else {
      types.map((type) => {
        type.isRefined && refineTypes(type.value);
      });
    }

    if (selectedFilters["month"]?.length) {
      selectedFilters["month"].map((month) => {
        refineMonths(month);
      });
    } else {
      months.map((month) => {
        month.isRefined && refineMonths(month.value);
      });
    }
  };

  const handleApplyFilters = () => {
    handleApplyChanges();
    setFilterOpen(false);
  };

  const checkIsRefined = (arr: any) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hasOwnProperty("isRefined") && arr[i].isRefined === true) {
        return true;
      }
    }
    return false;
  };

  const handleClearFilters = () => {
    const locationsRefined = checkIsRefined(locations);
    const typesRefined = checkIsRefined(types);
    const monthsRefined = checkIsRefined(months);
    const anyFilterApplied = locationsRefined || typesRefined || monthsRefined;
    anyFilterApplied && handleApplyChanges();
    setSelectedFilters({});
  };

  return (
    <PageLayout
      sectionHeaderTitle={seo.title}
      sectionHeaderDescription={seo.subtitle}
      breadcrumbs={
        <Breadcrumbs
          locale={params.locale}
          items={[
            {
              label: "Community",
              link: `/${params.locale}/community`,
            },
            {
              label: "Events",
              link: "",
            },
          ]}
        />
      }
      leftAside={
        <Box minH="xs" display={{ base: "none", lg: "block" }}>
          <CustomLocation
            refineLocation={refineLocation}
            locations={locations}
            selectedFilters={selectedFilters}
          />
          <CustomType
            types={types}
            refineTypes={refineTypes}
            selectedFilters={selectedFilters}
          />
        </Box>
      }
      main={
        <Box
          display="flex"
          flexDir="column"
          gap={{
            base: "page.gap-condenced.base",
            md: "page.gap-condenced.md",
            lg: "page.gap-condenced.lg",
          }}
          mt={{
            lg: "-40px",
          }}
        >
          <MobileFiltersButton filtersCount={filtersCounts} onClick={onOpen} />
          <Flex
            as="ul"
            sx={{ overflowX: "auto" }}
            gap="24px"
            borderBottomWidth="1px"
            borderColor="tabs-main-br"
            width="100%"
          >
            <Button
              variant="category"
              isActive={mode === "UPCOMING_EVENTS"}
              href={`/${params.locale}/events`}
            >
              Upcoming events
            </Button>
            <Button
              variant="category"
              isActive={mode === "PAST_EVENTS"}
              href={`/${params.locale}/events/past`}
            >
              Past events
            </Button>
          </Flex>
          <MobileFiltersDrawer isOpen={isOpen} onClose={handleModalClose}>
            <Flex direction="column" gap="sm">
              <CustomLocation
                locations={locations}
                refineLocation={handleFilterClick}
                selectedFilters={selectedFilters}
                isDesktop={false}
              />
              <CustomType
                types={types}
                refineTypes={handleFilterClick}
                selectedFilters={selectedFilters}
                isDesktop={false}
              />
              <CustomMonth
                refineMonths={handleFilterClick}
                months={months}
                selectedFilters={selectedFilters}
                isDesktop={false}
              />
            </Flex>
            <Button
              variant="solid"
              fullWidth
              mt="2xl"
              mb="md"
              onClick={handleApplyFilters}
            >
              Apply filters
            </Button>
            <Button variant="outline" onClick={handleClearFilters} fullWidth>
              Clear all
            </Button>
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
  isDesktop = true,
}: CustomLocationProps) {
  const checkIfFilterExists = (
    role: string,
    filter: string,
    selectedFilters: { [key: string]: string[] }
  ) => {
    const rolesA = selectedFilters[filter];
    return rolesA && rolesA.includes(role);
  };
  return (
    <Box>
      <ChipFilterLabel pt="none">Location</ChipFilterLabel>
      <ChipFilterContainer>
        {locations.map((item, i) => (
          <Chip
            onClick={() =>
              isDesktop
                ? refineLocation(item.value)
                : refineLocation("location", item.label)
            }
            key={i}
            isSelected={
              isDesktop
                ? item.isRefined
                : checkIfFilterExists(item.label, "location", selectedFilters)
            }
          >
            {eventsLocationsLabels[item.value] || titleCase(item.label)}
          </Chip>
        ))}
      </ChipFilterContainer>
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
  isDesktop = true,
}: CustomMonthProps) {
  const checkIfFilterExists = (
    role: string,
    filter: string,
    selectedFilters: { [key: string]: string[] }
  ) => {
    const rolesA = selectedFilters[filter];
    return rolesA && rolesA.includes(role);
  };
  return (
    <Box>
      <ChipFilterLabel>Month</ChipFilterLabel>
      <ChipFilterContainer>
        {months
          .sort(
            (a, b) => new Date(a.value).getTime() - new Date(b.value).getTime()
          )
          .map((item, i) => (
            <Chip
              isSelected={
                isDesktop
                  ? item.isRefined
                  : checkIfFilterExists(item.label, "month", selectedFilters)
              }
              onClick={() =>
                isDesktop
                  ? refineMonths(item.value)
                  : refineMonths("month", item.label)
              }
              key={i}
              style={{ order: item.value === "online_remote" ? -1 : 0 }}
            >
              {eventsLocationsLabels[item.value] || titleCase(item.label)}
            </Chip>
          ))}
      </ChipFilterContainer>
    </Box>
  );
}

function CustomType({
  types,
  refineTypes,
  selectedFilters,
  isDesktop = true,
}: {
  types: RefinementListProps["items"];
  refineTypes: any;
  selectedFilters: any;
  isDesktop?: boolean;
}) {
  const checkIfFilterExists = (
    role: string,
    filter: string,
    selectedFilters: { [key: string]: string[] }
  ) => {
    const rolesA = selectedFilters[filter];
    return rolesA && rolesA.includes(role);
  };
  return (
    <Box>
      <ChipFilterLabel>Type</ChipFilterLabel>
      <ChipFilterContainer>
        {types.map((item, i) => (
          <Chip
            isSelected={
              isDesktop
                ? item.isRefined
                : checkIfFilterExists(item.label, "type", selectedFilters)
            }
            onClick={() =>
              isDesktop
                ? refineTypes(item.value)
                : refineTypes("type", item.label)
            }
            key={i}
          >
            {eventsTypesLabels[item.value] || titleCase(item.label)}
          </Chip>
        ))}
      </ChipFilterContainer>
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
              fontSize="16px"
              fontWeight={700}
              lineHeight={1.5}
              mb={{
                base: "cards.gap-standard.base",
                md: "cards.gap-standard.md",
                lg: "cards.gap-standard.lg",
              }}
              color="content.support"
            >
              {moment(key, "YYYY-MM").format("MMMM YYYY")}
            </Heading>
            <Flex
              direction="column"
              flex={1}
              gap={{
                base: "cards.gap-standard.base",
                md: "cards.gap-standard.md",
                lg: "cards.gap-standard.lg",
              }}
            >
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
          <Button onClick={() => showMore()} flexShrink={0} variant="rounded">
            View More
          </Button>
          <Divider />
        </HStack>
      )}
    </>
  );
}
