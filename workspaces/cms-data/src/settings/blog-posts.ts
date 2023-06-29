import { defaultLocale } from "../i18n/config";
import { getFirst, getJSON } from "@starknet-io/cms-utils/src/index";

export interface BlogPosts {
  readonly custom_featured_post: string;
}

export async function getBlogPosts(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<BlogPosts> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/blog-posts/" + value, event)
      )
    );
  } catch (cause) {
    throw new Error("getBlogPosts failed!", {
      cause,
    });
  }
}
