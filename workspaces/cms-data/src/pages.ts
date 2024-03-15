import { LinkData } from "./settings/main-menu";
import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getShuffledArray } from "@starknet-io/cms-utils/src/index";
import type { Meta } from "@starknet-io/cms-utils/src/index";

export interface MarkdownBlock {
  readonly type: "markdown";
  readonly body: string;
}

export interface CommunityEventsBlock {
  readonly type: "community_events";
}

export interface AmbassadorsListBlock {
  readonly type: "ambassadors_list";
}

export interface BasicCardBlock {
  readonly type: "basic_card";
  readonly title: string;
  readonly link: LinkData;

  readonly size?: "sm" | "md";
}
export interface ImageIconLinkCardBlock {
  readonly type: "image_icon_link_card";
  readonly title: string;
  readonly link: LinkData;
  readonly icon: string;
  readonly description: string;
  readonly color?:
    | "blue-default"
    | "orange"
    | "blue"
    | "purple"
    | "peach"
    | "cyan"
    | "pink"
    | "grey";
}

export interface YoutubeBlock {
  readonly type: "youtube";
  readonly videoId: string;
}

export interface ListCardItems {
  title: string;
  description: string;
  image: string;
  website_url: string;
  twitter: string;
  start_date_time: string;
  location: string;
  city: string;
  discord: string;
  type_list: {
    type: string;
    url: string;
  }[];
  type: string;
}

export interface ListCardItemsBlock {
  readonly type: "card_list";
  readonly title: string;
  readonly card_list_items: ListCardItems[];
  readonly noOfItems: number;
  readonly description: string;
  randomize?: boolean;
}

export interface LinkListItem {
  readonly type: "link_list_item";
  readonly link?: {
    custom_title?: string;
    custom_icon?: string;
    custom_internal_link?: string;
    custom_external_link?: string;
    page?: string;
    post?: string;
    hasIcon?: boolean;
  };
  readonly subLabel?: {
    readonly label?: string;
    readonly boldLabel?: string;
  };
  readonly avatar?: {
    readonly title?: string;
    readonly displayTitle?: boolean;
    readonly url?: string;
  };
}

export interface AccordionItem {
  readonly type: "accordion_item";
  readonly label: string;
  readonly body: string;
}
export interface OrderedItem {
  readonly type: "ordered_item";
  readonly title: string;
  readonly body: MarkdownBlock;
}
export interface PageHeaderBlock {
  readonly type: "page_header";
  readonly title: string;
  readonly description: string;
}

export interface HeroBlock {
  readonly type: "hero";
  readonly title: string;
  readonly description: string;
  readonly variant?:
    | "wallets"
    | "block_explorers"
    | "bridges"
    | "dapps"
    | "learn"
    | "build"
    | "community"
    | "nodes_and_services"
    | "security";
  readonly buttonText?: string;
  readonly buttonUrl?: string;
  readonly leftBoxMaxWidth?: number;
}
export interface HomeHeroBlock {
  readonly type: "home_hero";
  readonly seo: {
    readonly heroText: string;
  };
}
export interface LinkListBlock {
  readonly type: "link_list";
  readonly heading?: string;
  readonly listSize?: "sm" | "md" | "lg";
  readonly listGap?: "sm" | "md" | "lg";
  randomize?: boolean;
  readonly blocks?: readonly LinkListItem[];
}
export interface AccordionBlock {
  readonly type: "accordion";
  readonly heading?: string;
  readonly blocks: readonly AccordionItem[];
}
export interface OrderedBlock {
  readonly type: "ordered_block";
  readonly blocks: readonly OrderedItem[];
}

export interface ChapterInfo {
  content: MarkdownBlock['body'];
  subtitle: string;
  title: string;
};

export interface VideoSectionBlock {
  readonly type: "video_section";
  readonly 'scaling-eth': ChapterInfo;
  readonly sequencer: ChapterInfo;
  readonly prover: ChapterInfo;
  readonly 'eth-settlement': ChapterInfo;
  readonly chapterDescriptionFullWidth: boolean;
  readonly playlistOnBottom: boolean;
}

export interface NewsletterBlock {
  readonly type: "newsletter_popup";
  readonly title: string;
  readonly description: string;
}

export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type Block =
  | MarkdownBlock
  | CommunityEventsBlock
  | BasicCardBlock
  | ImageIconLinkCardBlock
  | YoutubeBlock
  | HeroBlock
  | HomeHeroBlock
  | LinkListBlock
  | PageHeaderBlock
  | AccordionBlock
  | OrderedBlock
  | ListCardItemsBlock
  | AmbassadorsListBlock
  | VideoSectionBlock
  | NewsletterBlock;

export interface Container {
  readonly type: "container";
  readonly max_width: number;
  readonly blocks: readonly Block[];
}
export interface FlexLayoutBlock {
  readonly type: "flex_layout";
  readonly base?: number;
  readonly md?: number;
  readonly lg?: number;
  readonly xl?: number;
  readonly heading?: string;
  readonly heading_variant?: HeadingVariant;
  readonly blocks: readonly Block[];
}
export interface GroupBlock {
  readonly type: "group";
  readonly blocks: readonly Block[];
}
export interface HeadingContainerBlock {
  readonly type: "heading_container";
  readonly heading: string;
  readonly heading_variant: HeadingVariant;
  readonly blocks: readonly Block[];
}

export type TopLevelBlock = Block | FlexLayoutBlock | GroupBlock | Container | HeadingContainerBlock;

export interface Page extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly link: string;
  readonly title: string;
  readonly show_title?: boolean;
  readonly hideToc?: boolean;
  readonly template: "landing" | "content" | "narrow content";
  readonly tocCustomTitle?: string;
  readonly hidden_page: boolean;
  readonly breadcrumbs: boolean;
  readonly breadcrumbs_data?: readonly Omit<Page, "blocks">[];
  readonly pageLastUpdated: boolean;
  readonly page_last_updated?: string;
  readonly blocks?: readonly TopLevelBlock[]; // blocks can be undefined in live previews
}

const getPageWithRandomizedData = (data: Page): Page => {
  const randomizedData = {...data}
  randomizedData.blocks?.forEach((block: TopLevelBlock) => {

    if (block.type === 'link_list' && block.randomize) {
      //@ts-expect-error
      block.blocks = getShuffledArray(block.blocks || []);
    } else if (block.type === 'card_list' && block.randomize) {
      //@ts-expect-error
      block.card_list_items = getShuffledArray(block.card_list_items || []);
    }
  })

  return randomizedData
}
export async function getPageBySlug(
  slug: string,
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<Page> {
  try {
    const data = await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          getJSON("data/pages/" + value + "/" + slug, context)
      )
    );

    return getPageWithRandomizedData(data)
  } catch (cause) {
    throw new Error(`Page not found! ${slug}`, {
      cause,
    });
  }
}

export async function getPageById(
  id: string,
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<Page> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/pages/" + value + "/" + id, context)
      )
    );
  } catch (cause) {
    throw new Error(`Page not found! \${id}`, {
      cause,
    });
  }
}
