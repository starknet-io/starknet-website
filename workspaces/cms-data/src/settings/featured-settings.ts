/**
 * Module dependencies.
 */

import { getJSON } from "@starknet-io/cms-utils/src/index";

/**
 * Export FeaturedSections type. 
 */

export type FeaturedSections = string[]

/**
 * Export `getFeaturedSections` function.
 */
export async function getFeaturedSections(
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<FeaturedSections> {
  try {
    const sections = await getJSON("data/featured-sections/featured-sections", context)

    return sections.items.map((item: { category: string }) => item.category);
  } catch (cause) {
    throw new Error("getFeaturedSection failed!", {
      cause,
    });
  }
}
