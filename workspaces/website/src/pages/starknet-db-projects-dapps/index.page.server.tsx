import { PageContextServer } from "src/renderer/types";
import { getDefaultPageContext } from "src/renderer/helpers";
import { getStarknetDappsDbProjects } from "@starknet-io/cms-data/src/starknet-db-projects-dapps";
export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const starknetDappsDbProjects = await getStarknetDappsDbProjects(
    pageContext.context
  );

  return {
    pageContext: {
      ...defaultPageContext,
      starknetDappsDbProjects,
    },
  };
}
