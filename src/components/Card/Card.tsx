"use client";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  href?: string;
} & BoxProps;

export const Card = (props: Props) => (
  <Box
    maxW="3xl"
    mx="auto"
    bg="card-bg"
    rounded={{ md: "xl" }}
    padding="10"
    shadow={{ md: "base" }}
    px={{ base: "6", md: "8" }}
    {...props}
  />
);
