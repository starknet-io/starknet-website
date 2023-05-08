import { Box, Flex, Container } from "@chakra-ui/react";
import { ListCard } from "@ui/Card/ListCard";
import { getBlockExplorers } from "@starknet-io/cms-data/src/block-explorers";
import { useAsync } from 'react-streaming'
import { usePageContext } from "src/renderer/usePageContext";

interface Props extends LocaleProps {
  noOfItems?: number;
}

export default function BlockBlockExplorers({
  noOfItems,
  params: { locale },
}: Props): JSX.Element {
  const pageContext = usePageContext();
  const blockExplorers = useAsync(["getBlockExplorers", locale], () =>
    getBlockExplorers(locale, pageContext.event)
  );

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
