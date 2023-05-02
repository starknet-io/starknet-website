import { Box, Flex, Container } from "@chakra-ui/react";
import { ListCard } from "@ui/Card/ListCard";
import { getBridges } from "@starknet-io/cms-data/src/bridges";
import { useAsync } from "react-streaming";

interface Props extends LocaleProps {
  noOfItems?: number;
}

export default function BlockBridges({
  noOfItems,
  params: { locale },
}: Props): JSX.Element {
  const bridges = useAsync(['getBridges', locale], () => getBridges(locale));

  return (
    <Box>
      <Container maxW="1062px">
        <Flex gap={4} direction="column" flex={1}>
          {bridges.map((bridge, i) => {
            if (noOfItems && i <= noOfItems) return null;
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
