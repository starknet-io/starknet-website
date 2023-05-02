import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";

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
  getJSON?: (src: string) => Promise<any>
): Promise<readonly FiatOnRamp[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/fiat-on-ramps/" + value)
      )
    );
  } catch (cause) {
    throw new Error("getFiatOnRamps failed!", {
      cause,
    });
  }
}
