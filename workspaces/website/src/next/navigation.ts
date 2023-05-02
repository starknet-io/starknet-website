import { usePageContext } from "src/renderer/usePageContext";

export function usePathname () {
  return usePageContext().urlPathname
}

export function notFound () {
  throw new Error("Page Not Found!")
}
