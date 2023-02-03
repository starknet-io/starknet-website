import { Box, GridItem, Link, LinkOverlay, Stack } from "src/libs/chakra-ui";
import { Text } from "@ui/Typography/Text";
import React from "react";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";
import { CardLink } from "./CardLink";
import { CustomLink } from "@ui/Link/CustomLink";

type Props = {
  title: string;
  linkLabel: string;
  linkHref: string | undefined;
  size?: "sm" | "md";
};

export const BasicCard = ({
  title = "Basic Card",
  linkLabel = "link label",
  linkHref = "/what-is-starknet/",
  size = "md",
}: Props) => {
  return (
    <CardLink href={linkHref} height="100%">
      <CardGradientBorder height="100%" padding="0">
        <Box
          mx="auto"
          maxW="5xl"
          w={{ base: "full" }}
          bg="card-bg"
          borderRadius={{ base: "24px" }}
          pl={{ base: size === "sm" ? "32px" : "48px" }}
          pr={{ base: size === "sm" ? "32px" : "48px" }}
          pb={{ base: size === "sm" ? "48px" : "48px" }}
          // pt={{ base: size === "sm" ? "120px" : "80px" }}
          minHeight={"259px"}
          display="flex"
        >
          <Stack
            direction={{ base: "column", md: "column" }}
            spacing={{ base: "8px" }}
            justify="flex-end"
            alignItems="flex-start"
          >
            <Stack spacing="1">
              <Text color="heading-navy-fg" fontSize="24px" fontWeight="bold">
                {title}
              </Text>
            </Stack>
            <Box>
              <LinkOverlay as={CustomLink} variant="card" href={linkHref}>
                {linkLabel} &rarr;
              </LinkOverlay>
            </Box>
          </Stack>
        </Box>
      </CardGradientBorder>
    </CardLink>
  );
};
