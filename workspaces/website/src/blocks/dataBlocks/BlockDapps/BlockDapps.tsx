import { Box, Flex, Container } from "@chakra-ui/react";
import { ListCard } from "@ui/Card/ListCard";
import { getDapps } from "@starknet-io/cms-data/src/dapps";
import { useAsync } from "react-streaming";
import { usePageContext } from "src/renderer/PageContextProvider";
import { getShuffledArray } from "src/utils/getShuffledArray";

interface Props extends LocaleProps {
  noOfItems?: number;
}

export default function BlockDapps({
  noOfItems,
  params: { locale },
}: Props): JSX.Element {
  const pageContext = usePageContext();
  const dapps = useAsync(['getDapps', locale], () => getDapps(locale, pageContext.event));
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
