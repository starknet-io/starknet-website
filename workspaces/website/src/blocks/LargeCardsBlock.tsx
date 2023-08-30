import { BoxProps, Flex, useColorMode } from "@chakra-ui/react";
import { Card, CardImg, CardBody, CardTitle } from "@ui/Card/Card";
import { Text } from "@ui/Typography/Text";
import { Button } from "@ui/Button";
import { LargeCardsBlock as LargeCardsBlockType } from "@starknet-io/cms-data/src/pages";

type Card = {
  img?: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
};

interface Props extends LargeCardsBlockType, BoxProps {}

export const LargeCardsBlock = (props: Props) => {
  const { horizontal1, horizontal2, vertical1, vertical2 } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex direction="column" gap="40px">
      <Card variant="large" orientation="horizontal">
        <CardImg variant="large" src={colorMode === 'light' ? horizontal1.img as string : horizontal1.darkImg ? horizontal1.darkImg as string : horizontal1.img} />
        <CardBody variant="large" orientation="horizontal">
          <CardTitle variant="large">{horizontal1.title}</CardTitle>
          <Text
            variant="body"
            color="content.support"
            sx={{
              pt: { base: "8px", lg: "20px" },
              pb: "40px"
            }}
          >
            {horizontal1.description}
          </Text>
          <Button
            variant="outline"
            href={horizontal1.linkUrl as string}
            sx={{ mt: { base: "4px", lg: "0" }, fontWeight: "700" }}
            bg="surface.bg-page"
          >
            {horizontal1.linkText}
          </Button>
        </CardBody>
      </Card>
      <Flex gap="32px" direction={{ base: "column", md: "row" }}>
        <Card variant="large" orientation="vertical">
          <CardImg variant="large" src={vertical1.img as string} />
          <CardBody variant="large">
            <CardTitle variant="large">{vertical1.title}</CardTitle>
            <Text
              variant="body"
              color="content.support"
              sx={{
                pt: { base: "8px", lg: "20px" },
                pb: "40px"
              }}
            >
              {vertical1.description}
            </Text>
            <Button
              variant="outline"
              href={vertical1.linkUrl as string}
              sx={{ mt: { base: "4px", lg: "0" }, fontWeight: "700" }}
              bg="surface.bg-page"
            >
              {vertical1.linkText}
            </Button>
          </CardBody>
        </Card>
        <Card variant="large" orientation="vertical">
          <CardImg variant="large" src={vertical2.img as string} />
          <CardBody variant="large">
            <CardTitle variant="large">{vertical2.title}</CardTitle>
            <Text 
              variant="body"
              color="content.support"
              sx={{
                pt: { base: "8px", lg: "20px" },
                pb: "40px"
              }}
            >
              {vertical2.description}
            </Text>
            <Button
              variant="outline"
              href={vertical2.linkUrl as string}
              sx={{ mt: { base: "4px", lg: "0" }, fontWeight: "700" }}
              bg="surface.bg-page"
            >
              {vertical2.linkText}
            </Button>
          </CardBody>
        </Card>
      </Flex>
      <Card variant="large" orientation="horizontal">
        <CardImg variant="large" src={horizontal2.img as string} />
        <CardBody variant="large" orientation="horizontal">
          <CardTitle variant="large">{horizontal2.title}</CardTitle>
          <Text
            variant="body"
            color="content.support"
            sx={{
              pt: { base: "8px", lg: "20px" },
              pb: "40px"
            }}
          >
            {horizontal2.description}
          </Text>
          <Button
            variant="outline"
            href={horizontal2.linkUrl as string}
            sx={{ mt: { base: "4px", lg: "0" }, fontWeight: "700" }}
            bg="surface.bg-page"
          >
            {horizontal2.linkText}
          </Button>
        </CardBody>
      </Card>
    </Flex>
  );
};
