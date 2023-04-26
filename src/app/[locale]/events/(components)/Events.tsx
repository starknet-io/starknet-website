"use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Event } from "@starknet-io/cms-data/src/events";
import { Button } from "@ui/Button";
import { PageLayout } from "@ui/Layout/PageLayout";
import { ListCard } from "@ui/ListCards/ListCard";
import { Heading } from "@ui/Typography/Heading";
import type { BaseHit } from "instantsearch.js";
import moment from "moment";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { useRefinementList } from "react-instantsearch-hooks";
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";
import { useInfiniteHits } from "src/libs/react-instantsearch-hooks-web";
import { titleCase } from "src/utils/utils";
import {
  eventsLocationsLabels,
  eventsTypesLabels,
} from "workspaces/cms-config/src/collections/events";

type EventsProps = {
  locale: string;
  eventMode: "UPCOMING_EVENTS" | "PAST_EVENTS";
};

export const Events = ({ locale, eventMode }: EventsProps) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { items: locations, refine: refineLocation } = useRefinementList({
    attribute: "location",
    sortBy: ["name:asc"],
  });

  const { items: types, refine: refineTypes } = useRefinementList({
    attribute: "type",
    sortBy: ["name:asc"],
  });

  return (
    <PageLayout
      sectionHeaderTitle="Events"
      sectionHeaderDescription="Find Starknet events, online or around the world."
      breadcrumbs={
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${locale}`}
              fontSize="sm"
              noOfLines={1}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${locale}/community`}
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
                isActive={eventMode === "UPCOMING_EVENTS"}
                href={`/${locale}/events`}
              >
                Upcoming events
              </Button>
            </Box>
            <Box>
              <Button
                variant="category"
                as={Link}
                isActive={eventMode === "PAST_EVENTS"}
                href={`/${locale}/events/past`}
              >
                Past events
              </Button>
            </Box>
          </Flex>
          <Button
            variant="outline"
            leftIcon={<HiAdjustmentsVertical size={24} />}
            w="100%"
            display={{ base: "flex", lg: "none" }}
            mt="24px"
            lineHeight={1}
            alignItems="center"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            Filters
          </Button>
          <Drawer
            placement="left"
            isOpen={isMobileFilterOpen && !!isMobile}
            onClose={() => setIsMobileFilterOpen(false)}
            size="full"
            variant="primary"
            /* set trapFocus to false to make search inside drawer interactive */
            trapFocus={false}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>
              <DrawerBody>
                <CustomLocation
                  locations={locations}
                  refineLocation={refineLocation}
                />
                <CustomType types={types} refineTypes={refineTypes} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <CustomHits />
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
