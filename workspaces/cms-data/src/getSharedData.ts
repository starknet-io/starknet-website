import { getFirst, getJSON } from "@starknet-io/cms-utils/src";
import { SEOTexts } from "./seo";
import { Alert } from "./settings/alert";
import { MainMenu } from "./settings/main-menu";
import { defaultLocale } from "./i18n/config";

type SharedData = {
    seo: SEOTexts,
    mainMenu: MainMenu,
    alerts: Alert[]
}
export async function getSharedData(
    locale: string,
    event: null | WorkerGlobalScopeEventMap["fetch"],
  ): Promise<SharedData> {
    return getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/shared-data/" + value, event)
      )
    );
  }