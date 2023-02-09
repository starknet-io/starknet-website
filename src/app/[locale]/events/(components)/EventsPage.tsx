"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";

import { useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
} from "src/libs/react-instantsearch-hooks-web";
import { useHits, useRefinementList } from "react-instantsearch-hooks";

import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { ListCard } from "@ui/ListCards/ListCard";
import { titleCase } from "src/utils/utils";
import moment from "moment";

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

type HitProps = {
  readonly hits: readonly {
    readonly start_date: string;
    readonly end_date?: string;
    readonly name: string;
    readonly image: string;
    readonly description: string;
    readonly tags: string[];
    readonly url: string;
  }[];
};
function CustomHits() {
  const { hits }: HitProps = useHits();

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
                      hit?.end_date,
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
    </>
  );
}

// import { getEventsPage } from "src/data/settings/events-page";
// import { getEvents } from "src/data/events";
// import { PageContentContainer } from "../(components)/PageContentContainer";
// import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
// import { EventCard } from "@ui/ListCards/EventCard";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   Box,
//   Wrap,
// } from "../../../libs/chakra-ui";
// import { PageLayout } from "@ui/Layout/PageLayout";

// export default async function EventsPage({
//   params: { locale },
// }: LocaleProps): Promise<JSX.Element> {
//   const { title, description } = await getEventsPage(locale);
//   const events = await getEvents(locale);

//   return (
//     <Box>
//       <PageLayout
//         sectionHeaderTitle="Events"
//         sectionHeaderDescription="Find StarkNet events taking place all over the world and online."
//         breadcrumbs={
//           <Breadcrumb separator="->">
//             <BreadcrumbItem>
//               <BreadcrumbLink fontSize="sm" href="#">
//                 Parent
//               </BreadcrumbLink>
//             </BreadcrumbItem>

//             <BreadcrumbItem isCurrentPage>
//               <BreadcrumbLink fontSize="sm" href="#">
//                 Events
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//           </Breadcrumb>
//         }
//         pageLastUpdated="Page last updated 21 Nov 2023"
//         leftAside={<Box minH="xs">Filters</Box>}
//         main={
//           <Box>
//             <Wrap spacing={4} direction="column">
//               {events.map((event) => (
//                 <EventCard
//                   href="https://www.google.com"
//                   startDateTime="Fri, Jan 12 • 2:00 PM EST"
//                   key={event.name}
//                   description={
//                     "Basecamp will be a 6-week training program, with 6x 2h online calls + homework."
//                   }
//                   title={event.name}
//                 />
//               ))}
//             </Wrap>
//           </Box>
//         }
//       />
//     </Box>
//   );
// }
