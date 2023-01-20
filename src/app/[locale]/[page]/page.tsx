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
    const { title, MDXContent } = await getPageByFilename(page, locale);

    return (
      <PageContentContainer>
        <Box>
          <Flex direction="column" gap="2">
            <Breadcrumb separator="->">
              <BreadcrumbItem>
                <BreadcrumbLink fontSize="xs" href="#">
                  Parent
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontSize="xs" href="#">
                  {title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Text fontSize="sm" color="gray.500">
              Page last updated 21 Nov 2023
            </Text>
          </Flex>
        </Box>

        <Flex gap="32" direction={{ base: "column", md: "row" }} mt="8">
          <Box maxW={{ base: "full", md: "2xl" }}>
            <MDXContent
              components={{
                h2: (props) => (
                  <Heading
                    as="h2"
                    color="heading-navy-fg"
                    variant="h2"
                    {...props}
                  />
                ),
                h3: (props) => (
                  <Heading
                    color="heading-navy-fg"
                    pb={4}
                    as="h3"
                    variant="h3"
                    {...props}
                  />
                ),
                h4: (props) => (
                  <Heading
                    color="heading-navy-fg"
                    as="h4"
                    variant="h4"
                    {...props}
                  />
                ),
                h5: (props) => (
                  <Heading
                    color="heading-navy-fg"
                    as="h5"
                    variant="h4"
                    {...props}
                  />
                ),
                h6: (props) => (
                  <Heading
                    color="heading-navy-fg"
                    as="h6"
                    variant="h6"
                    {...props}
                  />
                ),
                p: (props) => <Text py={2} variant="baseRegular" {...props} />,
                ul: (props) => <UnorderedList pl={1} {...props} />,
                ol: (props) => <OrderedList pl={1} {...props} />,
                li: (props) => <ListItem {...props} />,
                img: (props) => <Img my="4" {...props} />,
              }}
            />
          </Box>
          <Sidebar>
            <SubNavLinkGroup
              label="Table of contents"
              links={[
                {
                  label: "Page navigation item 1",
                  url: "https://www.google.com",
                },
                {
                  label: "Page navigation item 2",
                  url: "https://www.google.com",
                },
                {
                  label: "Page navigation item 3",
                  url: "https://www.google.com",
                },
                {
                  label: "Page navigation item 4",
                  url: "https://www.google.com",
                },
                {
                  label: "Page navigation item 5",
                  url: "https://www.google.com",
                },
                {
                  label: "Page navigation item 6",
                  url: "https://www.google.com",
                },
              ]}
            />
          </Sidebar>
        </Flex>
      </PageContentContainer>
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}
