import { LinkData } from "src/data/settings/main-menu";

export const titleCase = (s: string) => {
  return s
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => ` ${c.toUpperCase()}`);
};

export function slugify(value: string): string {
  return value
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, "-"); // separator
}

export function youtubeVideoIdFromURL(url: string): string | undefined {
  const obj = new URL(url);

  if (obj.hostname === "www.youtube.com") {
    return obj.searchParams.get("v") ?? undefined;
  } else if (obj.hostname === "youtu.be") {
    return obj.pathname.slice(1);
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("youtubeVideoIdFromURL", () => {
    expect(
      youtubeVideoIdFromURL(
        "https://www.youtube.com/watch?v=-5mPHUVCkZM&ab_channel=ReportingfromUkraine",
      ),
    ).toBe("-5mPHUVCkZM");
    expect(
      youtubeVideoIdFromURL("https://www.youtube.com/watch?v=-5mPHUVCkZM"),
    ).toBe("-5mPHUVCkZM");
    expect(youtubeVideoIdFromURL("https://youtu.be/-5mPHUVCkZM")).toBe(
      "-5mPHUVCkZM",
    );
  });
}

export function getComputedLinkData(
  locale: string,
  link: LinkData,
): { href?: string; label?: string } {
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
    href = `/${locale}/posts/${link.post_data.category}/${link.post_data.slug}`;
  }

  return { href, label };
}
