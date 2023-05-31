import { Box, Flex, Container } from "@chakra-ui/react";
import { ListCard } from "@ui/Card/ListCard";
import { getFiatOnRamps } from "@starknet-io/cms-data/src/fiat-on-ramps";
import { useAsync } from "react-streaming";
import { usePageContext } from "src/renderer/PageContextProvider";
import { getShuffledArray } from "src/utils/getShuffledArray";

interface Props extends LocaleProps {
  noOfItems?: number;
}

export default function BlockOnRamps({
  noOfItems,
  params: { locale },
}: Props): JSX.Element {
  const pageContext = usePageContext();
  const fiatOnRamps = useAsync(['getFiatOnRamps', locale], () => getFiatOnRamps(locale, pageContext.event));
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
