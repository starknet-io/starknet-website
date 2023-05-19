import { Box, Flex, Container } from "src/libs/chakra-ui";
import { ListCard } from "@ui/Card/ListCard";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { slugify } from "@starknet-io/cms-utils/src/index";

interface Icon {
  icon: string;
  linkUrl: string;
}

interface Node {
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
  nodes: Node[]
}

export default async function NodeCardsBlock({
  params: { locale },
  title,
  description,
  nodes
}: //@ts-expect-error
Props): JSX.Element {

  return (
    <Box>
      <Container maxW="1062px">
        <Heading color="heading-navy-fg" variant="h3" mb="10px" id={`toc-${slugify(title)}`}>{title}</Heading>
        <Text variant="body" mb="24px">{description}</Text>
        <Flex gap={4} direction="column" flex={1}>
          {nodes.map((node, i) => {
            return (
              <ListCard
                href={node.website_url}
                twitterHandle={node.twitter}
                image={node.image}
                key={`${node.title}-${i}`}
                description={node.description}
                title={node.title}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
