import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getYAML } from "./utils";

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

export async function getTopicByFilename(
  filename: string,
  locale: string,
): Promise<Topic> {
  try {
    return await getFirst(
      () => getYAML(`topics/${locale}/${filename}.yml`),
      () => getYAML(`topics/${defaultLocale}/${filename}.yml`),
    );
  } catch (cause) {
    throw new Error(`Topic not found! ${filename}`, {
      cause,
    });
  }
}
