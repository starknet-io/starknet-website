import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getYAML } from "./utils";

export interface Bridge {
  readonly name: string;
  readonly website_url: string;
  readonly image: string;
  readonly company_name: string;
  readonly twitter: string;
  readonly description: string;
}

export async function getBridges(locale: string): Promise<readonly Bridge[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/bridges/${locale}.json`),
      () => getJSON(`_dynamic/bridges/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getBridges failed!", {
      cause,
    });
  }
}

export async function getBridgeByFilename(
  filename: string,
  locale: string,
): Promise<Bridge> {
  try {
    return await getFirst(
      () => getYAML(`bridges/${locale}/${filename}.yml`),
      () => getYAML(`bridges/${defaultLocale}/${filename}.yml`),
    );
  } catch (cause) {
    throw new Error(`Bridge not found! ${filename}`, {
      cause,
    });
  }
}
