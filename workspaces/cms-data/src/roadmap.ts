import { defaultLocale } from "./i18n/config";
import { Meta, getFirst, getJSON } from "@starknet-io/cms-utils/src/index";
import { TopLevelBlock } from "./pages";

export interface RoadmapDetails extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly version: string;
  readonly stage: string;
  readonly availability: string;
}
export interface RoadmapPost extends Meta, RoadmapDetails {
  readonly blocks: readonly TopLevelBlock[];
}

export interface RoadmapVersion extends Meta {
  readonly id: string;
  readonly version: string;
  readonly impact: string;
  readonly color: string;
}

export async function getRoadmapDetails(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<readonly RoadmapDetails[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON(`data/roadmap-details/${value}`, event)
      )
    );
  } catch (cause) {
    throw new Error("getRoadmapDetails failed!", {
      cause,
    });
  }
}

export async function getRoadmapPostBySlug(
  locale: string,
  slug: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<RoadmapPost> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON(`data/roadmap-posts/${value}/${slug}`, event)
      )
    );
  } catch (cause) {
    throw new Error(`Roadmap Post not found! ${slug}`, {
      cause,
    });
  }
}

export async function getRoadmapVersions(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<readonly RoadmapVersion[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/roadmap-versions/" + value, event)
      )
    );
  } catch (cause) {
    throw new Error("getRoadmapVersions failed!", {
      cause,
    });
  }
}
