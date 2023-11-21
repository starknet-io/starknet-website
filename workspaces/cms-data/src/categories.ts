import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON } from "@starknet-io/cms-utils/src/index";

export interface Category {
  readonly id: string;
  readonly slug: string;
  readonly parentCategory?: string;
  readonly name: string;
  readonly show_custom_featured_post?: boolean;
  readonly custom_featured_post?: string;
}

export async function getCategories(
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<readonly Category[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/categories/" + value, context)
      )
    );
  } catch (cause) {
    throw new Error("getCategories failed!", {
      cause,
    });
  }
}
