import type { SEOTexts } from "@starknet-io/cms-data/src/seo";
import type { Alert } from "@starknet-io/cms-data/src/settings/alert";
import type { MainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import type {
  PageContextBuiltIn,
  //*
  // When using Client Routing https://vite-plugin-ssr.com/clientRouting
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
  /*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient
  //*/
} from "vite-plugin-ssr/types";

type Page = (pageProps: PageProps) => React.ReactElement;

export type PageProps = Record<string, unknown>;

export interface DocumentProps {
  title?: string;
  description?: string;
  image?: string;
  video?: string;
}

export type SeoType = {
  seoTitle?: string;
  seoCanonicalUrl?: string;
  seoDescription?: string;
  seoFocusKeywords?: string[];
}

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  hasLayout?: boolean;
  exports: {
    documentProps?: DocumentProps;
  };
  documentProps?: DocumentProps;
  locale: string;
  context: EventContext<{}, any, Record<string, unknown>>;
  userAgent: string;
  redirectTo?: string;
  mainMenu: MainMenu;
  alerts: Alert[];
  seo: SEOTexts;
};

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> &
  PageContextCustom;

export type PageContext = PageContextClient | PageContextServer;
