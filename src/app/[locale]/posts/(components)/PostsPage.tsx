"use client";

import { SimpleGrid } from "@chakra-ui/react";
import { ArticleCard } from "@ui/ArticleCard/ArticleCard";
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
  HitsPerPage,
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
        {/* <SearchBox /> */}
        <RefinementList attribute="brand" />

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2, xl: 2 }}
          rowGap={{ base: "8", md: "12" }}
          columnGap="8"
          pt={8}
        >
          <Hits hitComponent={Hit} />
        </SimpleGrid>
        {/* <Pagination /> */}
      </InstantSearch>
    </div>
  );
}

function Hit({ hit }: any) {
  return (
    <ArticleCard
      publishedAt="May 20 · 5 min read"
      excerpt="Cairo is a new open source design system for Figma and Sketch. It’s a collection of components, design patterns, and resources that you can use to design, prototype, and build products."
      category={hit.category}
      img="https://www.billboard.com/wp-content/uploads/media/st-vincent-escape-room-2017-billboard-1548.jpg?w=942&h=623&crop=1"
      title={hit.title}
      id={hit.id}
    />
  );
}
