import { generateGenericMetadata } from "src/utils/seo";
import AnnouncementsPage from "../announcements/(components)/AnnouncementsPage";
import { getAnnouncements } from "workspaces/cms-data/src/announcements";

export const generateMetadata = () => generateGenericMetadata("Announcements");

export default async function Page(props: LocaleProps) {
  const announcements = await getAnnouncements(props.params.locale);
  return (
    <AnnouncementsPage
      announcements={announcements}
      locale={props.params.locale}
    />
  );
}
