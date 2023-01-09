import { defaultLocale } from "./i18n";
import { getFirst, getJSON, getMDXModule } from "./utils";

interface Topic {
  readonly id: string;
  readonly name: string;
}

export async function getTopics(locale: string): Promise<readonly Topic[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/topics/${locale}/.json`),
      () => getJSON(`_dynamic/topics/${defaultLocale}/.json`),
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
      () => getMDXModule(`topics/${locale}/${filename}.md`),
      () => getMDXModule(`topics/${defaultLocale}/${filename}.md`),
    );
  } catch (cause) {
    throw new Error(`Topic not found! ${filename}`, {
      cause,
    });
  }
}
