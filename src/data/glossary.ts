import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getYAML } from "./utils";

export interface Glossary {
  readonly glossary_item: string;
  readonly body: string;
}

export async function getGlossary(
  locale: string,
): Promise<readonly Glossary[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/glossary/${locale}.json`),
      () => getJSON(`_dynamic/glossary/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getGlossary failed!", {
      cause,
    });
  }
}

export async function getGlossaryByFilename(
  filename: string,
  locale: string,
): Promise<Glossary> {
  try {
    return await getFirst(
      () => getYAML(`glossary/${locale}/${filename}.yml`),
      () => getYAML(`glossary/${defaultLocale}/${filename}.yml`),
    );
  } catch (cause) {
    throw new Error(`Glossary not found! ${filename}`, {
      cause,
    });
  }
}
