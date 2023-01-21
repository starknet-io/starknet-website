import { MDXProps } from "mdx/types";
import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getMDXModule } from "./utils";

interface Topic {
  readonly name: string;
  readonly image: string;
  readonly twitter: string;
  readonly website_url: string;
  readonly description: string;
  readonly MDXContent: (props: MDXProps) => JSX.Element;
}

export async function getDapps(locale: string): Promise<readonly Topic[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/dapps/${locale}.json`),
      () => getJSON(`_dynamic/dapps/${defaultLocale}.json`)
    );
  } catch (cause) {
    throw new Error("getDapps failed!", {
      cause,
    });
  }
}

export async function getDappByFilename(
  filename: string,
  locale: string
): Promise<Topic> {
  try {
    return await getFirst(
      () => getMDXModule(`dapps/${locale}/${filename}.md`),
      () => getMDXModule(`dapps/${defaultLocale}/${filename}.md`)
    );
  } catch (cause) {
    throw new Error(`Dapp not found! ${filename}`, {
      cause,
    });
  }
}
