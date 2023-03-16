import { defaultLocale } from "../i18n/config";
import { getFirst, getJSON } from "../utils";

export interface Alert {
  readonly title: string;
  readonly children: React.ReactNode;
  readonly toId?: string;
  readonly variant?: 'important' | 'info' | 'warning';
  readonly hasCloseButton?: boolean;
  readonly id: string;
}

export async function getAlerts(locale: string): Promise<Alert[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/alert/${locale}.json`),
      () => getJSON(`_dynamic/alert/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getAlerts failed!", {
      cause,
    });
  }
}
