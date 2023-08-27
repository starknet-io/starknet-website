import type { Page as PageType } from "@starknet-io/cms-data/src/pages";
import { PageLayout } from "@ui/Layout/PageLayout";
import moment from "moment";
import { Heading } from "@ui/Typography/Heading";
import { Block } from "src/blocks/Block";
import { TableOfContents } from "./TableOfContents/TableOfContents";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import "@ui/CodeHighlight/code-highlight-init";
import { blocksToTOC } from "./TableOfContents/blocksToTOC";
import { LandingConent } from "@ui/HeroImage/LandingConent";

type CMSPageProps = {
  data: PageType;
  locale: string;
};
const maxW = {
  content: undefined,
  "narrow content": "846px",
  landing: "none",
};
export default function CMSPage({ data, locale }: CMSPageProps) {
  const date = data?.gitlog?.date;
  const [firstBlock, ...remainingBlocks] = data.blocks || [];
  const isFirstBlockLandingHero = firstBlock?.type === "hero";

  return (
    <Box>
      <PageLayout
        contentMaxW={maxW[data.template]}
        sx={isFirstBlockLandingHero ? { px: "0px" } : undefined}
        maxW="none"
        breadcrumbs={
          <>
            {data.breadcrumbs &&
            data.breadcrumbs_data &&
            data.breadcrumbs_data.length > 0 ? (
              <Breadcrumb separator="/">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    fontSize="sm"
                    href={`/${data.breadcrumbs_data[0].locale}`}
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    fontSize="sm"
                    href={`/${data.breadcrumbs_data[0].locale}/${data.breadcrumbs_data[0].slug}`}
                  >
                    {data.breadcrumbs_data[0].title}
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink fontSize="sm">{data.title}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
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
                data.template === "content" ||
                data.template === "narrow content"
                  ? "32px"
                  : "56px",
              lg:
                data.template === "content" ||
                data.template === "narrow content"
                  ? "32px"
                  : "136px",
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
