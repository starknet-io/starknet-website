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

import "@algolia/autocomplete-theme-classic/dist/theme.css";
import { useLocale } from "./ClientLocaleProvider";
import { ArgumentsType } from "vitest";
import { Page } from "src/data/pages";
import { Post } from "src/data/posts";

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

import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
// import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";

export function MainSearch2({ env }: Props): JSX.Element | null {
  const data = useMemo(() => {
    const searchClient = algoliasearch(
      env.ALGOLIA_APP_ID,
      env.ALGOLIA_SEARCH_API_KEY
    );

    const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
      key: "algolia-recent-searches-plugin",
      limit: 3,
      transformSource({ source }) {
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
                  <span className="aa-SourceHeaderTitle">Your searches</span>
                  <div className="aa-SourceHeaderLine" />
                </Fragment>
              );
            },
          },
        };
      },
    });

    return { searchClient, recentSearchesPlugin };
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);
  const locale = useLocale();

  // const querySuggestionsPlugin = createQuerySuggestionsPlugin({
  //   searchClient,
  //   indexName: "instant_search_demo_query_suggestions",
  //   getSearchParams() {
  //     return recentSearchesPlugin.data!.getAlgoliaSearchParams({
  //       hitsPerPage: 5,
  //     });
  //   },
  //   transformSource({ source }) {
  //     return {
  //       ...source,
  //       templates: {
  //         ...source.templates,
  //         header({ state }) {
  //           if (state.query) {
  //             return <Fragment/>;
  //           }

  //           return (
  //             <Fragment>
  //               <span className="aa-SourceHeaderTitle">Popular searches</span>
  //               <div className="aa-SourceHeaderLine" />
  //             </Fragment>
  //           );
  //         },
  //       },
  //     };
  //   },
  // });

  return (
    <Autocomplete<any>
      openOnFocus={true}
      plugins={[
        data.recentSearchesPlugin,
        // data.querySuggestionsPlugin
      ]}
      getSources={({ query }) => [
        {
          sourceId: "posts",
          getItems() {
            return getAlgoliaResults({
              searchClient: data.searchClient,
              queries: [
                {
                  params: {
                    facetFilters: [`locale:${locale}`],
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
                  <span className="aa-SourceHeaderTitle">posts</span>
                  <div className="aa-SourceHeaderLine" />
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
                  <span className="aa-SourceHeaderTitle">pages</span>
                  <div className="aa-SourceHeaderLine" />
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
                  indexName: "starknet-docs-dev",
                  query,
                },
              ],
            });
          },
          templates: {
            header(data) {
              console.log(data);
              return (
                <Fragment>
                  <span className="aa-SourceHeaderTitle">docs</span>
                  <div className="aa-SourceHeaderLine" />
                </Fragment>
              );
            },
            item: DocsItem,
          },
        },
      ]}
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
