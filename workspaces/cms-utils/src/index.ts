import type { DefaultLogFields } from "simple-git";

export function youtubeVideoIdFromURL(url: string): string | undefined | void {
  try {
    const obj = new URL(url);

    if (obj.hostname === "www.youtube.com" || obj.hostname === "youtube.com") {
      if (obj.searchParams.get("v")) return obj.searchParams.get("v")!;

      if (obj.pathname.startsWith("/live/")) {
        return obj.pathname.replace("/live/", "");
      }
      if (obj.pathname.startsWith("/embed/")) {
        return obj.pathname.replace("/embed/", "");
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
      console.log(err);
      cause.push(err);
    }
  }

  throw new Error(
    "getFirst failed! SSR: " + JSON.stringify(import.meta.env.SSR),
    {
      cause,
    }
  );
}

export async function getJSON(
  src: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<any> {
  if (import.meta.env.SSR || context) {
    if (context) {
      const res = await context.env.ASSETS.fetch(
        new URL("/" + src + ".json", "http://localhost:3000")
      );

      return res.json();
    } else if (import.meta.env.DEV) {
      const fs = await import("node:fs/promises");
      const path = await import("node:path");

      return JSON.parse(
        await fs.readFile(
          path.join(process.cwd(), "../../public", src + ".json"),
          "utf8"
        )
      );
    } else {
      const res = await fetch(
        import.meta.env.VITE_SITE_URL + "/" + src + ".json"
      );
      return res.json();
    }
  }

  const res = await fetch("/" + src + ".json");
  return res.json();
}

export const convertStringTagsToArray = (commaSeperatedTags: string = "") => {
  return commaSeperatedTags
    .replace(/,\s*$/, "")
    .split(",")
    .map((t: string) => t.trim());
};

export function getShuffledArray<T>(_array: readonly T[]) {
  const array = _array.slice(0);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
