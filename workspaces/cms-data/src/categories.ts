import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";

export interface Category {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
}

export async function getCategories(
  locale: string
): Promise<readonly Category[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          (await fetch(`/data/categories/${value}.json`)).json()
      )
    );
  } catch (cause) {
    throw new Error("getCategories failed!", {
      cause,
    });
  }
}
