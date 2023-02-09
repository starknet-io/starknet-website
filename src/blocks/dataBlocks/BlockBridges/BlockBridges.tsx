import { Box, Flex, Container } from "src/libs/chakra-ui";
import { ListCard } from "@ui/ListCards/ListCard";
import { getBridges } from "src/data/bridges";
interface Props extends LocaleProps {
  noOfItems?: number;
}

export default async function BlockBridges({
  noOfItems,
  params: { locale },
}: //@ts-expect-error
Props): JSX.Element {
  const bridges = await getBridges(locale);

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
