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
import { getWallets } from "src/data/wallets";
import { ListCard } from "@ui/ListCards/ListCard";
import { getBridges } from "src/data/bridges";

export default async function DappsPage({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  // const { title, description } = await getEventsPage(locale);
  const bridges = await getBridges(locale);

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
                Bridges & onramps
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        }
        pageLastUpdated="Page last updated 21 Nov 2023"
        main={
          <Box>
            <BlockHeroLines
              variant="bridges"
              title=" Bridges & onramps"
              description="Starknet sits on top of Ethereum as a layer 2 network. It uses technology called 'STARK Proofs' to securely compress huge amounts of transactions for Ethereum."
            />
            <Box h={16} />
            <Container maxW="1062px">
              <Flex gap={4} direction="column" flex={1}>
                {bridges.map((bridge) => {
                  console.log(bridge);
                  return (
                    <ListCard
                      href={bridge.website_url}
                      twitterHandle={bridge.twitter}
                      image={bridge.image}
                      // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                      key={bridge.name}
                      description={bridge.description}
                      title={bridge.name}
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
