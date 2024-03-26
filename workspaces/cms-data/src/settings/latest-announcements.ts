import { getJSON } from "@starknet-io/cms-utils/src/index";

export type LatestAnnouncements = {
  readonly image: string;
  readonly text: string;
  readonly buttonText: string;
  readonly buttonLink: string;
  readonly isActive: boolean;
};

export async function getLatestAnnouncements(
  context: EventContext<{}, any, Record<string, unknown>>
) {
  try {
    const latestAnnouncements = await getJSON(
      "data/latest-announcements/latest-announcements",
      context
    );

    return latestAnnouncements;
  } catch (cause) {
    throw new Error("getFeaturedSection failed!", {
      cause,
    });
  }
}
