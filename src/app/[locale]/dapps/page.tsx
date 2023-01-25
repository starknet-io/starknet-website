import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Flex,
  Container,
} from "../../../libs/chakra-ui";
import { PageLayout } from "@ui/Layout/PageLayout";
import { BlockHeroLines } from "src/blocks/BlockHeroLines";
import { ListCard } from "@ui/ListCards/ListCard";
import { getDapps } from "src/data/dapps";

export default async function DappsPage({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  // const { title, description } = await getEventsPage(locale);
  const dapps = await getDapps(locale);

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
                Dapps
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        }
        pageLastUpdated="Page last updated 21 Nov 2023"
        main={
          <Box>
            <BlockHeroLines
              variant="dapps"
              title="Dapps"
              description="Discover apps in the Starknet ecosystem across NFTs, Defi, DAOs and more."
            />
            <Box h={16} />
            <Container maxW="1062px">
              <Flex gap={4} direction="column" flex={1}>
                {dapps.map((dapp) => {
                  return (
                    <ListCard
                      href={dapp.website_url}
                      twitterHandle={dapp.twitter}
                      image={dapp.image}
                      // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                      key={dapp.name}
                      description={dapp.description}
                      title={dapp.name}
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
