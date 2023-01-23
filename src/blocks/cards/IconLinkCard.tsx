import { Box, Link, Stack, Image, useColorModeValue } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Text } from "@ui/Typography/Text";
import React from "react";
import NextLink from "next/link";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";

type Props = {
  title: string;
  linkLabel: string;
  linkHref: string;
  color?: "orange" | "blue" | "green" | "yellow";
  icon: string;
};

export const IconLinkCard = ({
  title = "Icon link card",
  linkLabel = "link label",
  linkHref = "/what-is-starknet/",
  icon = "/assets/cards/1.svg",
  color = "orange",
}: Props) => {
  let colors = {};
  const renderColor = () => {
    switch (color) {
      case "orange":
        colors = { bg: "card-orange-bg", borderColor: "card-orange-bg" };
        return;
      case "blue":
        colors = { bg: "card-blue-bg", borderColor: "card-blue-bg" };
        return;
      case "green":
        colors = { bg: "card-green-bg", borderColor: "card-green-bg" };
        return;
      case "yellow":
        colors = { bg: "card-yellow-bg", borderColor: "card-yellow-bg" };
        return;
      default:
        colors = { bg: "card-orange-bg", borderColor: "card-orange-bg" };
        return;
    }
  };
  renderColor();

  return (
    <CardGradientBorder>
      <Box
        w={{ base: "full" }}
        borderWidth="1px"
        borderRadius={{ base: "20px" }}
        pl={{ base: "36px" }}
        pr={{ base: "44px" }}
        pb={{ base: "44px" }}
        pt={{ base: "44px" }}
        display="flex"
        {...colors}
      >
        <Stack
          direction={{ base: "column", md: "column" }}
          spacing={{ base: "8px" }}
          justify="flex-end"
          alignItems="flex-start"
        >
          <Image src={icon} mb="20px" alt={title} />
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
