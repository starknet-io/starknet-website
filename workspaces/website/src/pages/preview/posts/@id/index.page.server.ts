import { PageContextServer } from "src/renderer/types";
import { getPostById } from "@starknet-io/cms-data/src/posts";

export async function onBeforeRender(pageContext: PageContextServer) {
  const data = await getPostById(
    pageContext.routeParams.id,
    pageContext.locale,
    pageContext.event
  );

  return {
    pageContext: {
      redirectTo: `${data?.locale}/posts/${
        data?.category ? `${data?.category}/` : ""
      }${data?.slug}`,
    },
  };
}
