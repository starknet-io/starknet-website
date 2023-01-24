import { TopLevelBlock } from "src/data/pages";
import { BasicCard } from "./cards/BasicCard";
import { LargeCard } from "./cards/LargeCard";
import { MarkdownBlock } from "./MarkdownBlock";
import { BlockCards } from "./BlockCards";
import { BlockCommunityEvents } from "./dataBlocks/BlockCommunityEvents/BlockCommunityEvents";
import BlockDapps from "./dataBlocks/BlockDapps/BlockDapps";
import { BlockHeroLines } from "./BlockHeroLines";
import { BlockGrouping } from "./BlockGrouping";

interface Props {
  readonly block: TopLevelBlock;
  readonly locale: string;
}

// @ts-expect-error
export async function Block({ block, locale }: Props): JSX.Element {
  if (block.type === "basic_card") {
    return (
      <BasicCard
        title={block.title}
        linkLabel={block.link_label}
        linkHref={block.link_href}
        size={block.size}
      />
    );
  } else if (block.type === "large_card") {
    return (
      <LargeCard
        title={block.title}
        linkLabel={block.link_label}
        linkHref={block.link_href}
        description={block.description}
        image={block.image}
        orientation={block.orientation}
      />
    );
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
          <Block key={i} block={block} locale={locale} />
        ))}
      </BlockCards>
    );
  } else if (block.type === "group") {
    return (
      <BlockGrouping>
        {block.blocks.map((block, i) => (
          <Block key={i} block={block} locale={locale} />
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
  } else if (block.type === "dapps") {
    return (
      <BlockDapps
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
