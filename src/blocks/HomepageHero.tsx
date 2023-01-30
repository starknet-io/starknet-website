import { Box, Button, Flex, HStack, Img, Stack } from "src/libs/chakra-ui";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import React from "react";
import { HiChevronRight } from "react-icons/hi2";
import { TextCycle } from "@ui/TextCycle";

type Props = {};

export const HomepageHero = (props: Props) => {
  return (
    <Box
      as="section"
      pt="48px"
      pb="16px"
      overflow="hidden"
      bg="#eaeaea"
      bgGradient="linear(0.59deg, #FBECF3 0.97%, #F3EBF7 26.24%, #F0F0FB 54.59%, #E6F0FF 99.96%)"
      borderRadius="24px"
      position="relative"
    >
      <Box inset={0} position="absolute" opacity="0.6" mixBlendMode="overlay">
        <Img
          zIndex={0}
          pos="relative"
          w="full"
          h="full"
          src="/assets/home/Pattern.png"
          alt="Screenshot for Form builder"
          objectFit={{ base: "cover", lg: "cover" }}
        />
      </Box>
      <Box inset={0} position="absolute" mixBlendMode="color-dodge">
        <Img
          zIndex={1}
          pos="relative"
          w="full"
          h="full"
          src="/assets/home/curves.svg"
          alt="curves"
          objectFit={{ base: "cover", lg: "cover" }}
        />
      </Box>
      <Box> </Box>
      <Box
        zIndex={2}
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "48px", lg: "48px", xl: "81px" }}
      >
        <Flex
          align="flex-start"
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          mb="20"
        >
          <Box flex="1" maxW={{ lg: "xl" }} pt="6">
            <Heading
              as="h2"
              variant="h2"
              mt="8"
              fontWeight="extrabold"
              lineHeight="1.2"
              fontSize={{ base: "86px", md: "80px", lg: "96px" }}
              color="heading-navy-fg"
            >
              ようこそ <br /> to Starknet
            </Heading>
            <Text color="#313131" mt="5" fontSize="18px" fontWeight="bold">
              Starknet is the secure scaling technology bringing Ethereum’s
              benefits to the world.
            </Text>

            <Stack direction={{ base: "column", md: "row" }} spacing="4" mt="8">
              <Button size="lg" minW="210px" variant="solid">
                Build on starknet
              </Button>
              <Button size="lg" variant="outline">
                Learn the basics
              </Button>
            </Stack>
          </Box>
          <Box boxSize={{ base: "20", lg: "8" }} />
          <Img
            pos="relative"
            marginEnd="-5rem"
            w="37rem"
            src="/assets/home/heroimage3.png"
            alt="Screenshot for Form builder"
          />
        </Flex>
      </Box>
    </Box>
  );
};
