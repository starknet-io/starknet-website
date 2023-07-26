import { defaultLocale } from "../i18n/config";
import { getFirst, getJSON } from "@starknet-io/cms-utils/src/index";

export interface Roadmap {
  readonly show_hero_banner: boolean;
  readonly hero_title: string;
  readonly hero_description: string;
  readonly show_hero_cta: boolean;
  readonly hero_cta_copy?: string;
  readonly roadmap_post_ps?: string;
}

export async function getRoadmapSettings(locale: string, context: EventContext<{}, any, Record<string, unknown>>): Promise<Roadmap> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/roadmap/" + value, context)
      )
    );
  } catch (cause) {
    throw new Error("getRoadmapSettings failed!", {
      cause,
    });
  }
}
