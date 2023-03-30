import { Box, Link, Stack, useColorModeValue } from "src/libs/chakra-ui";
import { Button } from "@ui/Button";
import { Text } from "@ui/Typography/Text";
import React from "react";


type Props = {
  title: string;
  stat: string;
};

export const StatCard = ({
  title = "Transactions today",
  stat = "465,135",
}: Props) => {
  return (
    <Box
      mx="auto"
      maxW="5xl"
      w={{ base: "full" }}
      bgGradient="linear(180deg, #2A2531, #150E1F)"
      borderWidth="1px"
      borderColor="card-br"
      borderRadius={{ base: "24px" }}
      pl={{ base: "32px" }}
      pr={{ base: "32px" }}
      pb={{ base: "48px" }}
      pt={{ base: "105px" }}
      display="flex"
    >
      <Stack
        direction={{ base: "column", md: "column" }}
        spacing={{ base: "8px" }}
        justify="flex-end"
        alignItems="flex-start"
      >
        <Stack spacing="1">
          <Text
            bgGradient="linear(79.2deg, #FF7E6D -129.65, #FFCD9A 126.13%)"
            bgClip="text"
            color="#FFCD9A"
            fontFamily="mono"
            fontSize="51px"
            fontWeight="normal"
          >
            {stat}
          </Text>
        </Stack>
        <Box>
          <Text color="#FFFFFF" fontSize="18px" fontWeight="bold">
            {title}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
