"use client";

import { Box, Flex, Container, HStack, Divider } from "src/libs/chakra-ui";
import moment from "moment";
import { useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
} from "src/libs/react-instantsearch-hooks-web";
import { useHits } from "react-instantsearch-hooks";
import { ListCard } from "@ui/Card/ListCard";
import { Heading } from "@ui/Typography/Heading";
import { Button } from "@ui/Button";
import { useRouter } from "next/navigation";
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
  hitsPerPage?: number;
}
export function BlockCommunityEventsList({
  params,
  env,
  hitsPerPage = 3,
}: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={`web_events_${env.ALGOLIA_INDEX}_asc`}
    >
      <Configure
        hitsPerPage={hitsPerPage}
        facetsRefinements={{ locale: [params.locale] }}
        filters={`start_date_ts > ${getUnixTime(
          startOfDay(new Date())
        )} AND type: community_event`}
      />
      <Container maxW="1062px">
        <Box>
          <Flex justifyContent="center">
            <Heading variant="h2" color="heading-navy-fg" mb="64px">
              Community Events
            </Heading>
          </Flex>
          <CustomHits hitsPerPage={hitsPerPage} />
        </Box>
      </Container>
    </InstantSearch>
  );
}

type HitProps = {
  readonly hits: readonly {
    readonly start_date: string;
    readonly end_date?: string;
    readonly name: string;
    readonly image: string;
    readonly city: string;
    readonly country: string;
    readonly description: string;
    readonly tags: string[];
    readonly url: string;
  }[];
};
function CustomHits({ hitsPerPage }: { hitsPerPage: number }) {
  const { hits }: HitProps = useHits();
  const router = useRouter();

  return (
    <>
      <Flex gap={4} direction="column" flex={1}>
        {hits.map((hit, i) => {
          if (i > hitsPerPage - 1) return null;
          else {
            return (
              <ListCard
                key={hit?.name}
                startDateTime={
                  hit?.end_date
                    ? `${moment(hit?.start_date).format(
                        "ddd MMM DD",
                      )} - ${moment(hit?.end_date).format("ddd MMM DD, YYYY")}`
                    : moment(hit?.start_date).format("ddd MMM DD, YYYY")
                }
                image={hit.image}
                title={hit.name}
                description={hit.description}
                type={hit.tags}
                href={hit.url}
                variant="event"
              />
            );
          }
        })}
      </Flex>
      <HStack mt="24">
        <Divider />
        <Button
          onClick={() => router.push("/en/events")}
          flexShrink={0}
          variant="outlineLight"
        >
          See all events
        </Button>
        <Divider />
      </HStack>
    </>
  );
}
