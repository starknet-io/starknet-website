import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON } from "@starknet-io/cms-utils/src/index";

export interface Event {
  readonly name: string;
  readonly image: string;
  readonly start_date: string;
  readonly end_date?: string;
  readonly location: string;
  readonly city: string;
  readonly country: string;
  readonly venue: string;
  readonly type: string;
  readonly url: string;
  readonly tags: string[];
  readonly description: string;
  readonly recap?: {
    readonly label: string;
    readonly link: string;
    readonly isExternal: boolean;
  };
  readonly show_in_past_events?: boolean;
}

export async function getEvents(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<readonly Event[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/events/" + value, event)
      )
    );
  } catch (cause) {
    throw new Error("getEvents failed!", {
      cause,
    });
  }
}
