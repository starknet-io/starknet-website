import { Box, Flex, Img, Stack } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { Intro } from "./Intro";
import ProvisionsPopup from "@ui/ProvisionsPopup/ProvisionsPopup";

type Props = {
  readonly seo: {
    heroText: string;
  };
};

export const HomepageHero = ({ seo }: Props) => {
  return (
    <>
      <ProvisionsPopup />
      <Box
        id="home_hero"
        as="section"
        pt="46px"
        pb="93px"
        overflow="hidden"
        bg="#eaeaea"
        minHeight="729px"
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
          px={{ base: "6", md: "48px", lg: "40px", xl: "56px" }}
        >
          <Flex
            align="flex-end"
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            // paddingBottom="33px"
            // mb="56px"
          >
            <Box
              top={{ lg: "-64px" }}
              position="relative"
              flex="1"
              maxW={{ lg: "xl" }}
              pt="0"
              order={{ base: 1, lg: 0 }}
            >
              <Intro />

              <Heading
                variant="h1"
                fontWeight="bold"
                color="heading-navy-fg"
                mt={{ base: "0", lg: "-20px" }}
                fontSize={{ base: "56px", md: "80px", xl: "92px" }}
              >
                Starknet
              </Heading>
              <Text
                color="hero-subtitle-fg"
                mt="5"
                fontSize="20px"
                fontWeight="500"
              >
                {seo.heroText}
              </Text>

              <Stack
                direction={{ base: "column", md: "row" }}
                spacing="4"
                mt="72px"
                position={{ base: "relative", md: "relative" }}
                zIndex={4}
              >
                <Button
                  href="/en/developers"
                  size="lg"
                  minW="210px"
                  variant="primaryHero"
                >
                  Build on Starknet
                </Button>
                <Button
                  size="lg"
                  variant="secondaryHero"
                  href="/en/explore-starknet"
                >
                  Explore Starknet
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
              marginRight={{
                sm: "-70px",
                md: "-10px",
                lg: "-5rem",
                xl: "-9rem",
              }}
              right={{ base: "-2rem", md: "-3rem", lg: "auto" }}
              width={{ base: "100%", lg: "35rem" }}
              src="/assets/home/hero_illustration.png"
              alt="Screenshot for Form builder"
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
};
