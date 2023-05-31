import { Box, Flex, Container } from "@chakra-ui/react";
import { ListCard } from "@ui/Card/ListCard";
import { getBridges } from "@starknet-io/cms-data/src/bridges";
import { useAsync } from "react-streaming";
import { usePageContext } from "src/renderer/PageContextProvider";
import { getShuffledArray } from "src/utils/getShuffledArray";

interface Props extends LocaleProps {
  noOfItems?: number;
}

export default function BlockBridges({
  noOfItems,
  params: { locale },
}: Props): JSX.Element {
  const pageContext = usePageContext();
  const bridges = useAsync(['getBridges', locale], () => getBridges(locale, pageContext.event));
  const randomizedBridges = getShuffledArray(bridges).slice(0, noOfItems);

  return (
    <Box>
      <Container maxW="1062px">
        <Flex gap={4} direction="column" flex={1}>
          {randomizedBridges.map((bridge, i) => {
            return (
              <ListCard
                href={bridge.website_url}
                twitterHandle={bridge.twitter}
                image={bridge.image}
                // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                key={bridge.name}
                description={bridge.description}
                title={bridge.name}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
