import { MessagesType } from '@starknet-io/cms-data/src/i18n/intl'
import { Alert } from '@starknet-io/cms-data/src/settings/alert'
import { MainMenu } from '@starknet-io/cms-data/src/settings/main-menu'
import type {
  PageContextBuiltIn,
  //*
  // When using Client Routing https://vite-plugin-ssr.com/clientRouting
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
  /*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient
  //*/
} from 'vite-plugin-ssr/types'

type Page = (pageProps: PageProps) => React.ReactElement
export type PageProps = Record<string, unknown>

export type PageContextCustom = {
  Page: Page
  pageProps?: PageProps
  exports: {
    documentProps?: {
      title: string
    }
  }
  documentProps?: {
    title: string
  }
  locale: string
  userAgent: string
  redirectTo?: string
  mainMenu: MainMenu;
  messages: MessagesType;
  alerts: Alert[];
}

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
export type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

export type PageContext = PageContextClient | PageContextServer
