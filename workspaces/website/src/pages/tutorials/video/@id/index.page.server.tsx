import { PageContextServer } from "src/renderer/types";
import { Props } from "./(components)/TutorialVideoPage";
import { getDefaultPageContext } from "src/renderer/helpers";
import { DocumentProps } from "src/renderer/types";
import { getTutorialById } from "@starknet-io/cms-data/src/tutorials";

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;
  const tutorial = await getTutorialById(pageContext.routeParams.id, locale);

  const pageProps: Props = {
    tutorial,
    params: {
      locale,
      id: pageContext.routeParams.id ?? ''  
    }
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
      documentProps: {
        title: tutorial.title,
      } satisfies DocumentProps,
    },
  };
}
