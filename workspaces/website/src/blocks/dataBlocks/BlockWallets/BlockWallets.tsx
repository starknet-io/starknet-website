import { Box, Flex, Container } from "@chakra-ui/react";
import { ListCard } from "@ui/Card/ListCard";
import { getWallets } from "@starknet-io/cms-data/src/wallets";
import { useAsync } from "react-streaming";
import { usePageContext } from "src/renderer/PageContextProvider";

interface Props extends LocaleProps {
  noOfItems?: number;
}

export default function BlockWallets({
  noOfItems,
  params: { locale },
}: Props): JSX.Element {
  const pageContext = usePageContext();
  const wallets = useAsync(['getWallets', locale], () => getWallets(locale, pageContext.context));

  return (
    <Box>
      <Container maxW="1062px">
        <Flex gap={4} direction="column" flex={1}>
          {(wallets).slice(0, noOfItems).map((wallet, i) => {
            return (
              <ListCard
                href={wallet.website_url}
                twitterHandle={wallet.twitter}
                discordHandle={wallet.discord}
                image={wallet.image}
                // startDateTime="Fri, Jan 12 • 2:00 PM EST"
                key={wallet.name}
                description={wallet.description}
                title={wallet.name}
                type_list={wallet.type_list}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
