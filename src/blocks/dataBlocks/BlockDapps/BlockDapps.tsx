import { Box, Flex, Container } from "src/libs/chakra-ui";
import { ListCard } from "@ui/ListCards/ListCard";
import { getDapps } from "src/data/dapps";
interface Props extends LocaleProps {
  noOfItems?: number;
}

export default async function BlockDapps({
  noOfItems,
  params: { locale },
}: //@ts-expect-error
Props): JSX.Element {
  const dapps = await getDapps(locale);

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
