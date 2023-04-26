"use client";

import { Box } from "@chakra-ui/react";
import { getUnixTime, startOfDay } from "date-fns";
import { useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  Configure,
  InstantSearch,
} from "src/libs/react-instantsearch-hooks-web";
import { Events } from "./Events";

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
        <Events locale={params.locale} eventMode={mode} />
      </InstantSearch>
    </Box>
  );
}
