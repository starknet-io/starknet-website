"use client";

import {
  AutocompleteOptions,
  getAlgoliaResults,
  SourceTemplates,
} from "@algolia/autocomplete-js";
import { BaseItem } from "@algolia/autocomplete-core";
import algoliasearch from "algoliasearch/lite";
import { autocomplete } from "@algolia/autocomplete-js";
import React, {
  createElement,
  Fragment,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { createRoot, Root } from "react-dom/client";

import "../../../style/algolia/theme.css";
import "../../../style/algolia/overrides.css";
import { useLocale } from "./ClientLocaleProvider";
import { ArgumentsType } from "vitest";
import { Page } from "src/data/pages";
import { Post } from "src/data/posts";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { Box } from "@chakra-ui/react";

export function Autocomplete<TItem extends BaseItem>(
  props: Partial<AutocompleteOptions<TItem>>
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRootRef = useRef<Root>();
  const rootRef = useRef<HTMLElement>();

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      ...props,
      container: containerRef.current,
      renderer: { createElement, Fragment, render: () => {} },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} />;
}

export interface Props {
  readonly env: {
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

export function MainSearch2({ env }: Props): JSX.Element | null {
  const data = useMemo(() => {
    const searchClient = algoliasearch(
      env.ALGOLIA_APP_ID,
      env.ALGOLIA_SEARCH_API_KEY
    );

    const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
      key: "algolia-recent-searches-plugin",
      limit: 3,
      transformSource({ source, onTapAhead, onRemove }) {
        return {
          ...source,
          templates: {
            ...source.templates,
            header({ state }) {
              if (state.query) {
                return <Fragment />;
              }

              return (
                <Fragment>
                  <Box className="aa-SourceHeaderTitle">Recent searches</Box>
                </Fragment>
              );
            },
            item: (props) => (
              <RecentSearchesItem
                {...props}
                onTapAhead={onTapAhead}
                onRemove={onRemove}
              />
            ),
          },
        };
      },
    });
    const querySuggestionsPlugin = createQuerySuggestionsPlugin({
      searchClient,
      indexName: "web_query_suggestions_dev",
      getSearchParams() {
        return recentSearchesPlugin.data!.getAlgoliaSearchParams({
          hitsPerPage: 3,
        });
      },
      transformSource({ source, onTapAhead }) {
        return {
          ...source,
          templates: {
            ...source.templates,
            header({ state }) {
              if (state.query) {
                return <Fragment />;
              }

              return (
                <Fragment>
                  <Box className="aa-SourceHeaderTitle">Popular searches</Box>
                </Fragment>
              );
            },
            item: (props) => (
              <PopularSearchesItem {...props} onTapAhead={onTapAhead} />
            ),
          },
        };
      },
    });

    return { searchClient, recentSearchesPlugin, querySuggestionsPlugin };
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);
  const locale = useLocale();

  return (
    <Autocomplete<any>
      detachedMediaQuery=""
      openOnFocus={true}
      plugins={[data.recentSearchesPlugin, data.querySuggestionsPlugin]}
      getSources={({ query }) => {
        if (!query) return [];

        return [
          {
            sourceId: "posts",
            getItems() {
              return getAlgoliaResults({
                searchClient: data.searchClient,

                queries: [
                  {
                    params: {
                      facetFilters: [`locale:${locale}`],
                      hitsPerPage: 5,
                    },
                    indexName: "web_posts_dev",
                    query,
                  },
                ],
              });
            },
            templates: {
              header() {
                return (
                  <Fragment>
                    <span className="aa-SourceHeaderTitle">Posts</span>
                  </Fragment>
                );
              },
              item: PostItem,
            },
          },
          {
            sourceId: "pages",
            getItems() {
              return getAlgoliaResults({
                searchClient: data.searchClient,
                queries: [
                  {
                    params: {
                      facetFilters: [`locale:${locale}`],
                      hitsPerPage: 5,
                    },
                    indexName: "web_pages_dev",
                    query,
                  },
                ],
              });
            },
            templates: {
              header() {
                return (
                  <Fragment>
                    <span className="aa-SourceHeaderTitle">Pages</span>
                  </Fragment>
                );
              },
              item: PageItem,
            },
          },
          {
            sourceId: "docs",
            getItems() {
              return getAlgoliaResults({
                searchClient: data.searchClient,
                queries: [
                  {
                    params: {
                      hitsPerPage: 5,
                    },

                    indexName: "starknet-docs-dev",
                    query,
                  },
                ],
              });
            },
            templates: {
              header() {
                return (
                  <Fragment>
                    <span className="aa-SourceHeaderTitle">Documentation</span>
                  </Fragment>
                );
              },
              item: DocsItem,
            },
          },
        ];
      }}
    />
  );
}

type ItemProps<T> = ArgumentsType<SourceTemplates<T & BaseItem>["item"]>[0];

export function PageItem({
  item: hit,
  components: { Highlight },
}: ItemProps<Page>) {
  return (
    <a href={hit.link} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <Highlight hit={hit} attribute="title" />
        </div>
      </div>
    </a>
  );
}

export function PostItem({
  item: hit,
  components: { Highlight },
}: ItemProps<Post>) {
  return (
    <a
      href={`/${hit.locale}/posts/${hit.category}/${hit.slug}`}
      className="aa-ItemLink"
    >
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <Highlight hit={hit} attribute="title" />
        </div>
      </div>
    </a>
  );
}

export function DocsItem({
  item: hit,
  components: { Highlight },
}: ItemProps<any>) {
  return (
    <a href={hit.url} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <Highlight hit={hit} attribute="title" />
        </div>
      </div>
    </a>
  );
}

export function PopularSearchesItem({
  item: hit,
  components: { Highlight },
  onTapAhead,
}: ItemProps<any> & {
  onTapAhead: (item: any) => void;
}) {
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    onTapAhead(hit);
  };
  return (
    <div className="aa-ItemWrapper" onClick={onClick} role="button">
      <div className="aa-ItemContent">
        <div className="aa-ItemIcon aa-ItemIcon--noBorder">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
          </svg>
        </div>
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <Highlight hit={hit} attribute="query" />
          </div>
        </div>
      </div>
      <div className="aa-ItemActions">
        <button
          className="aa-ItemActionButton"
          title={`Fill query with "${hit.query}"`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export function RecentSearchesItem({
  item: hit,
  components: { Highlight },
  onTapAhead,
  onRemove,
}: ItemProps<any> & {
  onTapAhead: (item: any) => void;
  onRemove: (itemId: string) => void;
}) {
  const onSelectItem = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    onTapAhead(hit);
  };

  const onRemoveItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove(hit.id);
  };

  return (
    <div className="aa-ItemWrapper" onClick={onSelectItem} role="button">
      <div className="aa-ItemContent">
        <div className="aa-ItemIcon aa-ItemIcon--noBorder">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.516 6.984v5.25l4.5 2.672-0.75 1.266-5.25-3.188v-6h1.5zM12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"></path>
          </svg>
        </div>
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <Highlight hit={hit} attribute="label" />
          </div>
        </div>
      </div>
      <div className="aa-ItemActions">
        <button
          className="aa-ItemActionButton aa-ItemActionButtonDanger"
          title="Remove this search"
          onClick={onRemoveItem}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 7v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-10c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-13zM17 5v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v13c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h10c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-13h1c0.552 0 1-0.448 1-1s-0.448-1-1-1zM9 5v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1zM9 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path>
          </svg>
        </button>
        <button
          className="aa-ItemActionButton"
          title={`Fill query with "${hit.label}"`}
          onClick={onSelectItem}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
