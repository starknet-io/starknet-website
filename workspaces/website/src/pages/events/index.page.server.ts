import { DocumentProps, PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/events/EventsPage";
import { getDefaultPageContext } from "src/renderer/helpers";
import { generateGenericMetadata } from "src/utils/seo";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;

  const pageProps: Props = {
    mode: "UPCOMING_EVENTS",
    seo: defaultPageContext.seo.events,
    env: {
      ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
      ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
      ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
    },
    params: {
      locale,
    },
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
      documentProps: generateGenericMetadata("Events") satisfies DocumentProps,
    },
  };
}
