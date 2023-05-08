import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";
import { usePageContext } from "src/renderer/usePageContext";

export function useLocale() {
  return usePageContext().locale ?? defaultLocale;
}
