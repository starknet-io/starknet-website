import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { getPageBySlug } from "src/data/pages";
import { PageContentContainer } from "../(components)/PageContentContainer";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  UnorderedList,
  OrderedList,
  ListItem,
  Flex,
  Box,
  Img,
} from "../../../libs/chakra-ui";
import { notFound } from "next/navigation";
import { getMessages } from "src/data/i18n/intl";
import { Sidebar } from "@ui/Layout/Sidebar";
import { SubNavLinkGroup } from "@ui/TableOfContents/TableOfContents";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Block } from "src/blocks/Block";

export interface Props {
  readonly params: LocaleParams & {
    readonly page: string;
  };
}

export default async function Page({
  params: { locale, page },
}: Props): Promise<JSX.Element> {
  try {
    const messages = await getMessages(locale);
    const { title, blocks, template, breadcrumbs, pageLastUpdated } =
      await getPageBySlug(page, locale);
    console.log(template);
    return (
      <Box>
        <PageLayout
          breadcrumbs={
            <>
              {breadcrumbs ? (
                <Breadcrumb separator="->">
                  <BreadcrumbItem>
                    <BreadcrumbLink fontSize="sm" href="#">
                      Parent
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink fontSize="sm" href="#">
                      {title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              ) : null}
            </>
          }
          pageLastUpdated={
            pageLastUpdated ? "Page last updated 21 Nov 2023" : null
          }
          main={
            <Flex
              direction="column"
              gap={{
                base: template === "content" ? "32px" : "56px",
                lg: template === "content" ? "32px" : "136px",
              }}
            >
              {blocks.map((block, i) => (
                <Block key={i} block={block} locale={locale} />
              ))}
            </Flex>
          }
          rightAside={<>{template === "content" ? <div>Hello</div> : null}</>}
        />
      </Box>
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}
