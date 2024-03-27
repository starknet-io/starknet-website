import type { TopLevelBlock } from "@starknet-io/cms-data/src/pages";
import { BasicCard } from "./cards/BasicCard";
import { MarkdownBlock } from "./MarkdownBlock";
import { AmbassadorsList } from "./AmbassadorsList";
import { BlockCards } from "./BlockCards";
import { BlockCommunityEvents } from "./dataBlocks/BlockCommunityEvents/BlockCommunityEvents";
import { HeroImage } from "@ui/HeroImage/HeroImage";
import { BlockGrouping } from "./BlockGrouping";
import { ImageIconCard } from "../components/Card/ImageIconCard";
import ListCardItems from "./ListCardItems";
import { Container } from "./Container";
import { LinkList } from "./LinkList";
import { AccordionItem, AccordionRoot } from "./AccordionBlock";
import { PageHeaderBlock } from "./PageHeaderBlock";
import { OrderedBlock, OrderedBlockItem } from "./OrderedBlock";
import { HomepageHero } from "./HomepageHero";
import { getHomeSEO } from "@starknet-io/cms-data/src/seo";
import { useAsync } from "react-streaming";
import { usePageContext } from "src/renderer/PageContextProvider";
import { HeadingContainer } from "./HeadingContainer";
import VideoSectionBlock from "./VideoSectionBlock";
import { NewsletterCard } from "@ui/Card/NewsletterCard";
import { YoutubePlayer } from "@ui/YoutubePlayer/YoutubePlayer";
import NavbarStickyBanner from "../pages/(components)/NavbarStickyBanner/NavbarStickyBanner";

export enum BlockPlacements {
  DEFAULT = "DEFAULT",
  NAVBAR = "NAVBAR",
}

interface Props {
  placement?: BlockPlacements;
  disallowH1?: boolean;
  readonly block: TopLevelBlock;
  env: {
    CLOUDFLARE_RECAPTCHA_KEY: string;
  };
  readonly locale: string;
}

export function Block({
  placement = BlockPlacements.DEFAULT,
  disallowH1,
  block,
  env,
  locale,
}: Props): JSX.Element | null {
  switch (placement) {
    case BlockPlacements.DEFAULT:
      switch (block.type) {
        case "basic_card":
          return <BasicCard {...block} locale={locale} />;

        case "container":
          return (
            <Container maxWidth={block.max_width}>
              {block.blocks.map((block, i) => (
                <Block env={env} key={i} block={block} locale={locale} />
              ))}
            </Container>
          );

        case "image_icon_link_card":
          return <ImageIconCard {...block} locale={locale} />;

        case "youtube":
          return <YoutubePlayer videoId={block.videoId} />;

        case "newsletter_popup":
          return <NewsletterCard {...block} env={env} locale={locale} />;

        case "markdown":
          return <MarkdownBlock disallowH1={disallowH1} body={block.body} />;

        case "ambassadors_list":
          return <AmbassadorsList {...block} />;

        case "community_events":
          return (
            <BlockCommunityEvents
              params={{
                locale,
              }}
            />
          );

        case "flex_layout":
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
                <Block env={env} key={i} block={block} locale={locale} />
              ))}
            </BlockCards>
          );

        case "link_list":
          return <LinkList {...block} />;

        case "accordion":
          return (
            <AccordionRoot heading={block.heading}>
              {block.blocks?.map((block, i) => (
                <AccordionItem key={i} label={block.label}>
                  <MarkdownBlock disallowH1={disallowH1} body={block.body} />
                </AccordionItem>
              ))}
            </AccordionRoot>
          );

        case "ordered_block":
          let blocks = Array.from(block.blocks || []).sort((a, b) => {
            return a.title.localeCompare(b.title);
          });
          return (
            <OrderedBlock>
              {blocks.map((block: any, i: number) => {
                return (
                  <OrderedBlockItem key={i} title={block.title}>
                    <MarkdownBlock disallowH1={disallowH1} body={block.body} />
                  </OrderedBlockItem>
                );
              })}
            </OrderedBlock>
          );

        case "page_header":
          return (
            <PageHeaderBlock
              title={block.title}
              description={block.description}
            />
          );

        case "group":
          return (
            <BlockGrouping>
              {block.blocks.map((block, i) => (
                <Block env={env} key={i} block={block} locale={locale} />
              ))}
            </BlockGrouping>
          );

        case "heading_container":
          return (
            <HeadingContainer
              heading={block.heading}
              headingVariant={block.heading_variant}
            >
              {block.blocks.map((block, i) => (
                <Block env={env} key={i} block={block} locale={locale} />
              ))}
            </HeadingContainer>
          );

        case "hero":
          return (
            <HeroImage
              title={block.title}
              description={block.description}
              variant={block.variant}
              buttonText={block.buttonText}
              buttonUrl={block.buttonUrl}
              leftBoxMaxWidth={block.leftBoxMaxWidth}
            />
          );

        case "home_hero":
          const pageContext = usePageContext();
          const homeSEO = useAsync(["getBlockExplorers", locale], () =>
            getHomeSEO(locale, pageContext.context)
          );

          return <HomepageHero seo={homeSEO} />;

        case "card_list":
          return (
            <ListCardItems
              {...block}
              params={{
                locale,
              }}
            />
          );
        case "video_section":
          return <VideoSectionBlock {...block} />;
      }
      break;

    //========================================

    case BlockPlacements.NAVBAR:
      switch (block.type) {
        case "nav_sticky_banner":
          if (!block.isActive) return null;
          return (
            <NavbarStickyBanner
              text={block.text}
              buttonText={block.buttonText}
              buttonLink={block.buttonLink}
            />
          );
      }
      break;
  }

  return null;
}
