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
              imgAlt="cube"
              img="/cube.svg"
              title="Dapps"
              description="Discover apps in the Starknet ecosystem across NFTs, Defi, DAOs and more."
            />
            <Box h={16} />
            <Container>
              <Flex gap={4} direction="column" flex={1}>
                {dapps.map((dapp) => {
                  console.log(dapp);
                  return (
                    <ListCard
                      href={dapp.website_url}
                      twitter={dapp.twitter}
                      image={dapp.image}
                      // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                      key={dapp.name}
                      description={
                        "Basecamp will be a 6-week training program, with 6x 2h online calls + homework."
                      }
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
