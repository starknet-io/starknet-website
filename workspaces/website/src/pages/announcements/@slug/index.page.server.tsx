import { getAnnouncementsPostBySlug } from "@starknet-io/cms-data/src/announcements";
import { getDefaultPageContext } from "src/renderer/helpers";
import { PageContextServer } from "src/renderer/types";
import { AnnouncementPostProps } from "./(components)/AnnouncementPost";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;
  const announcementsPost = await getAnnouncementsPostBySlug(locale, pageContext.routeParams.slug, pageContext.event);

  const pageProps: AnnouncementPostProps = {
    announcementsPost,
    locale,
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
    },
  };
}
