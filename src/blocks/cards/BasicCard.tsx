import { Box, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Text } from "@ui/Typography/Text";
import React from "react";
import NextLink from "next/link";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";

type Props = {
  title: string;
  linkLabel: string;
  linkHref: string;
  size?: "sm" | "md";
};

export const BasicCard = ({
  title = "Basic Card",
  linkLabel = "link label",
  linkHref = "/what-is-starknet/",
  size = "md",
}: Props) => {
  return (
    <CardGradientBorder>
      <Box
        mx="auto"
        maxW="5xl"
        w={{ base: "full" }}
        bg="card-bg"
        borderRadius={{ base: "24px" }}
        pl={{ base: size === "sm" ? "32px" : "48px" }}
        pr={{ base: size === "sm" ? "32px" : "48px" }}
        pb={{ base: size === "sm" ? "48px" : "48px" }}
        pt={{ base: size === "sm" ? "120px" : "80px" }}
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
            <Link as={NextLink} variant="card" href={linkHref}>
              {linkLabel} &rarr;
            </Link>
          </Box>
        </Stack>
      </Box>
    </CardGradientBorder>
  );
};
