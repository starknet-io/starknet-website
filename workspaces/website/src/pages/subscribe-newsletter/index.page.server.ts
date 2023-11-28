/**
 * Module dependencies
 */

import { PageContextServer } from "src/renderer/types";
import { Props } from "src/pages/subscribe-newsletter/NewsletterPage";
import { getDefaultPageContext } from "src/renderer/helpers";

/**
 * Export `onBeforeRender` function.
 */

export async function onBeforeRender(pageContext: PageContextServer) {
  const defaultPageContext = await getDefaultPageContext(pageContext);
  const { locale } = defaultPageContext;

  const pageProps: Props = {
    seo: defaultPageContext.seo.newsletter,
    env: {
      CLOUDFLARE_RECAPTCHA_KEY: import.meta.env.VITE_CLOUDFLARE_RECAPTCHA_KEY
    },
    params: {
      locale,
    },
  };

  return {
    pageContext: {
      ...defaultPageContext,
      pageProps,
    },
  };
}
