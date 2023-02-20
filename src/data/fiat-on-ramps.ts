import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getYAML } from "./utils";

export interface FiatOnRamp {
  readonly name: string;
  readonly website_url: string;
  readonly image: string;
  readonly company_name: string;
  readonly twitter: string;
  readonly description: string;
}

export async function getFiatOnRamps(
  locale: string,
): Promise<readonly FiatOnRamp[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/fiat-on-ramps/${locale}.json`),
      () => getJSON(`_dynamic/fiat-on-ramps/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getFiatOnRamps failed!", {
      cause,
    });
  }
}

export async function getFiatOnRampByFilename(
  filename: string,
  locale: string,
): Promise<FiatOnRamp> {
  try {
    return await getFirst(
      () => getYAML(`fiat-on-ramps/${locale}/${filename}.yml`),
      () => getYAML(`fiat-on-ramps/${defaultLocale}/${filename}.yml`),
    );
  } catch (cause) {
    throw new Error(`FiatOnRamp not found! ${filename}`, {
      cause,
    });
  }
}
