import path from "node:path";
import { defaultLocale } from "../i18n/config";
import type { Page } from "../pages";
import type { Post } from "../posts";
import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";

export interface MainMenu {
  readonly items: MainMenuItem[];
}

export interface MainMenuItem {
  readonly title: string;
  readonly columns?: Column[];
}

export interface Column {
  readonly blocks?: Block[];
}

export interface Block {
  readonly title?: string;
  readonly items?: BlockItem[] | null;
}

export interface LinkData {
  readonly custom_title?: string;
  readonly custom_icon?: string;
  readonly custom_internal_link?: string;
  readonly custom_external_link?: string;

  readonly page?: string;
  readonly page_data?: Omit<Page, "blocks">;
  readonly post?: string;
  readonly post_data?: Omit<Post, "blocks" | "body">;
}

export interface BlockItem extends LinkData {
  readonly hide_from_footer?: boolean;
}

export async function getMainMenu(locale: string): Promise<MainMenu> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(
                process.cwd(),
                "_crowdin/data/main-menu",
                value + ".json"
              ),
              "utf8"
            )
          )
      )
    );
  } catch (cause) {
    throw new Error("getMainMenu failed!", {
      cause,
    });
  }
}
