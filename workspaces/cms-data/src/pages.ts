import { LinkData } from "./settings/main-menu";
import { defaultLocale } from "./i18n/config";
import {
  getFirst,
  getJSON,
  getShuffledArray,
} from "@starknet-io/cms-utils/src/index";
import type { Meta } from "@starknet-io/cms-utils/src/index";

export interface MarkdownBlock {
  readonly type: "markdown";
  readonly body: string;
}

export interface CommunityEventsBlock {
  readonly type: "community_events";
}

export type AmbassadorTag = {
  tag: string;
};

export interface Ambassador {
  readonly full_name: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly website?: string;
  readonly twitter?: string;
  readonly discord?: string;
  readonly tags?: AmbassadorTag[];
}

export interface AmbassadorsListBlock {
  readonly type: "ambassadors_list";
  readonly title?: string;
  readonly ambassador?: Ambassador[];
}

export interface BasicCardBlock {
  readonly type: "basic_card";
  readonly title: string;
  readonly link: LinkData;

  readonly size?: "sm" | "md";
}

export interface AssetCardBlock {
  readonly type: "asset_card";
  readonly title: string;
  readonly description: string;
  readonly website_url: string;
  readonly twitter: string;
  readonly image: string;
  readonly discord: string;
  readonly img_bg_color: "pink" | "green";
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

export interface IconLinkCardBlock {
  type: "icon_link_card";
  img?: string;
  dark_img?: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  color?: string;
}

type LargeCard = {
  img?: string;
  darkImg?: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
};

export type LargeCardsBlock = {
  readonly type: "large_cards";
  readonly horizontal1: LargeCard;
  readonly horizontal2: LargeCard;
  readonly vertical1: LargeCard;
  readonly vertical2: LargeCard;
};

export interface StatCardsBlock {
  type: "stat_cards";
}

export interface PatternCardBlock {
  readonly type: "pattern_card";
  readonly title: string;
  readonly link: string;
  readonly pattern:
    | "viewallquestions"
    | "howdoesitwork"
    | "whatisstarkex"
    | "whatisstarknet";
}

export interface EcosystemBlock {
  readonly type: "ecosystem_block";
  readonly title: string;
  readonly ctaText: string;
  readonly ctaUrl: string;
}

export interface SocialHomepageBlock {
  readonly type: "social_block";
  readonly title: string;
  readonly description: string;
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
  readonly  border?: boolean;
  readonly lastUpdated?: string | null;
}

export interface HeroBlock {
  readonly type: "hero";
  readonly title: string;
  readonly description: string;
  readonly image: string;
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
export interface PromoBlock {
  readonly type: "promo_block";
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

export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type DescriptionVariant =
  | "cardBody"
  | "body"
  | "breadcrumbs"
  | "footerLink"
  | "textLink";

export type Block =
  | MarkdownBlock
  | CommunityEventsBlock
  | BasicCardBlock
  | ImageIconLinkCardBlock
  | IconLinkCardBlock
  | LargeCardsBlock
  | StatCardsBlock
  | PatternCardBlock
  | EcosystemBlock
  | SocialHomepageBlock
  | HeroBlock
  | HomeHeroBlock
  | PromoBlock
  | LinkListBlock
  | PageHeaderBlock
  | AccordionBlock
  | OrderedBlock
  | AmbassadorsListBlock
  | AssetCardBlock;

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
  readonly description?: string;
  readonly description_variant?: DescriptionVariant;
  readonly blocks: readonly Block[];
  readonly randomize?: boolean;
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

export type TopLevelBlock =
  | Block
  | FlexLayoutBlock
  | GroupBlock
  | Container
  | HeadingContainerBlock;

export interface Page extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly link: string;
  readonly title: string;
  readonly show_title?: boolean;
  readonly toc?: boolean;
  readonly template: "landing" | "content" | "narrow content";
  readonly tocCustomTitle?: string;
  readonly breadcrumbs: boolean;
  readonly breadcrumbs_data?: readonly Omit<Page, "blocks">[];
  readonly pageLastUpdated: boolean;
  readonly page_last_updated?: string;
  readonly blocks?: readonly TopLevelBlock[]; // blocks can be undefined in live previews
}

const getPageWithRandomizedData = (data: Page): Page => {
  const randomizedData = { ...data };
  randomizedData.blocks?.forEach((block: TopLevelBlock) => {
    if (
      (block.type === "link_list" || block.type === "flex_layout") &&
      block.randomize
    ) {
      //@ts-expect-error
      block.blocks = getShuffledArray(block.blocks || []);
    }
  });

  return randomizedData;
};
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

    return getPageWithRandomizedData(data);
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
        (value) => async () =>
          getJSON("data/pages/" + value + "/" + id, context)
      )
    );
  } catch (cause) {
    throw new Error(`Page not found! \${id}`, {
      cause,
    });
  }
}
