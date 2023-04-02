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
  return value
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase()
    .trim()
    .replaceAll("&", "and") // replace "&" with "and"
    .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, "-"); // separator
}
