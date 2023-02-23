import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON } from "./utils";

export interface BlockExplorer {
  readonly name: string;
  readonly website_url: string;
  readonly image: string;
  readonly company_name: string;
  readonly twitter: string;
  readonly description: string;
}

export async function getBlockExplorers(
  locale: string,
): Promise<readonly BlockExplorer[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/block-explorers/${locale}.json`),
      () => getJSON(`_dynamic/block-explorers/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getBlockExplorers failed!", {
      cause,
    });
  }
}
