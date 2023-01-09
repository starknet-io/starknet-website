import { defaultLocale } from "../i18n";
import { getFirst, getJSON } from "../utils";

export type Page = {
  readonly page: string;
  readonly title: string;
  readonly pages: readonly Page[];
};

export interface MainMenu {
  readonly pages: readonly Page[];
}

export async function getMainMenu(locale: string): Promise<MainMenu> {
  try {
    return (await getFirst(
      () => getJSON(`_dynamic/main-menu/${locale}.json`),
      () => getJSON(`_dynamic/main-menu/${defaultLocale}.json`),
    )) as Page;
  } catch (cause) {
    throw new Error("getMainMenu failed!", {
      cause,
    });
  }
}
