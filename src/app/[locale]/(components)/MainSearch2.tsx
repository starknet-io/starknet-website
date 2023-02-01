"use client";

import {
  AutocompleteOptions,
  getAlgoliaResults,
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
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);
  const locale = useLocale();

  return (
    <Autocomplete
      openOnFocus={true}
      getSources={({ query }) => [
        {
          sourceId: "products",
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  params: {
                    facetFilters: [`locale:${locale}`],
                  },
                  indexName: "web_posts_dev",
                  query,
                },
                {
                  params: {
                    facetFilters: [`locale:${locale}`],
                  },
                  indexName: "web_pages_dev",
                  query,
                },
                {
                  indexName: "starknet-docs-dev",
                  query,
                },
              ],
            });
          },
          templates: {
            item({ item, components }) {
              return <ProductItem hit={item} components={components} />;
            },
          },
        },
      ]}
    />
  );
}

export function ProductItem({ hit, components }: any) {
  return (
    <a href={hit.url} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="title" />
        </div>
      </div>
    </a>
  );
}
