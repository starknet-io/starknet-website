"use client";

import { Container, SimpleGrid } from "@chakra-ui/react";
import { ArticleCard } from "@ui/ArticleCard/ArticleCard";
import { useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  RefinementList,
  Configure,
} from "src/libs/react-instantsearch-hooks-web";
import { useHits } from "react-instantsearch-hooks";
import { PageContentContainer } from "../../(components)/PageContentContainer";
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
    <PageContentContainer>
      <InstantSearch searchClient={searchClient} indexName="web_posts_dev">
        <Configure
          hitsPerPage={40}
          facetsRefinements={{ locale: [params.locale] }}
        />
        <Container>
          <RefinementList attribute="brand" />
        </Container>
        <CustomHits />

        {/* <Pagination /> */}
      </InstantSearch>
    </PageContentContainer>
  );
}

function CustomHits() {
  const { hits } = useHits();

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2, xl: 2 }}
      rowGap={{ base: "8", md: "12" }}
      columnGap="8"
      pt={8}
    >
      {hits.map((hit, i) => (
        <ArticleCard
          href={`/${hit.locale}/posts/${hit.id}`}
          publishedAt="May 20 · 5 min read"
          excerpt={hit.short_desc}
          category="engineering"
          img="https://miro.medium.com/max/1400/1*W1dObj1HvyUqVB2z60Ug_A.webp"
          title={hit?.title}
          id="id"
          key={i}
        />
      ))}
    </SimpleGrid>
  );
}
