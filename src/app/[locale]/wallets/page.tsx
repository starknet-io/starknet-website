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
  Wrap,
  Spacer,
  Flex,
} from "../../../libs/chakra-ui";
import { PageLayout } from "@ui/Layout/PageLayout";
import { BlockHeroLines } from "src/blocks/BlockHeroLines";
import { getWallets } from "src/data/wallets";

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
              imgAlt="cube"
              img="/cube.svg"
              title="Wallets"
              description="Starknet sits on top of Ethereum as a layer 2 network. It uses technology called 'STARK Proofs' to securely compress huge amounts of transactions for Ethereum."
            />
            <Box h={6} />
            <Flex gap={4} direction="column" alignItems="center">
              {wallets.map((wallet) => (
                <EventCard
                  href="https://www.google.com"
                  image={wallet.image}
                  // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                  key={wallet.name}
                  description={
                    "Basecamp will be a 6-week training program, with 6x 2h online calls + homework."
                  }
                  title={wallet.name}
                />
              ))}
            </Flex>
          </Box>
        }
      />
    </Box>
  );
}
