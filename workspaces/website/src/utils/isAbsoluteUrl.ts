export function isAbsoluteURL(url: string) {
  try {
    // Creating a new URL with the provided string will throw an error if it's not an absolute URL
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
