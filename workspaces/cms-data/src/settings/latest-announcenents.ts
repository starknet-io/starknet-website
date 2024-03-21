import { getJSON } from "@starknet-io/cms-utils/src/index";

export type FeaturedSections = string[];

/**
 * Export `getFeaturedSections` function.
 */
export async function getLatestAnnouncements(
  context: EventContext<{}, any, Record<string, unknown>>
) {
  try {
    const sections = await getJSON(
      "data/latest-announcements/latest-announcements",
      context
    );
    console.log("sections", sections);
    return;
    // return sections.items.map((item: { category: string }) => item.category);
  } catch (cause) {
    throw new Error("getFeaturedSection failed!", {
      cause,
    });
  }
}
