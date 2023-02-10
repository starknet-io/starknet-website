import { Box, Flex, Container } from "src/libs/chakra-ui";
import { ListCard } from "@ui/ListCards/ListCard";
import { getBlockExplorers } from "src/data/block_explorers";
interface Props extends LocaleProps {
  noOfItems?: number;
}

export default async function BlockBlockExplorers({
  noOfItems,
  params: { locale },
}: //@ts-expect-error
Props): JSX.Element {
  const blockExplorers = await getBlockExplorers(locale);

  return (
    <Box>
      <Container maxW="1062px">
        <Flex gap={4} direction="column" flex={1}>
          {blockExplorers.map((blockExplorer, i) => {
            if (noOfItems && i <= noOfItems) return null;
            return (
              <ListCard
                href={blockExplorer.website_url}
                twitterHandle={blockExplorer.twitter}
                image={blockExplorer.image}
                // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                key={blockExplorer.name}
                description={blockExplorer.description}
                title={blockExplorer.name}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
