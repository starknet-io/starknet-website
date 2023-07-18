import type { Page as PageType } from "@starknet-io/cms-data/src/pages";
import { PageLayout } from "@ui/Layout/PageLayout";
import moment from "moment";
import { Block } from "src/blocks/Block";
import { TableOfContents } from "./TableOfContents/TableOfContents";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import '@ui/CodeHighlight/code-highlight-init'
import { blocksToTOC } from "./TableOfContents/blocksToTOC";

type CMSPageProps = {
  data: PageType;
  locale: string;
};
export default function CMSPage({
  data,
  locale,
}: CMSPageProps) {
  const date = data?.gitlog?.date;

  return (
    <Box>
      <PageLayout
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
              base: data.template === "content" ? "32px" : "56px",
              lg: data.template === "content" ? "32px" : "136px",
            }}
          >
            {data.blocks?.map((block, i) => {
              return (
                <Block
                  key={i}
                  block={block}
                  locale={locale}
                />
              );
            })}
          </Flex>
        }
        rightAside={
          data.template === "content" ? (
            <TableOfContents headings={blocksToTOC(data.blocks, 1)} />
          ) : null
        }
      />
    </Box>
  );
}
