import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { getPageByFilename } from "src/data/pages";
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
    const { title, blocks, template, breadcrumbs, showLastUpdated } =
      await getPageByFilename(page, locale);
    console.log(template);
    return (
      <Box>
        <PageLayout
          breadcrumbs={
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
          }
          pageLastUpdated="Page last updated 21 Nov 2023"
          main={
            <Flex direction="column" gap="32px">
              {blocks.map((block, i) => (
                <Block key={i} block={block} locale={locale} />
              ))}
            </Flex>
          }
          rightAside={<>{template === "article" && <div>Hello</div>}</>}
        />
      </Box>
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}
