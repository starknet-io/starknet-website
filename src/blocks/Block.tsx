import type { TopLevelBlock } from "@starknet-io/cms-data/src/pages";
import { BasicCard } from "./cards/BasicCard";
import { MarkdownBlock } from "./MarkdownBlock";
import { BlockCards } from "./BlockCards";
import { BlockCommunityEvents } from "./dataBlocks/BlockCommunityEvents/BlockCommunityEvents";
import { HeroImage } from "@ui/HeroImage/HeroImage";
import { BlockGrouping } from "./BlockGrouping";
import { ImageIconCard } from "../components/Card/ImageIconCard";
import BlockDapps from "./dataBlocks/BlockDapps/BlockDapps";
import BlockBlockExplorers from "./dataBlocks/BlockBlockExplorers/BlockBlockExplorers";
import ListCardItems from "./ListCardItems";
import BlockBridges from "./dataBlocks/BlockBridges/BlockBridges";
import BlockOnRamps from "./dataBlocks/BlockOnRamps/BlockOnRamps";
import BlockWallets from "./dataBlocks/BlockWallets/BlockWallets";
import { Container } from "./Container";
import { LinkList } from "./LinkList";
import { AccordionItem, AccordionRoot } from "./AccordionBlock";
import { PageHeaderBlock } from "./PageHeaderBlock";
import { OrderedBlock, OrderedBlockItem } from "./OrderedBlock";
import { HomepageHero } from "./HomepageHero";
import { BlocksDynamicData } from "src/app/[locale]/(components)/utils/getBlocksDynamicData";

interface Props {
  readonly block: TopLevelBlock;
  readonly locale: string;
  readonly blocksDynamicData: BlocksDynamicData;
}

export function Block({
  block,
  locale,
  blocksDynamicData,
}: // @ts-expect-error
Props): JSX.Element {
  if (block.type === "basic_card") {
    return <BasicCard {...block} locale={locale} />;
  } else if (block.type === "container") {
    return (
      <Container maxWidth={block.max_width}>
        {block.blocks.map((block, i) => (
          <Block
            key={i}
            block={block}
            locale={locale}
            blocksDynamicData={blocksDynamicData}
          />
        ))}
      </Container>
    );
  } else if (block.type === "image_icon_link_card") {
    return <ImageIconCard {...block} locale={locale} {...blocksDynamicData} />;
  } else if (block.type === "markdown") {
    return <MarkdownBlock body={block.body} />;
  } else if (block.type === "community_events") {
    return (
      <BlockCommunityEvents
        params={{
          locale,
        }}
        env={blocksDynamicData.algoliaEnv}
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
      >
        {block.blocks.map((block, i) => (
          <Block
            key={i}
            block={block}
            locale={locale}
            blocksDynamicData={blocksDynamicData}
          />
        ))}
      </BlockCards>
    );
  } else if (block.type === "link_list") {
    return <LinkList {...block} />;
  } else if (block.type === "accordion") {
    return (
      <AccordionRoot heading={block.heading}>
        {block.blocks.map((block, i) => (
          <AccordionItem key={i} label={block.label}>
            <MarkdownBlock body={block.body} />
          </AccordionItem>
        ))}
      </AccordionRoot>
    );
  } else if (block.type === "ordered_block") {
    let blocks = Array.from(block.blocks).sort((a, b) => {
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
          <Block
            key={i}
            block={block}
            locale={locale}
            blocksDynamicData={blocksDynamicData}
          />
        ))}
      </BlockGrouping>
    );
  } else if (block.type === "hero") {
    return (
      <HeroImage
        title={block.title}
        description={block.description}
        variant={block.variant}
        buttonText={block.buttonText}
        buttonUrl={block.buttonUrl}
      />
    );
  } else if (block.type === "home_hero") {
    return <HomepageHero seo={blocksDynamicData.homeSEO} />;
  } else if (block.type === "dapps") {
    return (
      <BlockDapps
        params={{
          locale,
        }}
        dapps={blocksDynamicData.dapps}
      />
    );
  } else if (block.type === "block_explorers") {
    return (
      <BlockBlockExplorers
        params={{
          locale,
        }}
        blockExplorers={blocksDynamicData.blockExplorers}
      />
    );
  } else if (block.type === "card_list") {
    return (
      <ListCardItems
        {...block}
        params={{
          locale,
        }}
      />
    );
  } else if (block.type === "bridges") {
    return (
      <BlockBridges
        params={{
          locale,
        }}
        bridges={blocksDynamicData.bridges}
      />
    );
  } else if (block.type === "on_ramps") {
    return (
      <BlockOnRamps
        params={{
          locale,
        }}
        fiatOnRamps={blocksDynamicData.fiatOnRamps}
      />
    );
  } else if (block.type === "wallets") {
    return (
      <BlockWallets
        params={{
          locale,
        }}
        wallets={blocksDynamicData.wallets}
      />
    );
  } else {
    // this will report type error if there is unhandled block.type
    block satisfies never;
  }
}
