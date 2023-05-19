import { Box, Flex, Container } from "src/libs/chakra-ui";
import { ListCard } from "@ui/Card/ListCard";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { slugify } from "@starknet-io/cms-utils/src/index";

interface Icon {
  icon: string;
  linkUrl: string;
}

interface EcosystemCard {
  title: string;
  description: string;
  linkUrl: string;
  imageUrl: string;
  icons: Icon;
  website_url: string;
  twitter: string;
  image: string;
}

interface Props extends LocaleProps {
  title: string,
  description?: string,
  ecosystem_cards: EcosystemCard[]
}

export default async function EcosystemCard({
  params: { locale },
  title,
  description,
  ecosystem_cards
}: //@ts-expect-error
Props): JSX.Element {

  return (
    <Box>
      <Container maxW="1062px">
        {title && <Heading color="heading-navy-fg" variant="h3" mb="10px" id={`toc-${slugify(title)}`}>{title}</Heading>}
        {description && <Text variant="body" mb="24px">{description}</Text>}
        <Flex gap={4} direction="column" flex={1}>
          {ecosystem_cards.map((card, i) => {
            return (
              <ListCard
                href={card.website_url}
                twitterHandle={card.twitter}
                image={card.image}
                key={`${card.title}-${i}`}
                description={card.description}
                title={card.title}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
