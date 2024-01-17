import { PageContextServer } from "src/renderer/types";
import { getPostById } from "@starknet-io/cms-data/src/posts";

export async function render(pageContext: PageContextServer) {
  const data = await getPostById(
    pageContext.routeParams.id,
    pageContext.locale,
    pageContext.context
  );

  return {
    pageContext: {
      redirectTo: `/${data?.locale}/content/${
        data?.category ? `category/${data?.category}/` : ""
      }${data?.slug}`,
    },
  };
}
