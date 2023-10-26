import { Box, Flex, Container } from "@chakra-ui/react";
import { ListCard } from "@ui/Card/ListCard";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { slugify } from "@starknet-io/cms-utils/src/index";
import type { ListCardItems } from "@starknet-io/cms-data/src/pages";

interface Props extends LocaleProps {
  title: string,
  description?: string,
  card_list_items: ListCardItems[],
  randomize?: boolean
}

export default function ListCardItems({
  params: { locale },
  title,
  description,
  card_list_items
}:
Props): JSX.Element {
  return (
    <Box>
      <Container maxW="1062px">
        {title && <Heading color="heading-navy-fg" variant="h3" mb="10px" id={`toc-${slugify(title)}`}>{title}</Heading>}
        {description && <Text variant="body" mb="24px">{description}</Text>}
        <Flex gap={4} direction="column" flex={1}>
          {card_list_items?.map(({
            start_date_time,
            type,
            website_url,
            ...card
          }, i) => {
            return (
              <ListCard
                href={website_url}
                key={`${card.title}-${i}`}
                startDateTime={start_date_time}
                type={type?.split(",")}
                {...card}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
