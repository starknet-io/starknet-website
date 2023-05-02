import { locales } from "@starknet-io/cms-data/src/i18n/config";
import { PageContextServer } from "./types";

export function onBeforeRoute(
  pageContext: PageContextServer
) {
  if (pageContext.urlPathname == "/") {
    return {
      pageContext: {
        _pageId: null,
        redirectTo: "/en",
      },
    };
  }

  const urlParts = pageContext.urlPathname.split("/");

  urlParts.shift()

  const locale = urlParts.shift();

  if (locale && locales.includes(locale)) {
    return {
      pageContext: {
        locale,
        urlOriginal: "/" + urlParts.join("/"),
      },
    };
  }

  return {
    pageContext: {
      _pageId: null,
      is404: true
    },
  };
}
