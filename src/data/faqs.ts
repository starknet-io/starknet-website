import { MDXProps } from "mdx/types";
import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getMDXModule } from "./utils";

interface Faq {
  readonly faq_item: string;
  readonly MDXContent: (props: MDXProps) => JSX.Element;
}

export async function getFaqs(locale: string): Promise<readonly Faq[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/faqs/${locale}.json`),
      () => getJSON(`_dynamic/faqs/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getFaqs failed!", {
      cause,
    });
  }
}

export async function getFaqByFilename(
  filename: string,
  locale: string,
): Promise<Faq> {
  try {
    return await getFirst(
      () => getMDXModule(`faqs/${locale}/${filename}.md`),
      () => getMDXModule(`faqs/${defaultLocale}/${filename}.md`),
    );
  } catch (cause) {
    throw new Error(`Faqs not found! ${filename}`, {
      cause,
    });
  }
}
