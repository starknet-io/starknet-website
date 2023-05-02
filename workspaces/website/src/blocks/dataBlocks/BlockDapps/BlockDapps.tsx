import { Box, Flex, Container } from "@chakra-ui/react";
import { ListCard } from "@ui/Card/ListCard";
import { getDapps } from "@starknet-io/cms-data/src/dapps";
import { useAsync } from "react-streaming";

interface Props extends LocaleProps {
  noOfItems?: number;
}

export default function BlockDapps({
  noOfItems,
  params: { locale },
}: Props): JSX.Element {
  const dapps = useAsync(['getDapps', locale], () => getDapps(locale));

  return (
    <Box>
      <Container maxW="1062px">
        <Flex gap={4} direction="column" flex={1}>
          {dapps.map((dapp, i) => {
            if (noOfItems && i <= noOfItems) return null;
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
