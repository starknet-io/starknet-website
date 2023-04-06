import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";

export interface Event {
  readonly name: string;
  readonly image: string;
  readonly start_date: string;
  readonly end_date?: string;
  readonly location: string;
  readonly city: string;
  readonly venue: string;
  readonly type: string;
  readonly url: string;
  readonly tags: string[];
  readonly description: string;
}

export async function getEvents(locale: string): Promise<readonly Event[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(`_crowdin/data/events/${value}.json`, "utf8")
          )
      )
    );
  } catch (cause) {
    throw new Error("getEvents failed!", {
      cause,
    });
  }
}
