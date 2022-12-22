"use client";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  RefinementList,
} from "react-instantsearch-hooks-web";

import { ChevronRightIcon } from "../../libs/heroicons/20/solid";

const searchClient = algoliasearch(
  "EIX7SZ4KVU",
  "022134985272ac0a499480996693a6c4"
);

function Hit({
  hit,
}: {
  hit: {
    objectID: string;
    url: string;
    title: string;
    content: string;
    imageUrl: string;
  };
}) {
  return (
    <article>
      <div>{hit.objectID}</div>
      <img src={hit.imageUrl} alt={hit.title} />
      <h1>
        <a href={hit.url}>
          <Highlight attribute="title" hit={hit as any} />
        </a>
      </h1>
      <div>
        <Highlight attribute="content" hit={hit as any} />
      </div>
    </article>
  );
}

export default function Index() {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="starknet-docs-v2">
        <SearchBox className="text-black" />
        <RefinementList attribute="title" />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </>
  );
}
