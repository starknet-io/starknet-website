import { Box, Flex } from "@chakra-ui/react";
import type { Page as PageType } from "@starknet-io/cms-data/src/pages";
import { Breadcrumbs } from "@ui/Breadcrumbs/Breadcrumbs";
import "@ui/CodeHighlight/code-highlight-init";
import { LandingConent } from "@ui/HeroImage/LandingConent";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import moment from "moment";
import { Block } from "src/blocks/Block";
import { TableOfContents } from "./TableOfContents/TableOfContents";
import { blocksToTOC } from "./TableOfContents/blocksToTOC";

type CMSPageProps = {
  data: PageType;
  locale: string;
};
const maxW = {
  content: {
    base: "contentMaxW.lg",
    lg: "contentMaxW.xl",
  },
  "narrow content": "846px",
  landing: "none",
};

const px = {
  landing: "0px",
  "narrow content": {
    base: "page.left-right.base",
    md: "page.left-right.md",
  },
  content: {
    base: "page.left-right.base",
    md: "page.left-right.md",
  },
};

const gap = {
  landing: {
    base: "page.block-gap.base",
  },
};

export default function CMSPage({ data, locale }: CMSPageProps) {
  const date = data?.gitlog?.date;
  const [firstBlock, ...remainingBlocks] = data.blocks || [];
  const isFirstBlockLandingHero = firstBlock?.type === "hero";

  return (
    <Box>
      <PageLayout
        contentMaxW={maxW[data.template]}
        sx={
          isFirstBlockLandingHero
            ? { px: "0px" }
            : { paddingInline: px[data.template] }
        }
        maxW={data.template === "landing" ? "none" : undefined}
        breadcrumbs={
          <>
            {data.breadcrumbs &&
            data.breadcrumbs_data &&
            data.breadcrumbs_data.length > 0 ? (
              <Breadcrumbs
                locale={data.breadcrumbs_data[0].locale}
                items={[
                  {
                    link: `/${data.breadcrumbs_data[0].locale}/${data.breadcrumbs_data[0].slug}`,
                    label: data.breadcrumbs_data[0].title,
                  },
                  {
                    label: data.title,
                    link: "",
                  },
                ]}
              />
            ) : null}
          </>
        }
        pageLastUpdated={
          data.page_last_updated && date
            ? `Page last updated ${moment(date).fromNow()}  `
            : null
        }
        main={
          <Flex
            direction="column"
            gap={{
              base:
                data.slug === "home"
                  ? "page.gap-wide.base"
                  : "page.gap-standard.base",
              md:
                data.slug === "home"
                  ? "page.gap-wide.md"
                  : "page.gap-standard.md",
              lg:
                data.slug === "home"
                  ? "page.gap-wide.lg"
                  : "page.gap-standard.lg",
            }}
          >
            {data.show_title ? (
              <Heading variant="h1" color="text-hero-fg">
                {data.title}
              </Heading>
            ) : null}
            {!isFirstBlockLandingHero &&
              data.blocks?.map((block, i) => {
                return <Block key={i} block={block} locale={locale} />;
              })}
            {isFirstBlockLandingHero && (
              <>
                <Block block={firstBlock} locale={locale} />
                <LandingConent>
                  {remainingBlocks?.map((block, i) => {
                    return <Block key={i} block={block} locale={locale} />;
                  })}
                </LandingConent>
              </>
            )}
          </Flex>
        }
        rightAside={
          data.template === "content" ? (
            <TableOfContents
              headings={blocksToTOC(data.blocks, 1)}
              {...(data.tocCustomTitle && {
                tocCustomTitle: data.tocCustomTitle,
              })}
            />
          ) : null
        }
      />
    </Box>
  );
}
