import { TopLevelBlock } from "src/data/pages";
import { BasicCard } from "./cards/BasicCard";
import { LargeCard } from "./cards/LargeCard";
import { MarkdownBlock } from "./MarkdownBlock";
import { BlockCards } from "./BlockCards";
import { BlockCommunityEventsList } from "./dataBlocks/BlockCommunityEvents/(components)/BlockCommunityEventsList";

interface Props {
  readonly block: TopLevelBlock;
  readonly locale: string;
}

export async function Block({ block, locale }: Props) {
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
    // @ts-expect-error
    return <MarkdownBlock body={block.body} />;
  } else if (block.type === "community_events") {
    return (
      <BlockCommunityEventsList
        env={{
          ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
        }}
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
          // @ts-expect-error
          <Block key={i} block={block} />
        ))}
      </BlockCards>
    );
  } else {
    // this will report type error if there is unhandled block.type
    block satisfies never;
  }
}
