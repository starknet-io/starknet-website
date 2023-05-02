import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";
import path from "node:path";

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
}

export async function getEvents(locale: string): Promise<readonly Event[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(process.cwd(), "_crowdin/data/events", value + ".json"),
              "utf8"
            )
          )
      )
    );
  } catch (cause) {
    throw new Error("getEvents failed!", {
      cause,
    });
  }
}
