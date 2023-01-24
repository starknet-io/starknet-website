import { defaultLocale } from "./i18n/config";
import { getFirst, getYAML } from "./utils";

export interface MarkdownBlock {
  readonly type: "markdown";
  readonly body: string;
}
export interface CommunityEventsBlock {
  readonly type: "community_events";
}
export interface DappsBlock {
  readonly type: "dapps";
  readonly noOfItems: number;
}
export interface BasicCardBlock {
  readonly type: "basic_card";
  readonly title: string;
  readonly link_label: string;
  readonly link_href: string;
  readonly size?: "sm" | "md";
}

export interface LargeCardBlock {
  readonly type: "large_card";
  readonly title: string;
  readonly link_label: string;
  readonly link_href: string;
  readonly size?: "sm" | "md";
  readonly description: string;
  readonly image: string;
  readonly orientation?: "left" | "right";
}

export type Block =
  | MarkdownBlock
  | CommunityEventsBlock
  | DappsBlock
  | BasicCardBlock
  | LargeCardBlock;

export interface FlexLayoutBlock {
  readonly type: "flex_layout";
  readonly base?: number;
  readonly md?: number;
  readonly lg?: number;
  readonly xl?: number;
  readonly heading?: string;
  readonly heading_variant?: "sm" | "md" | "lg";
  readonly blocks: readonly Block[];
}

export type TopLevelBlock = Block | FlexLayoutBlock;

export interface Page {
  readonly path: string;
  readonly title: string;
  readonly template: "page" | "article";
  readonly blocks: readonly TopLevelBlock[];
}

export async function getPageByFilename(
  filename: string,
  locale: string
): Promise<Page> {
  try {
    return (await getFirst(
      () => getYAML(`pages/${locale}/${filename}.yml`),
      () => getYAML(`pages/${defaultLocale}/${filename}.yml`)
    )) as Page;
  } catch (cause) {
    throw new Error(`Page not found! ${filename}`, {
      cause,
    });
  }
}

export async function getPageByPage(
  page: string,
  locale: string
): Promise<Page> {
  return getPageByFilename(page.replace(/(^\/|\/$)/g, ""), locale);
}
