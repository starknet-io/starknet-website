import { defaultLocale } from "./i18n/config";
import { Meta, getFirst, getJSON } from "@starknet-io/cms-utils/src/index";
import { TopLevelBlock } from "./pages";

export interface AnnouncementDetails extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly badge: string;
}

export interface AnnouncementsPost extends Meta, AnnouncementDetails {
  readonly blocks: readonly TopLevelBlock[];
}


export async function getAnnouncementDetails(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<AnnouncementDetails[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
          (value) => async () => getJSON(`data/announcements-details/${value}`, event)
      )
    );
  } catch (cause) {
    throw new Error(`getAnnouncementDetails failed!`);
  }
}
export async function getAnnouncementsPostBySlug(
  locale: string,
  slug: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<AnnouncementsPost> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
          (value) => async () => getJSON(`data/announcements/${value}/${slug}`, event)
      )
    );
  } catch (cause) {
    throw new Error(`Announcement not found! ${slug}`);
  }
}
