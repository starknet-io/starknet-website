import { usePageContext } from "src/renderer/usePageContext";

export function useLocale() {
  return usePageContext().locale;
}
