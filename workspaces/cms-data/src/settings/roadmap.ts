import { defaultLocale } from "../i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";
import path from "node:path";

export interface Roadmap {
  readonly show_hero_banner: boolean;
  readonly hero_title: string;
  readonly hero_description: string;
  readonly show_hero_cta: boolean;
  readonly hero_cta_copy?: string;
}

export async function getRoadmapSettings(locale: string): Promise<Roadmap[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(
                process.cwd(),
                "_crowdin/data/roadmap",
                value + ".json"
              ),
              "utf8"
            )
          )
      )
    );
  } catch (cause) {
    throw new Error("getRoadmapSettings failed!", {
      cause,
    });
  }
}
