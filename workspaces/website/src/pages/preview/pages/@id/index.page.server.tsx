
import { getPageById } from "@starknet-io/cms-data/src/pages";
import { getDefaultPageContext } from "src/renderer/helpers";
import { PageContextServer } from "src/renderer/types";
import { Props } from "./index.page";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);

  const pageProps: Props = {
    data: await getPageById(pageContext.routeParams.id, "en")
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps
    },
  };
}
