import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON } from "@starknet-io/cms-utils/src/index";

export interface Topic {
  readonly id: string;
  readonly name: string;
}

export async function getTopics(locale: string): Promise<readonly Topic[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/topics/" + value)
      )
    );
  } catch (cause) {
    throw new Error("getTopics failed!", {
      cause,
    });
  }
}
