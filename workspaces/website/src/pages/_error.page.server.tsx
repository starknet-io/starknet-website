import { getDefaultPageContext } from "src/renderer/helpers";
import { PageContextServer } from "src/renderer/types";

export async function onBeforeRender(pageContext: PageContextServer) {
  return {
    pageContext: await getDefaultPageContext(pageContext),
  };
}
