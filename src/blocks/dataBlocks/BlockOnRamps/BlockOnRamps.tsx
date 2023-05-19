import { Box, Flex, Container } from "src/libs/chakra-ui";
import { ListCard } from "@ui/Card/ListCard";
import { FiatOnRamp } from "@starknet-io/cms-data/src/fiat-on-ramps";
import { getShuffledArray } from "src/utils/getShuffledArray";
interface Props extends LocaleProps {
  noOfItems?: number;
  readonly fiatOnRamps: readonly FiatOnRamp[];
}

export default function BlockOnRamps({
  noOfItems,
  fiatOnRamps = [],
}: Props): JSX.Element {
  const randomizedFiatOnRamps = getShuffledArray(fiatOnRamps).slice(
    0,
    noOfItems
  );

  return (
    <Box>
      <Container maxW="1062px">
        <Flex gap={4} direction="column" flex={1}>
          {randomizedFiatOnRamps.map((fiatOnRamp, i) => {
            return (
              <ListCard
                href={fiatOnRamp.website_url}
                twitterHandle={fiatOnRamp.twitter}
                image={fiatOnRamp.image}
                // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                key={fiatOnRamp.name}
                description={fiatOnRamp.description}
                title={fiatOnRamp.name}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
