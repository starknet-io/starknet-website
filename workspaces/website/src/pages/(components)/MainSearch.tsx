import "src/style/algolia/theme.css";
import "src/style/algolia/overrides.css";

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
  useState,
  useRef,
} from "react";
import { createRoot, Root } from "react-dom/client";
import { ArgumentsType } from "vitest";
import type { Page } from "@starknet-io/cms-data/src/pages";
import { Post } from "@starknet-io/cms-data/src/posts";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { Box, Kbd, useColorModeValue } from "@chakra-ui/react";
import { SEOTexts } from "@starknet-io/cms-data/src/seo";
import { usePageContext } from "src/renderer/PageContextProvider";

export function Autocomplete<TItem extends BaseItem>(
  props: Partial<AutocompleteOptions<TItem>>
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRootRef = useRef<Root>();
  const rootRef = useRef<HTMLElement>();

  function openSearch(event: KeyboardEvent) {
    if (event.key === "/") {
      const el = containerRef.current?.querySelector(
        ".aa-DetachedSearchButton"
      ) as HTMLElement;
      el?.click();
    } else if (event.key === "k") {
      if (
        (navigator.platform === "MacIntel" && event.metaKey) ||
        (navigator.platform !== "MacIntel" && event.ctrlKey)
      ) {
        const el = containerRef.current?.querySelector(
          ".aa-DetachedSearchButton"
        ) as HTMLElement;
        el?.click();
      }
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.document.addEventListener("keydown", openSearch);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.document.removeEventListener("keydown", openSearch);
      }
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      ...props,
      container: containerRef.current,
      openOnFocus: true,
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
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
  seo: SEOTexts['search']
}

export function MainSearch({ env, seo }: Props): JSX.Element | null {
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
          onSelect({ setIsOpen }) {
            setIsOpen(true);
          }
        };
      },
    });
    const querySuggestionsPlugin = createQuerySuggestionsPlugin({
      searchClient,
      indexName: `web_query_suggestions_${env.ALGOLIA_INDEX}`,
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
          onSelect({ setIsOpen }) {
            setIsOpen(true);
          }
        };
      },
    });

    return { searchClient, recentSearchesPlugin, querySuggestionsPlugin };
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_INDEX, env.ALGOLIA_SEARCH_API_KEY]);
  const { locale } = usePageContext();
  const [searchBox, setSearchBox] = useState<HTMLElement>();
  useEffect(() => {
    setSearchBox(
      window.document.querySelector(".aa-DetachedSearchButton") as HTMLElement
    );
  }, []);

  return (
    <Box position="relative" height="44px">
      <Autocomplete<any>
        detachedMediaQuery=""
        openOnFocus={true}
        plugins={[data.recentSearchesPlugin, data.querySuggestionsPlugin]}
        placeholder={seo?.search}
        getSources={({ query }) => {
          if (!query) return [];

          return [
            {
              sourceId: "posts",
              getItemUrl({ item }) {
                return `/${locale}/content/${item.slug}`;
              },
              getItems() {
                return getAlgoliaResults({
                  searchClient: data.searchClient,

                  queries: [
                    {
                      params: {
                        facetFilters: [`locale:${locale}`],
                        hitsPerPage: 5,
                      },
                      indexName: `web_posts_${env.ALGOLIA_INDEX}`,
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
              getItemUrl({ item }) {
                return `${item.link}`;
              },
              getItems() {
                return getAlgoliaResults({
                  searchClient: data.searchClient,
                  queries: [
                    {
                      params: {
                        facetFilters: [`locale:${locale}`],
                        hitsPerPage: 5,
                      },
                      indexName: `web_pages_${env.ALGOLIA_INDEX}`,
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
              getItemUrl({ item }) {
                return item.url;
              },
              getItems() {
                return getAlgoliaResults({
                  searchClient: data.searchClient,
                  queries: [
                    {
                      params: {
                        hitsPerPage: 5,
                        attributesToSnippet: ["title:8", "content:10"],
                        snippetEllipsisText: "...",
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
                      <span className="aa-SourceHeaderTitle">
                        Documentation
                      </span>
                    </Fragment>
                  );
                },
                item: DocsItem,
              },
            },
          ];
        }}
      />
      <Kbd
        background={useColorModeValue("kbd-bg", "kbd-bg")}
        color={useColorModeValue("kbd-fg", "kbd-fg")}
        padding="7px 14px"
        borderRadius="4px"
        borderWidth="1px"
        position="absolute"
        top="7px"
        right="8px"
        cursor="pointer"
        onClick={() => searchBox?.click()}
        pointerEvents="none"
        display={{ base: "none", lg: "block" }}
      >
        /
      </Kbd>
    </Box>
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
        <div className="aa-ItemIcon aa-ItemIcon--noBorder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
        <div className="aa-ItemContentBody">
          <div className="aa-ItemTitle">
            <Highlight hit={hit} attribute="title" />
          </div>
        </div>
      </div>
      <div className="aa-ItemActions">
        <div className="aa-ItemActionButton" title="Visit this link">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.35103 3.1786C9.69424 3.53815 9.68099 4.10784 9.32144 4.45105L4.34632 9.20003H16.35C19.9122 9.20003 22.8 12.0878 22.8 15.65C22.8 19.2123 19.9122 22.1 16.35 22.1H12.9C12.403 22.1 12 21.6971 12 21.2C12 20.703 12.403 20.3 12.9 20.3H16.35C18.9181 20.3 21 18.2182 21 15.65C21 13.0819 18.9181 11 16.35 11H4.34632L9.32144 15.749C9.68099 16.0922 9.69424 16.6619 9.35103 17.0215C9.00783 17.381 8.43813 17.3943 8.07858 17.051L1.47858 10.751C1.30067 10.5812 1.20001 10.346 1.20001 10.1C1.20001 9.85407 1.30067 9.61883 1.47858 9.44901L8.07858 3.14901C8.43813 2.8058 9.00783 2.81905 9.35103 3.1786Z"
              fill="currentColor"
            />
          </svg>
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
      href={`/${hit.locale}/content/${hit.slug}`}
      className="aa-ItemLink"
    >
      <div className="aa-ItemContent">
        <div className="aa-ItemIcon aa-ItemIcon--noBorder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>
        </div>
        <div className="aa-ItemContentBody">
          <div className="aa-ItemTitle">
            <Highlight hit={hit} attribute="title" />
          </div>
        </div>
      </div>
      <div className="aa-ItemActions">
        <div className="aa-ItemActionButton" title="Visit this link">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.35103 3.1786C9.69424 3.53815 9.68099 4.10784 9.32144 4.45105L4.34632 9.20003H16.35C19.9122 9.20003 22.8 12.0878 22.8 15.65C22.8 19.2123 19.9122 22.1 16.35 22.1H12.9C12.403 22.1 12 21.6971 12 21.2C12 20.703 12.403 20.3 12.9 20.3H16.35C18.9181 20.3 21 18.2182 21 15.65C21 13.0819 18.9181 11 16.35 11H4.34632L9.32144 15.749C9.68099 16.0922 9.69424 16.6619 9.35103 17.0215C9.00783 17.381 8.43813 17.3943 8.07858 17.051L1.47858 10.751C1.30067 10.5812 1.20001 10.346 1.20001 10.1C1.20001 9.85407 1.30067 9.61883 1.47858 9.44901L8.07858 3.14901C8.43813 2.8058 9.00783 2.81905 9.35103 3.1786Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}

export function DocsItem({
  item: hit,
  components: { Highlight },
}: ItemProps<any>) {
  const snippet = hit["_snippetResult"];

  return (
    <a href={hit.url} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemIcon aa-ItemIcon--noBorder">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5999 9.99999C19.5999 15.3019 15.3018 19.6 9.9999 19.6C4.69797 19.6 0.399902 15.3019 0.399902 9.99999C0.399902 4.69806 4.69797 0.399994 9.9999 0.399994C15.3018 0.399994 19.5999 4.69806 19.5999 9.99999ZM17.7961 10.2449C17.6667 14.4394 14.2258 17.8 9.9999 17.8C5.69208 17.8 2.1999 14.3078 2.1999 9.99999C2.1999 6.55187 4.43732 3.62632 7.53954 2.59597L6.31196 4.74422C5.92196 5.42673 6.03701 6.28582 6.59284 6.84165C7.12339 7.37219 7.9339 7.50372 8.60499 7.16818L8.81467 7.06334C8.89798 7.02168 8.98985 6.99999 9.083 6.99999H9.25807C9.48534 6.99999 9.69309 7.1284 9.79473 7.33167C9.87919 7.50058 9.87919 7.69941 9.79473 7.86832L9.76138 7.93502C9.68018 8.09741 9.51421 8.19999 9.33265 8.19999H8.73006C7.82327 8.19999 6.97648 8.65319 6.47348 9.40768L6.42091 9.48654C5.98984 10.1331 5.88144 10.9426 6.12719 11.6798C6.37831 12.4331 6.97335 13.0237 7.72395 13.2739C8.00786 13.3685 8.19971 13.635 8.19971 13.9298V15.1895C8.19971 15.9685 8.8312 16.6 9.61018 16.6C10.0387 16.6 10.4439 16.4052 10.7116 16.0706L12.6452 13.6536C12.8747 13.3667 12.9997 13.0103 12.9997 12.643C12.9997 12.2639 13.1533 11.8949 13.4236 11.6246C13.9704 11.0778 14.0636 10.2141 13.6307 9.56485L13.074 8.72974C13.0256 8.65709 12.9997 8.57174 12.9997 8.48444C12.9997 8.12003 13.4157 7.91201 13.7073 8.13066L14.1185 8.4391C14.4975 8.7233 15.0044 8.76847 15.4274 8.55695C15.6984 8.42147 16.0258 8.47464 16.2395 8.68826L17.7961 10.2449Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="aa-ItemContentBody">
          {snippet?.content?.value && (
            <div className="aa-ItemTitle">
              <Highlight
                hit={hit}
                attribute={["_snippetResult", "content", "value"]}
              />
            </div>
          )}
          {snippet?.title?.value && (
            <div className="aa-ItemDesc">
              <Highlight
                hit={hit}
                attribute={["_snippetResult", "title", "value"]}
              />
            </div>
          )}
        </div>
      </div>
      <div className="aa-ItemActions">
        <button className="aa-ItemActionButton" title="Visit this link">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.35103 3.1786C9.69424 3.53815 9.68099 4.10784 9.32144 4.45105L4.34632 9.20003H16.35C19.9122 9.20003 22.8 12.0878 22.8 15.65C22.8 19.2123 19.9122 22.1 16.35 22.1H12.9C12.403 22.1 12 21.6971 12 21.2C12 20.703 12.403 20.3 12.9 20.3H16.35C18.9181 20.3 21 18.2182 21 15.65C21 13.0819 18.9181 11 16.35 11H4.34632L9.32144 15.749C9.68099 16.0922 9.69424 16.6619 9.35103 17.0215C9.00783 17.381 8.43813 17.3943 8.07858 17.051L1.47858 10.751C1.30067 10.5812 1.20001 10.346 1.20001 10.1C1.20001 9.85407 1.30067 9.61883 1.47858 9.44901L8.07858 3.14901C8.43813 2.8058 9.00783 2.81905 9.35103 3.1786Z"
              fill="currentColor"
            />
          </svg>
        </button>
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
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div className="aa-ItemWrapper" onClick={onClick} role="button">
      <div className="aa-ItemContent">
        <div className="aa-ItemIcon aa-ItemIcon--noBorder">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z" />
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
            <path d="M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z" />
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
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div className="aa-ItemWrapper" onClick={onSelectItem} role="button">
      <div className="aa-ItemContent">
        <div className="aa-ItemIcon aa-ItemIcon--noBorder">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.516 6.984v5.25l4.5 2.672-0.75 1.266-5.25-3.188v-6h1.5zM12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z" />
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
            <path d="M18 7v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-10c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-13zM17 5v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v13c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h10c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-13h1c0.552 0 1-0.448 1-1s-0.448-1-1-1zM9 5v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1zM9 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1z" />
          </svg>
        </button>
        <button
          className="aa-ItemActionButton"
          title={`Fill query with "${hit.label}"`}
          onClick={onSelectItem}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
