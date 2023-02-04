import { TopLevelBlock } from "src/data/pages";
import { BasicCard } from "./cards/BasicCard";

import { MarkdownBlock } from "./MarkdownBlock";
import { BlockCards } from "./BlockCards";
import { BlockCommunityEvents } from "./dataBlocks/BlockCommunityEvents/BlockCommunityEvents";
import { BlockHeroLines } from "./BlockHeroLines";
import { BlockGrouping } from "./BlockGrouping";
import { CommunityCard } from "./cards/CommunityCard";
import { IconLinkCard } from "./cards/IconLinkCard";
import { ImageIconCard } from "./cards/ImageIconCard";
import BlockDapps from "./dataBlocks/BlockDapps/BlockDapps";
import BlockBlockExplorers from "./dataBlocks/BlockBlockExplorers/BlockBlockExplorers";
import BlockBridges from "./dataBlocks/BlockBridges/BlockBridges";
import BlockOnRamps from "./dataBlocks/BlockOnRamps/BlockOnRamps";
import BlockWallets from "./dataBlocks/BlockWallets/BlockWallets";
import { LargeCard } from "./cards/LargeCard";
import { Container } from "./Container";
import { LinkList, LinkListItem } from "./LinkList";
import { AccordionItem, AccordionRoot } from "./AccordionBlock";
import { PageHeaderBlock } from "./PageHeaderBlock";
import { OrderedBlock, OrderedBlockItem } from "./OrderedBlock";
import { HomepageHero } from "./HomepageHero";

interface Props {
  readonly block: TopLevelBlock;
  readonly locale: string;
}

// @ts-expect-error
export async function Block({ block, locale }: Props): JSX.Element {
  if (block.type === "basic_card") {
    return <BasicCard {...block} locale={locale} />;
  } else if (block.type === "large_card") {
    return <LargeCard {...block} locale={locale} />;
  } else if (block.type === "icon_link_card") {
    return <IconLinkCard {...block} locale={locale} />;
  } else if (block.type === "container") {
    return (
      <Container maxWidth={block.max_width}>
        {block.blocks.map((block, i) => (
          <Block key={block.type} block={block} locale={locale} />
        ))}
      </Container>
    );
  } else if (block.type === "image_icon_link_card") {
    return <ImageIconCard {...block} locale={locale} />;
  } else if (block.type === "markdown") {
    return <MarkdownBlock body={block.body} />;
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
      >
        {block.blocks.map((block, i) => (
          <Block key={block.type} block={block} locale={locale} />
        ))}
      </BlockCards>
    );
  } else if (block.type === "link_list") {
    return (
      <LinkList heading={block.heading}>
        {block.blocks.map((block, i) => (
          <LinkListItem
            key={block.type}
            label={block.label}
            isExternal={block.is_external}
            href={block.href}
            subLabel={block.sub_label}
          />
        ))}
      </LinkList>
    );
  }
  // else if (block.type === "link_list_item") {
  //   return (
  //     <LinkListItem
  //       label={block.label}
  //       isExternal={block.is_external}
  //       href={block.href}
  //       subLabel={block.sub_label}
  //     />
  //   );
  // }
  else if (block.type === "accordion") {
    return (
      <AccordionRoot heading={block.heading}>
        {block.blocks.map((block, i) => (
          <AccordionItem key={block.type} label={block.label}>
            <>{block.body} </>
          </AccordionItem>
        ))}
      </AccordionRoot>
    );
  }
  // else if (block.type === "accordion_item") {
  //   return (
  //     <AccordionItem label={block.label}>
  //       <>{block.body} </>
  //     </AccordionItem>
  //   );
  // }
  else if (block.type === "ordered_block") {
    let newBlocks = block.blocks;
    // @ts-ignore - will fix types later
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    let alphabeticalBlocks = newBlocks.sort((a: any, b: any) => {
      if (a.title < b.title) {
        return -1;
      }
    });
    return (
      <OrderedBlock>
        {/* rome-ignore lint/suspicious/noExplicitAny: <explanation> */}
        {alphabeticalBlocks.map((block: any, i: number) => {
          console.log(block);
          return (
            <OrderedBlockItem key={block.type} title={block.title}>
              <>{block.body} </>
            </OrderedBlockItem>
          );
        })}
      </OrderedBlock>
    );
  }

  // else if (block.type === "ordered_item") {
  //   return (
  //     <OrderedBlockItem title={block.title}>
  //       <>{block.body} </>
  //     </OrderedBlockItem>
  //   );
  // }
  else if (block.type === "page_header") {
    return (
      <PageHeaderBlock title={block.title} description={block.description} />
    );
  } else if (block.type === "group") {
    return (
      <BlockGrouping>
        {block.blocks.map((block, i) => (
          <Block key={block.type} block={block} locale={locale} />
        ))}
      </BlockGrouping>
    );
  } else if (block.type === "hero") {
    return (
      <BlockHeroLines
        title={block.title}
        description={block.description}
        variant={block.variant}
      />
    );
  } else if (block.type === "home_hero") {
    return <HomepageHero />;
  } else if (block.type === "get_involved_card") {
    return <CommunityCard {...block} locale={locale} />;
  } else if (block.type === "dapps") {
    return (
      <BlockDapps
        params={{
          locale,
        }}
      />
    );
  } else if (block.type === "block_explorers") {
    return (
      <BlockBlockExplorers
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
      />
    );
  } else if (block.type === "on_ramps") {
    return (
      <BlockOnRamps
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
}
