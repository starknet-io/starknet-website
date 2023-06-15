import { preRenderedLocales } from "@starknet-io/cms-data/src/i18n/config";
import { notFound } from "next/navigation";
import AnnouncementPost from "./(components)/AnnouncementPost";
import {
  getAnnouncementsPostBySlug,
  getAnnouncements,
} from "workspaces/cms-data/src/announcements";
import getBlocksDynamicData from "../../(components)/utils/getBlocksDynamicData";

export async function generateStaticParams() {
  const params = [];

  for (const locale of preRenderedLocales) {
    const announcements = await getAnnouncements(locale);
    for (const post of announcements) {
      params.push({
        locale,
        slug: post.slug,
      });
    }
  }

  return params;
}

export interface Props {
  readonly params: LocaleParams & {
    readonly slug: string;
  };
}

export default async function Page({
  params: { slug, locale },
}: Props): Promise<JSX.Element> {
  try {
    const announcementsPost = await getAnnouncementsPostBySlug(slug, locale);
    const blocksDynamicData = await getBlocksDynamicData(locale);
    return (
      <AnnouncementPost
        announcementsPost={announcementsPost}
        locale={locale}
        blocksDynamicData={blocksDynamicData}
      />
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}
