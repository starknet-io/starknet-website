import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON } from "./utils";

export interface Topic {
  readonly id: string;
  readonly name: string;
}

export async function getTopics(locale: string): Promise<readonly Topic[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/topics/${locale}.json`),
      () => getJSON(`_dynamic/topics/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getTopics failed!", {
      cause,
    });
  }
}
