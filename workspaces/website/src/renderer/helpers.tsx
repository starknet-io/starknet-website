import { PageContextServer } from "./types";
import {
  getSharedData
} from "@starknet-io/cms-data/src/getSharedData";
import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";

type DefaultPageContextKeys =
  | "locale"
  | "mainMenu"
  | "alerts"
  | "seo";

export async function getDefaultPageContext(
  pageContext: PageContextServer
): Promise<Pick<PageContextServer, DefaultPageContextKeys>> {
  const locale = pageContext.locale ?? defaultLocale;
  const sharedData = await getSharedData(locale, pageContext.context)

  return {
    locale,
    ...sharedData
  };
}
