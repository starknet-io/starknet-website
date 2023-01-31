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
      _dark={{
        bgGradient:
          "linear(0.39deg, #3F1838 -0.96%, #110751 44.39%, #171B31 100.23%)",
      }}
      bgGradient="linear(0.59deg, #FBECF3 0.97%, #F3EBF7 26.24%, #F0F0FB 54.59%, #E6F0FF 99.96%)"
      borderRadius="24px"
      position="relative"
      mt="-24px"
    >
      <Box
        inset={0}
        position="absolute"
        opacity="0.6"
        mixBlendMode="overlay"
        _dark={{
          opacity: 0.3,
        }}
      >
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
      <Box
        zIndex={2}
        inset={0}
        position="absolute"
        mixBlendMode="color-dodge"
        _dark={{
          mixBlendMode: "soft-light",
          opacity: 0.4,
        }}
      >
        <Img
          pos="relative"
          w="full"
          h="full"
          src="/assets/home/curves.svg"
          alt="curves"
          objectFit={{ base: "cover", lg: "cover" }}
        />
      </Box>

      <Box
        zIndex={2}
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "48px", lg: "40px", xl: "81px" }}
      >
        <Flex
          align="flex-start"
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          mb="20"
        >
          <Box flex="1" maxW={{ lg: "xl" }} pt="6" order={{ base: 1, lg: 0 }}>
            <Heading
              as="h2"
              variant="h2"
              mt="8"
              fontWeight="extrabold"
              lineHeight="1.2"
              fontSize={{ base: "56px", md: "80px", lg: "80px", xl: "92px" }}
              color="heading-navy-fg"
            >
              ようこそ <br /> to Starknet
            </Heading>
            <Text
              color="hero-subtitle-fg"
              mt="5"
              fontSize="18px"
              fontWeight="bold"
            >
              Starknet is the secure scaling technology bringing Ethereum’s
              benefits to the world.
            </Text>

            <Stack
              direction={{ base: "column", md: "row" }}
              spacing="4"
              mt="72px"
              position={{ base: "relative", md: "relative" }}
              zIndex={4}
            >
              <Button size="lg" minW="210px" variant="solidHero">
                Build on starknet
              </Button>
              <Button size="lg" variant="outlineHero" borderColor="black">
                Learn the basics
              </Button>
            </Stack>
          </Box>
          <Box
            zIndex={0}
            order={{ base: 0, lg: 1 }}
            // boxSize={{ base: "20", lg: "8" }}
          />
          <Img
            position="relative"
            marginRight={{ base: "-200px", lg: "-5rem" }}
            right={{ base: "-2rem", md: "-3rem", lg: "auto" }}
            width={{ base: "100%", lg: "37rem" }}
            src="/assets/home/hero_cropped2.png"
            alt="Screenshot for Form builder"
          />
        </Flex>
      </Box>
    </Box>
  );
};
