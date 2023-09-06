import { getJSON } from "@starknet-io/cms-utils/src";

type SocialMedia = {
  id?: string | number,
  name: string
  followersCount: number
}

export type SocialMediaData = {
  twitter: SocialMedia,
  discord: SocialMedia
}

export async function getSocialMediaData(
    context: EventContext<{}, any, Record<string, unknown>>,
  ): Promise<SocialMediaData> {
    try {
      return getJSON("data/social-media/data", context)
    } catch {
      throw new Error("Social media data not found")
    }
  }
