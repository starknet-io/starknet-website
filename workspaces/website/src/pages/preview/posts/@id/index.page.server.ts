
import { getDefaultPageContext } from "src/renderer/helpers";
import { PageContextServer } from "src/renderer/types";
import { Props } from "./index.page";
import { getPostById } from "@starknet-io/cms-data/src/posts";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);

  const pageProps: Props = {
    data: await getPostById(pageContext.routeParams.id, "en"),
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps
    },
  };
}
