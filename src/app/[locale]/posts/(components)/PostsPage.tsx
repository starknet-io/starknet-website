"use client";

import { useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  RefinementList,
  Pagination,
  Configure,
} from "src/libs/react-instantsearch-hooks-web";

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

export function PostsPage({ params, env }: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  return (
    <div className="mx-auto  max-w-7xl px-2 sm:px-4 lg:px-8 pt-7">
      <InstantSearch searchClient={searchClient} indexName="web_posts_dev">
        <Configure
          hitsPerPage={40}
          facetsRefinements={{ locale: [params.locale] }}
        />
        <SearchBox />
        <RefinementList attribute="brand" />
        <Hits hitComponent={Hit} />
        <Pagination />
      </InstantSearch>
    </div>
  );
}

function Hit({ hit }: any) {
  return (
    <article>
      <h2>
        <Highlight attribute="title" hit={hit} />
      </h2>
    </article>
  );
}
