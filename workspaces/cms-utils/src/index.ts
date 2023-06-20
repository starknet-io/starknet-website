import { DefaultLogFields } from "simple-git";

export function youtubeVideoIdFromURL(url: string): string | undefined | void {
  try {
    const obj = new URL(url);

    if (obj.hostname === "www.youtube.com") {
      if (obj.searchParams.get("v")) return obj.searchParams.get("v")!;

      if (obj.pathname.startsWith("/live/")) {
        return obj.pathname.replace("/live/", "");
      }
    } else if (obj.hostname === "youtu.be") {
      return obj.pathname.slice(1);
    }
  } catch {
    console.log("youtubeVideoIdFromURL", url);
  }
}

export function slugify(value: string): string {
  return String(value)
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase()
    .trim()
    .replaceAll("&", "and") // replace "&" with "and"
    .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, "-"); // separator
}

export interface Meta {
  readonly gitlog?: DefaultLogFields | undefined | null;
  readonly sourceFilepath: string;
  readonly locale: string;
}

export async function getFirst<T>(...fns: Array<() => Promise<T>>): Promise<T> {
  let cause = [];

  for (const fn of fns) {
    try {
      return await fn();
    } catch (err) {
      cause.push(err);
    }
  }

  throw new Error("getFirst failed!", {
    cause,
  });
}

export const convertStringTagsToArray = (commaSeperatedTags: string = "") => {
  return commaSeperatedTags
    .replace(/,\s*$/, "")
    .split(",")
    .map((t: string) => t.trim());
};
