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

export default async function DappsPage({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  // const { title, description } = await getEventsPage(locale);
  const wallets = await getWallets(locale);

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
                Wallets
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        }
        pageLastUpdated="Page last updated 21 Nov 2023"
        main={
          <Box>
            <BlockHeroLines
              variant="wallets"
              title="Wallets"
              description="Starknet sits on top of Ethereum as a layer 2 network. It uses technology called 'STARK Proofs' to securely compress huge amounts of transactions for Ethereum."
            />
            <Box h={16} />
            <Container maxW="1062px">
              <Flex gap={4} direction="column" flex={1}>
                {wallets.map((wallet) => {
                  console.log(wallet);
                  return (
                    <ListCard
                      href={wallet.website_url}
                      twitterHandle={wallet.twitter}
                      image={wallet.image}
                      // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                      key={wallet.name}
                      description={wallet.description}
                      title={wallet.name}
                      type={wallet.type}
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
