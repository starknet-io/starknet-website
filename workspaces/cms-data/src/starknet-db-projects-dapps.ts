import { getJSON } from "@starknet-io/cms-utils/src/index";
export interface Project {
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly description: string;
  readonly image: string;
  readonly network: {
    readonly website?: string;
    readonly github?: string;
    readonly twitter?: string;
    readonly twitterImage?: string;
    readonly twitterBanner?: string;
    readonly medium?: string;
    readonly discord?: string;
    readonly telegram?: string;
  };
  readonly tags: string[];
  readonly socialMetrics: {
    readonly twitterFollower: number;
    readonly twitterCount: number;
    readonly tweetWithStarknet: number;
    readonly socialActivity: number;
    readonly date: number;
  };
  readonly isLive: boolean;
  readonly isHidden: boolean;
  readonly isTestnetLive: boolean;
}
export interface TagObject {
  label: string;
  slug: string;
}
export interface DappsProps {
  readonly list: Project[];
  readonly categories: TagObject[];
}
export async function getStarknetDappsDbProjects(
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<DappsProps> {
  try {
    const sections = await getJSON(
      "data/starknet-db-projects-dapps/starknet-db-projects-dapps",
      context
    );
    return sections;
  } catch (cause) {
    throw new Error("getStarknetDappsDbProjects failed!", {
      cause,
    });
  }
}
