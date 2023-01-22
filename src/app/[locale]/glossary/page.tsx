import { getEventsPage } from "src/data/settings/events-page";
import { getEvents } from "src/data/events";
import { PageContentContainer } from "../(components)/PageContentContainer";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
import { EventCard } from "@ui/ListCards/EventCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  UnorderedList,
  OrderedList,
  ListItem,
  Img,
} from "../../../libs/chakra-ui";
import { PageLayout } from "@ui/Layout/PageLayout";
import { getGlossary, getGlossaryByFilename } from "src/data/glossary";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";

export default async function GlossaryPage({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  // function to lowercase and replace spaces with dashes
  const toSlug = (str: string) => {
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  };

  const glossaryItems = await getGlossary(locale);

  return (
    <Box>
      <PageLayout
        sectionHeaderTitle="Glossary"
        sectionHeaderDescription="A list of common terms used in the Starknet ecosystem."
        breadcrumbs={
          <Breadcrumb separator="->">
            <BreadcrumbItem>
              <BreadcrumbLink fontSize="sm" href="#">
                Parent
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink fontSize="sm" href="#">
                Glossary
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        }
        pageLastUpdated="Page last updated 21 Nov 2023"
        main={
          <Box>
            Glossary items
            {/* {glossaryItems.map((item) => {

              const glossaryFilename = toSlug(item.glossary_item);
              // const { MDXContent } = await = getGlossaryByFilename(
              //   locale,
              //   glossaryFilename
              // ));
              return (
                <Box key={item.glossary_item}>
                  <Heading as="h2" variant="h3">
                    {item.glossary_item}
                  </Heading>
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
                      p: (props) => (
                        <Text py={2} variant="baseRegular" {...props} />
                      ),
                      ul: (props) => <UnorderedList pl={1} {...props} />,
                      ol: (props) => <OrderedList pl={1} {...props} />,
                      li: (props) => <ListItem {...props} />,
                      img: (props) => <Img my="4" {...props} />,
                    }}
                  />
                </Box>
              );
            })} */}
          </Box>
        }
        rightAside={<Box>Glossary items</Box>}
      />
    </Box>
  );
}
