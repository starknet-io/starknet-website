"use client";

import algoliasearch from "algoliasearch/lite";
import { useMemo } from "react";
import {
  Configure,
  Hits,
  Index,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-hooks-web";
import { useLocale } from "./ClientLocaleProvider";

export interface Props {
  readonly env: {
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

export function MainSearch({ env }: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  const locale = useLocale();

  return (
    <InstantSearch indexName="web_posts_dev" searchClient={searchClient}>
      <SearchBox />

      <Index indexName="web_posts_dev">
        <Configure hitsPerPage={3} facetsRefinements={{ locale: [locale] }} />

        <Hits />
      </Index>

      <Index indexName="web_pages_dev">
        <Configure hitsPerPage={3} facetsRefinements={{ locale: [locale] }} />
        <Hits />
      </Index>

      <Index indexName="starknet-docs-dev">
        <Configure hitsPerPage={3} />
        <Hits />
      </Index>
    </InstantSearch>
  );
}
