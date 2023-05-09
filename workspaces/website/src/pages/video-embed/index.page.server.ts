import { PageContextServer } from "src/renderer/types";
import { getDefaultPageContext } from "src/renderer/helpers";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);

  return {
    pageContext: {
      ...defaultPageContext,
      hasLayout: false
    },
  };
}
