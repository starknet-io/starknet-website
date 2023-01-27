import { Box, Button, Flex, HStack, Img, Stack } from "src/libs/chakra-ui";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import React from "react";
import { HiChevronRight } from "react-icons/hi2";

type Props = {};

export const HomepageHero = (props: Props) => {
  return (
    <Box
      bg="hero-home-bg"
      borderRadius="24px"
      as="section"
      minH="600px"
      position="relative"
      overflow="hidden"
      // borderWidth="1px"
      // borderColor="card-br"
    >
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "20" }}
          color="white"
        >
          <Box maxW="xl">
            <Heading
              variant="h1"
              as="h1"
              color="heading-navy-fg"
              lineHeight={{ base: "1.2", lg: "1.1em" }}
              fontSize={{ base: "56px", lg: "104px" }}
            >
              ようこそ to Starknet
            </Heading>
            <Text
              fontSize={{ base: "18px" }}
              mt="4"
              maxW="lg"
              color="hero-home-text-fg"
              fontWeight="700"
            >
              Starknet is the secure scaling technology bringing Ethereum’s
              benefits to the world.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              mt="10"
              spacing="4"
            >
              <Button as="a" href="#" variant="solid">
                Build on Starknet
              </Button>
              <Button as="a" href="#" variant="outline">
                Learn the basics
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src="/assets/home/herobackground.svg"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top center"
            position="absolute"
          />
          <Box top="10%" w="50%" h="full" position="absolute" right="0">
            <Img
              src="/assets/home/heroimage.svg"
              alt="Main Image"
              w="800px"
              objectFit="cover"
              objectPosition="center right"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
