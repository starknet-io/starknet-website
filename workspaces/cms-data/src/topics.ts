import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";

export interface Topic {
  readonly id: string;
  readonly name: string;
}

export async function getTopics(locale: string): Promise<readonly Topic[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          (await fetch(`/data/topics/${locale}.json`)).json()
      )
    );
  } catch (cause) {
    throw new Error("getTopics failed!", {
      cause,
    });
  }
}
