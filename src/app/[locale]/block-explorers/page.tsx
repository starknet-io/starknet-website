import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Wrap,
  Spacer,
  Flex,
  Container,
} from "../../../libs/chakra-ui";
import { PageLayout } from "@ui/Layout/PageLayout";
import { BlockHeroLines } from "src/blocks/BlockHeroLines";
import { ListCard } from "@ui/ListCards/ListCard";
import { getBlockExplorers } from "src/data/block_explorers";

export default async function DappsPage({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  // const { title, description } = await getEventsPage(locale);
  const blockExplorers = await getBlockExplorers(locale);

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
                Block explorers
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        }
        pageLastUpdated="Page last updated 21 Nov 2023"
        main={
          <Box>
            <BlockHeroLines
              variant="block_explorers"
              title=" Block explorers"
              description="Page header with high level description of section and visual treatment from brand team."
            />
            <Box h={16} />
            <Container maxW="1062px">
              <Flex gap={4} direction="column" flex={1}>
                {blockExplorers.map((blockExplorer) => {
                  console.log(blockExplorer);
                  return (
                    <ListCard
                      href={blockExplorer.website_url}
                      twitterHandle={blockExplorer.twitter}
                      image={blockExplorer.image}
                      // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                      key={blockExplorer.name}
                      description={blockExplorer.description}
                      title={blockExplorer.name}
                    />
                  );
                })}
              </Flex>
            </Container>
          </Box>
        }
      />
    </Box>
  );
}
