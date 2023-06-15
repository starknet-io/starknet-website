import { getAnnouncementsPostBySlug } from "@starknet-io/cms-data/src/announcements";
import { getDefaultPageContext } from "src/renderer/helpers";
import { PageContextServer } from "src/renderer/types";
import { AnnouncementPostProps } from "./(components)/AnnouncementPost";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;
  const announcementsPost = await getAnnouncementsPostBySlug(pageContext.routeParams.slug, locale);

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
