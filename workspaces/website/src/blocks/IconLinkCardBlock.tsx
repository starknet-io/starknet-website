import { BoxProps, Box, Flex, useColorMode } from "@chakra-ui/react";
import { IconLinkCardBlock as IconLinkCardBlockType } from "@starknet-io/cms-data/src/pages";
import { Card, CardBody, CardLink } from "@ui/Card/Card";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";

interface Props extends IconLinkCardBlockType, Omit<BoxProps, "color"> {}

export const IconLinkCardBlock = (props: Props) => {
  const { img, dark_img, title, description, linkText, linkUrl, color } = props;
  const renderColorValues = (color: string) => {
    switch (color) {
      case "red":
        return {
          background: "brand-primary-solar-tangerine-solid-1",
          borderColor: "brand-primary-solar-tangerine-solid-5",
        };
      case "green":
        return {
          background: "brand-secondary-space-blue-1",
          borderColor: "brand-secondary-space-blue-5",
        };
      case "blue":
        return {
          background: "brand-primary-purple-void-solid-1",
          borderColor: "brand-primary-purple-void-solid-5",
        };
      default:
        return {
          background: "",
          borderColor: "",
        };
    }
  };
  const colorValues = renderColorValues(color as string);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Card
      variant="iconLink"
      sx={{ background: "surface.bg-page", borderColor: "border.card.value" }}
      {...(!!color && {
        sx: {
          background: colorValues.background,
        },
      })}
      borderColor={colorValues.borderColor}
    >
      <CardBody
        variant="iconLink"
        height="100%"
        {...(color && {
          sx: {
            background: colorValues.background,
          },
        })}
      >
        <Flex direction="column" justifyContent="space-between" height="100%">
          <Box>
            {img ? <img src={colorMode === 'light' ? img : dark_img ? dark_img : img} width="60px" height="60px" alt="" /> : null}
            <Heading
              variant="h3"
              mt="12px"
              mb="4px"
              color="content.accent.value"
            >
              {title}
            </Heading>
            {description ? (
              <Text variant="body" color="content.support">
                {description}
              </Text>
            ) : null}
          </Box>
          {linkText ? (
            <CardLink
              variant="iconLink"
              href={linkUrl as string}
              paddingTop="xl !important"
            >
              {linkText}
            </CardLink>
          ) : null}
        </Flex>
      </CardBody>
    </Card>
  );
};
