import type { TopLevelBlock } from "@starknet-io/cms-data/src/pages";
import { BasicCard } from "./cards/BasicCard";
import { PatternCard } from "../components/Card/PatternCard";
import { IconLinkCardBlock } from "./IconLinkCardBlock";
import { LargeCardsBlock } from "./LargeCardsBlock";
import { StatCardsBlock } from "./StatCardsBlock";
import { MarkdownBlock } from "./MarkdownBlock";
import { AmbassadorsList } from "./AmbassadorsList";
import { BlockCards } from "./BlockCards";
import EcosystemBlock from "./EcosystemHomepageBlock";
import SocialHomepageBlock from "./SocialHomepageBlock";
import { BlockCommunityEvents } from "./dataBlocks/BlockCommunityEvents/BlockCommunityEvents";
import { HeroImage } from "@ui/HeroImage/HeroImage";
import { BlockGrouping } from "./BlockGrouping";
import { ImageIconCard } from "../components/Card/ImageIconCard";
import ListCardItems from "./ListCardItems";
import BlockWallets from "./dataBlocks/BlockWallets/BlockWallets";
import { Container } from "./Container";
import { LinkList } from "./LinkList";
import { AccordionItem, AccordionRoot } from "./AccordionBlock";
import { PageHeaderBlock } from "./PageHeaderBlock";
import { OrderedBlock, OrderedBlockItem } from "./OrderedBlock";
import { HomepageHero } from "./HomepageHero";
import { PromoBlock } from "./PromoBlock";
import { getHomeSEO } from "@starknet-io/cms-data/src/seo";
import { useAsync } from "react-streaming";
import { usePageContext } from "src/renderer/PageContextProvider";
import { HeadingContainer } from "./HeadingContainer";
import { AssetCard } from "@ui/Card/AssetCard";

interface Props {
  readonly block: TopLevelBlock;
  readonly locale: string;
}

export function Block({ block, locale }: Props): JSX.Element | null {
  if (block.type === "basic_card") {
    return <BasicCard {...block} locale={locale} />;
  } else if (block.type === "container") {
    return (
      <Container maxWidth={block.max_width}>
        {block.blocks.map((block, i) => (
          <Block key={i} block={block} locale={locale} />
        ))}
      </Container>
    );
  } else if (block.type === "image_icon_link_card") {
    return <ImageIconCard {...block} locale={locale} />;
  } else if (block.type === "icon_link_card") {
    return <IconLinkCardBlock {...block} />;
  } else if (block.type === "large_cards") {
    return <LargeCardsBlock {...block} />;
  } else if (block.type === "stat_cards") {
    return <StatCardsBlock {...block} />;
  } else if (block.type === "asset_card") {
    return <AssetCard {...block} />;
  } else if (block.type === "pattern_card") {
    return <PatternCard {...block} />;
  } else if (block.type === "ecosystem_block") {
    return <EcosystemBlock {...block} />;
  } else if (block.type === "social_block") {
    return <SocialHomepageBlock {...block} />;
  } else if (block.type === "markdown") {
    return <MarkdownBlock body={block.body} />;
  } else if (block.type === "ambassadors_list") {
    return <AmbassadorsList {...block} />;
  } else if (block.type === "community_events") {
    return (
      <BlockCommunityEvents
        params={{
          locale,
        }}
      />
    );
  } else if (block.type === "flex_layout") {
    return (
      <BlockCards
        base={block.base}
        md={block.md}
        lg={block.lg}
        xl={block.xl}
        heading={block.heading}
        headingVariant={block.heading_variant}
        descriptionVariant={block.description_variant}
        description={block.description}
      >
        {block.blocks.map((block, i) => (
          <Block key={i} block={block} locale={locale} />
        ))}
      </BlockCards>
    );
  } else if (block.type === "link_list") {
    return <LinkList {...block} />;
  } else if (block.type === "accordion") {
    return (
      <AccordionRoot heading={block.heading}>
        {block.blocks?.map((block, i) => (
          <AccordionItem key={i} label={block.label}>
            <MarkdownBlock body={block.body} />
          </AccordionItem>
        ))}
      </AccordionRoot>
    );
  } else if (block.type === "ordered_block") {
    let blocks = Array.from(block.blocks || []).sort((a, b) => {
      return a.title.localeCompare(b.title);
    });

    return (
      <OrderedBlock>
        {blocks.map((block: any, i: number) => {
          return (
            <OrderedBlockItem key={i} title={block.title}>
              <MarkdownBlock body={block.body} />
            </OrderedBlockItem>
          );
        })}
      </OrderedBlock>
    );
  } else if (block.type === "page_header") {
    return (
      <PageHeaderBlock title={block.title} description={block.description} />
    );
  } else if (block.type === "group") {
    return (
      <BlockGrouping>
        {block.blocks.map((block, i) => (
          <Block key={i} block={block} locale={locale} />
        ))}
      </BlockGrouping>
    );
  } else if (block.type === "heading_container") {
    return (
      <HeadingContainer
        heading={block.heading}
        headingVariant={block.heading_variant}
      >
        {block.blocks.map((block, i) => (
          <Block key={i} block={block} locale={locale} />
        ))}
      </HeadingContainer>
    );
  } else if (block.type === "hero") {
    return (
      <HeroImage
        title={block.title}
        description={block.description}
        image={block.image}
        buttonText={block.buttonText}
        buttonUrl={block.buttonUrl}
        leftBoxMaxWidth={block.leftBoxMaxWidth}
      />
    );
  } else if (block.type === "home_hero") {
    const pageContext = usePageContext();
    const homeSEO = useAsync(["getBlockExplorers", locale], () =>
      getHomeSEO(locale, pageContext.context)
    );

    return <HomepageHero seo={homeSEO} />;
  } else if (block.type === "promo_block") {
    const pageContext = usePageContext();
    const homeSEO = useAsync(["getBlockExplorers", locale], () =>
      getHomeSEO(locale, pageContext.context)
    );

    return <PromoBlock seo={homeSEO} />;
  } else if (block.type === "card_list") {
    return (
      <AssetCard
        {...block}
        params={{
          locale,
        }}
      />
    );
  } else if (block.type === "wallets") {
    return (
      <BlockWallets
        params={{
          locale,
        }}
      />
    );
  } else {
    // this will report type error if there is unhandled block.type
    block satisfies never;
  }

  return null;
}
