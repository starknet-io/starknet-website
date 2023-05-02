import { Box, Flex, Container } from "@chakra-ui/react";
import { ListCard } from "@ui/Card/ListCard";
import { getFiatOnRamps } from "@starknet-io/cms-data/src/fiat-on-ramps";
import { useAsync } from "react-streaming";

interface Props extends LocaleProps {
  noOfItems?: number;
}

export default function BlockOnRamps({
  noOfItems,
  params: { locale },
}: Props): JSX.Element {
  const fiatOnRamps = useAsync(['getFiatOnRamps', locale], () => getFiatOnRamps(locale));

  return (
    <Box>
      <Container maxW="1062px">
        <Flex gap={4} direction="column" flex={1}>
          {fiatOnRamps.map((fiatOnRamp, i) => {
            if (noOfItems && i <= noOfItems) return null;
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
