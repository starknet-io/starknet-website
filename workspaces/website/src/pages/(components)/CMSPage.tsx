import type {
  FlexLayoutBlock,
  Page as PageType,
  TopLevelBlock,
} from "@starknet-io/cms-data/src/pages";
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
  Divider,
} from "@chakra-ui/react";
import "@ui/CodeHighlight/code-highlight-init";
import { blocksToTOC } from "./TableOfContents/blocksToTOC";
import NotFound from "@ui/NotFound/NotFound";
import { useState } from "react";
import NavbarBanner from "src/pages/(components)/NavbarBanner/NavbarBanner";
type CMSPageProps = {
  data: PageType;
  env: {
    CLOUDFLARE_RECAPTCHA_KEY: string;
  };
  locale: string;
};
export default function CMSPage({ data, env, locale }: CMSPageProps) {
  const date = data?.gitlog?.date;
  const [isOpen, setIsOpen] = useState<boolean>(true);

  if (data?.hidden_page) {
    return <NotFound type="page" />;
  }

  const isTypeEqualsToGroup = data?.blocks?.some(
    (block) => block.type === "group"
  );
  return (
    <Box>
      {isTypeEqualsToGroup && isOpen && <NavbarBanner setIsOpen={setIsOpen} />}
      <PageLayout
        contentMaxW={data.template === "narrow content" ? "846px" : undefined}
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
              <>
                <Box pb="6">
                  <Heading
                    as="h1"
                    variant="h2"
                    color="heading-navy-fg"
                    fontWeight="extrabold"
                  >
                    {data.title}
                  </Heading>
                  <Divider variant="primary" mt="8px" />
                </Box>
              </>
            ) : null}
            {data.blocks?.map((block, i) => {
              return <Block env={env} key={i} block={block} locale={locale} />;
            })}
          </Flex>
        }
        rightAside={
          data.template === "content" && !data.hideToc ? (
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
