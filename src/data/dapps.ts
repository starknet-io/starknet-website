import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getYAML } from "./utils";

interface Dapp {
  readonly name: string;
  readonly image: string;
  readonly twitter: string;
  readonly website_url: string;
  readonly description: string;
}

export async function getDapps(locale: string): Promise<readonly Dapp[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/dapps/${locale}.json`),
      () => getJSON(`_dynamic/dapps/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getDapps failed!", {
      cause,
    });
  }
}

export async function getDappByFilename(
  filename: string,
  locale: string,
): Promise<Dapp> {
  try {
    return await getFirst(
      () => getYAML(`dapps/${locale}/${filename}.yml`),
      () => getYAML(`dapps/${defaultLocale}/${filename}.yml`),
    );
  } catch (cause) {
    throw new Error(`Dapp not found! ${filename}`, {
      cause,
    });
  }
}
