import { BoxProps, Box, Flex, useColorMode } from "@chakra-ui/react";
import { IconLinkCardBlock as IconLinkCardBlockType } from "@starknet-io/cms-data/src/pages";
import { Card, CardBody, CardLink } from "@ui/Card/Card";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { useCMSLink } from "src/utils/useCMSLink";

interface Props extends IconLinkCardBlockType, Omit<BoxProps, "color"> {}

export const IconLinkCardBlock = (props: Props) => {
  const { img, dark_img, title, description, linkText, linkUrl, color } = props;
  const { href, isAbsolute } = useCMSLink(linkUrl || "");
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
  const IconSrc = colorMode === "light" ? img : dark_img ? dark_img : img;
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
        sx={{ background: "surface.bg-page" }}
        {...(color && {
          sx: {
            background: colorValues.background,
          },
        })}
      >
        <Flex direction="column" justifyContent="space-between" height="100%">
          <Box>
            {img ? (
              <img
                color="content.accent.value"
                src={IconSrc}
                style={{ maxWidth: "60px", width: "100%", height: "60px" }}
                alt=""
              />
            ) : null}
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
              href={href}
              paddingTop="xl !important"
              isExternal={isAbsolute}
            >
              {linkText}
            </CardLink>
          ) : null}
        </Flex>
      </CardBody>
    </Card>
  );
};
