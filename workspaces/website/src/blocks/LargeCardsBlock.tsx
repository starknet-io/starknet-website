import { BoxProps, Box, Flex } from "@chakra-ui/react";
import { Card, CardBody, CardLink, CardTitle } from "@ui/Card/Card";
import { Text } from "@ui/Typography/Text";

type Card = {
  img?: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
};

type Props = {
  horizontal1: Card;
  horizontal2: Card;
  vertical1: Card;
  vertical2: Card;
} & BoxProps;

export const LargeCardsBlock = (props: Props) => {
  const  { horizontal1, horizontal2, vertical1, vertical2 } = props;
  console.log('ussao ', props)
  return (
    <Flex direction="column" gap="32px">
      <Card variant="large" orientation="horizontal">
          <img src={horizontal1.img} />
          <CardBody>
              <Box>
                  <CardTitle>{horizontal1.title}</CardTitle>
                  <Text variant="body">
                  {horizontal1.description}
                  </Text>
              </Box>
              <CardLink variant="iconLink" href={horizontal1.linkUrl as string}>
                  {horizontal1.linkText}
              </CardLink>
          </CardBody>
      </Card>
      <Flex gap="32px" direction={{ base: "column", md: "row" }}>
        <Card variant="large" orientation="vertical">
            <img src={vertical1.img} />
            <CardBody>
                <Box>
                    <CardTitle>{vertical1.title}</CardTitle>
                    <Text variant="body">
                    {vertical1.description}
                    </Text>
                </Box>
                <CardLink variant="iconLink" href={vertical1.linkUrl as string}>
                    {vertical1.linkText}
                </CardLink>
            </CardBody>
        </Card>
        <Card variant="large" orientation="vertical">
            <img src={vertical2.img} />
            <CardBody>
                <Box>
                    <CardTitle>{vertical2.title}</CardTitle>
                    <Text variant="body">
                    {vertical2.description}
                    </Text>
                </Box>
                <CardLink variant="iconLink" href={vertical2.linkUrl as string}>
                    {vertical2.linkText}
                </CardLink>
            </CardBody>
        </Card>
      </Flex>
      <Card variant="large" orientation="horizontal">
          <img src={horizontal2.img} />
          <CardBody>
              <Box>
                  <CardTitle>{horizontal2.title}</CardTitle>
                  <Text variant="body">
                  {horizontal2.description}
                  </Text>
              </Box>
              <CardLink variant="iconLink" href={horizontal2.linkUrl as string}>
                  {horizontal2.linkText}
              </CardLink>
          </CardBody>
      </Card>
    </Flex>
  )
};
