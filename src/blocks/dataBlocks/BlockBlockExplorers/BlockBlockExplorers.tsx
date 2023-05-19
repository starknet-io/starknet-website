"use client";
import { Box, Flex, Container } from "src/libs/chakra-ui";
import { ListCard } from "@ui/Card/ListCard";
import { BlockExplorer } from "@starknet-io/cms-data/src/block-explorers";
import { getShuffledArray } from "src/utils/getShuffledArray";
interface Props extends LocaleProps {
  noOfItems?: number;
  readonly blockExplorers: readonly BlockExplorer[];
}

export default function BlockBlockExplorers({
  noOfItems,
  blockExplorers = [],
}: Props): JSX.Element {
  const randomizedBlockExplorers = getShuffledArray(blockExplorers).slice(
    0,
    noOfItems
  );
  return (
    <Box>
      <Container maxW="1062px">
        <Flex gap={4} direction="column" flex={1}>
          {randomizedBlockExplorers.map((blockExplorer, i) => {
            return (
              <ListCard
                href={blockExplorer.website_url}
                twitterHandle={blockExplorer.twitter}
                image={blockExplorer.image}
                key={blockExplorer.name}
                description={blockExplorer.description}
                title={blockExplorer.name}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
