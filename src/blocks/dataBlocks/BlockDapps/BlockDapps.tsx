"use client";
import { Box, Flex, Container } from "src/libs/chakra-ui";
import { ListCard } from "@ui/Card/ListCard";
import { Dapp } from "@starknet-io/cms-data/src/dapps";
import { getShuffledArray } from "src/utils/getShuffledArray";
interface Props extends LocaleProps {
  noOfItems?: number;
  readonly dapps: readonly Dapp[];
}

export default function BlockDapps({
  noOfItems,
  dapps = [],
}: Props): JSX.Element {
  const randomizedDapps = getShuffledArray(dapps).slice(0, noOfItems);

  return (
    <Box>
      <Container maxW="1062px">
        <Flex gap={4} direction="column" flex={1}>
          {randomizedDapps.map((dapp, i) => {
            return (
              <ListCard
                href={dapp.website_url}
                twitterHandle={dapp.twitter}
                image={dapp.image}
                key={dapp.name}
                description={dapp.description}
                title={dapp.name}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
