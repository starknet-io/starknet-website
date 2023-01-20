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
} from "../../../libs/chakra-ui";
import { PageLayout } from "@ui/Layout/PageLayout";
import { BlockHeroLines } from "src/blocks/BlockHeroLines";
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
                dAPPS
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
              title="dApps"
              description="Starknet sits on top of Ethereum as a layer 2 network. It uses technology called 'STARK Proofs' to securely compress huge amounts of transactions for Ethereum."
            />

            <Wrap spacing={4} direction="column">
              {dapps.map((dapp) => (
                <EventCard
                  href="https://www.google.com"
                  // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                  key={dapp.name}
                  description={
                    "Basecamp will be a 6-week training program, with 6x 2h online calls + homework."
                  }
                  title={dapp.name}
                />
              ))}
            </Wrap>
          </Box>
        }
      />
    </Box>
  );
}
