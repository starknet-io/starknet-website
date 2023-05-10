import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";
import path from "node:path";

export interface BlogPosts {
  readonly featured_post: string;
}

export async function getBlogPosts(locale: string): Promise<BlogPosts> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(
                process.cwd(),
                "_crowdin/data/blog-posts",
                value + ".json"
              ),
              "utf8"
            )
          )
      )
    );
  } catch (cause) {
    throw new Error("getBlogPosts failed!", {
      cause,
    });
  }
}
