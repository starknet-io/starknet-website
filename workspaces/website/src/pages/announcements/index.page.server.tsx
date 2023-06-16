import { getAnnouncementDetails } from "@starknet-io/cms-data/src/announcements";
import { AnnouncementsPageProps } from "src/pages/announcements/(components)/AnnouncementsPage";
import { getDefaultPageContext } from "src/renderer/helpers";
import { PageContextServer } from "src/renderer/types";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;
  const announcements = await getAnnouncementDetails(locale, pageContext.event);

  const pageProps: AnnouncementsPageProps = {
      announcements,
      locale,
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
    },
  };
}
