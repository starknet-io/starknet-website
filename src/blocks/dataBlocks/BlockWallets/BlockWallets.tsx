"use client";
import { Box, Flex, Container } from "src/libs/chakra-ui";
import { ListCard } from "@ui/Card/ListCard";
import { Wallet } from "@starknet-io/cms-data/src/wallets";
import { getShuffledArray } from "src/utils/getShuffledArray";
interface Props extends LocaleProps {
  noOfItems?: number;
  readonly wallets: readonly Wallet[];
}

export default function BlockWallets({
  noOfItems,
  wallets = [],
}: Props): JSX.Element {
  const randomWallets = getShuffledArray(wallets).slice(0, noOfItems);
  console.log("wallets", wallets);
  console.log("randomWallets", randomWallets);

  return (
    <Box>
      <Container maxW="1062px">
        <Flex gap={4} direction="column" flex={1}>
          {randomWallets.map((wallet, i) => {
            return (
              <ListCard
                href={wallet.website_url}
                twitterHandle={wallet.twitter}
                discordHandle={wallet.discord}
                image={wallet.image}
                // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                key={wallet.name}
                description={wallet.description}
                title={wallet.name}
                type_list={wallet.type_list}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
