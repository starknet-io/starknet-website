import { MDXProps } from "mdx/types";
import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getMDXModule } from "./utils";

interface Topic {
  readonly glossary_item: string;
  readonly MDXContent: (props: MDXProps) => JSX.Element;
}

export async function getGlossary(locale: string): Promise<readonly Topic[]> {
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
): Promise<Topic> {
  try {
    return await getFirst(
      () => getMDXModule(`glossary/${locale}/${filename}.md`),
      () => getMDXModule(`glossary/${defaultLocale}/${filename}.md`),
    );
  } catch (cause) {
    throw new Error(`Glossary not found! ${filename}`, {
      cause,
    });
  }
}
