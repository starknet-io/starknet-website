import { getPageById } from "@starknet-io/cms-data/src/pages";
import { PageContextServer } from "src/renderer/types";

export async function render(pageContext: PageContextServer) {
  const data = await getPageById(
    pageContext.routeParams.id,
    pageContext.locale,
    pageContext.event
  );

  return {
    pageContext: {
      redirectTo: data?.link,
    },
  };
}
