import { LinkData } from "@starknet-io/cms-data/src/settings/main-menu";

export const titleCase = (s: string = "") => {
  return s
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => ` ${c.toUpperCase()}`);
};

export function getComputedLinkData(
  locale: string,
  link?: LinkData
): { href?: string; label?: string } {
  if(!link){
    return {href: '', label: ''}
  }
  let href;

  const label =
    link.custom_title || link.page_data?.title || link.post_data?.title;

  if (link.custom_external_link) {
    href = link.custom_external_link;
  } else if (link.custom_internal_link) {
    href = `/${locale}/${link.custom_internal_link.replace(/(^\/|\/$)/g, "")}`;
  } else if (link.page_data) {
    href = link.page_data.link;
  } else if (link.post_data) {
    href = `/${locale}/content/${link.post_data.slug}`;
  }

  if(!href){
    href = '#'
  }

  return { href, label };
}

export function loadScript(url: string) {
  return new Promise<void>((resolve, reject) => {
    const head = document.getElementsByTagName("head")[0];
    const script: HTMLScriptElement = document.createElement("script");
    script.src = url;
    script.onload = () => {
      resolve();
    };
    script.onerror = (error) => {
      reject(error);
    };
    head.appendChild(script);
  });
}
