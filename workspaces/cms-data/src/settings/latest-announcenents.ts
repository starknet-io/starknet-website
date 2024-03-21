import { getJSON } from "@starknet-io/cms-utils/src/index";

export type LatestAnnouncements = {
  image: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}[];

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
    return sections;
  } catch (cause) {
    throw new Error("getFeaturedSection failed!", {
      cause,
    });
  }
}
