import { Box, Flex, Container } from "src/libs/chakra-ui";
import { ListCard } from "@ui/Card/ListCard";
import { Dapp } from "@starknet-io/cms-data/src/dapps";
interface Props extends LocaleProps {
  noOfItems?: number;
  readonly dapps: readonly Dapp[];
}

export default function BlockDapps({
  noOfItems,
  // params: { locale },
  dapps = [],
}: Props): JSX.Element {
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
