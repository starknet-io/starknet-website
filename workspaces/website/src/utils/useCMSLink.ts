import { usePageContext } from "src/renderer/PageContextProvider";
import { isAbsoluteURL } from "./isAbsoluteUrl";

export const useCMSLink = (link: string) => {
  const href = link.trim();
  const isAbsolute = isAbsoluteURL(href);
  const pageContext = usePageContext();
  const locale = pageContext.locale;

  if (isAbsolute) {
    return {
      href,
      isAbsolute: true,
    };
  }

  return {
    href: href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`,
    isAbsolute: false,
  };
};
