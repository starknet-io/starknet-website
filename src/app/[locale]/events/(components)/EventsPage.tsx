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
  VStack,
} from "@chakra-ui/react";
import * as SubNav from "@ui/SubNav/SubNav";
import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
import { use, useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
} from "src/libs/react-instantsearch-hooks-web";
import { useHits, useRefinementList } from "react-instantsearch-hooks";

import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { ListCard } from "@ui/ListCards/ListCard";

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
          leftAside={<Box minH="xs">{/* <CustomTags /> */}</Box>}
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

function CustomTags() {
  const { items, refine } = useRefinementList({
    attribute: "location",
  });
  console.log("location", items);
  return (
    <Box>
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Location
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => (
          <Button
            size="sm"
            variant={item.isRefined ? "filterActive" : "filter"}
            onClick={() => refine(item.value)}
            key={i}
          >
            {item.label}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

interface Contact {
  discord: string;
  email: string;
  logo: string;
  name: string;
  twitter: string;
}
interface Job {
  description: string;
  how_to_apply: string;
  location: string;
  required_experience: string;
  role: string;
  scope: string;
  title: string;
  type: string;
}

type HitProps = {
  readonly hits: readonly {
    contact: Contact;
    job: Job;
  }[];
};
function CustomHits() {
  const { hits } = useHits();
  console.log("hits", hits);

  return (
    <>
      hello
      {/* <Flex gap={4} direction="column" flex={1}>
        {hits.map((hit, i) => {
          let tags: string[] = [];
          if (hit.job.role) tags.push(hit.job.role);
          if (hit.job.type) tags.push(hit.job.type);
          return (
            <ListCard
              rounded
              key={hit.contact.name}
              startDateTime={hit.contact.name}
              image={hit.contact.logo}
              title={hit.job.title}
              description={hit.job.description}
              type={tags}
            />
          );
        })}
      </Flex> */}
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
