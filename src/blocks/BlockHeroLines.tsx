"use client";
import {
  Box,
  Container,
  Image,
  Img,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import React from "react";

type Props = {
  title: string;
  description: string | React.ReactNode;
  img: string;
  imgAlt: string;
  url?: string;
  urlTitle?: string;
  image_orientation?: "left" | "right";
};

export const BlockHeroLines = ({
  title = "Dapps",
  description = "Starknet sits on top of Ethereum as a layer 2 network. It uses technology called 'STARK Proofs' to securely compress huge amounts of transactions for Ethereum.",
  img = "/cube.svg",
  imgAlt = "starknet",
  url = "https://starkware.co/starknet",
  urlTitle = "test",
}: Props) => {
  return (
    <Box
      as="section"
      bg="card-bg"
      borderRadius="32px"
      bgGradient="linear( hero-gradient-1a 3.96%, hero-gradient-1b 254.34%)"
      position="relative"
      zIndex={0}
      overflow="hidden"
    >
      <Box
        position="absolute"
        height="100%"
        width="100%"
        zIndex={1}
        opacity={0.5}
        mixBlendMode="soft-light"
      >
        <Img
          src="/lines.svg"
          alt="lines"
          objectFit="cover"
          w="100%"
          height="100%"
        />
      </Box>

      <Box zIndex={2} position="relative" height={{ lg: "500px" }}>
        <Container py={{ base: "16", md: "24" }} height="full">
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "16" }}
            align={{ lg: "center" }}
            height="full"
          >
            <Stack spacing={{ base: "8", md: "12" }} order={{ base: 1, lg: 0 }}>
              <Stack spacing="4">
                <Stack
                  spacing={{ base: "4", md: "6" }}
                  maxW={{ md: "xl", lg: "md", xl: "xl" }}
                >
                  <Heading
                    bgGradient="linear(95.36deg, heading-hero-gradient-1a 1.31%, heading-hero-gradient-1b 169.4%)"
                    bgClip="text"
                    as="h2"
                    variant="h2"
                    size={useBreakpointValue({ base: "md", md: "lg" })}
                  >
                    {title}
                  </Heading>
                  <Text fontSize={{ base: "lg", md: "lg" }} color="muted">
                    {description}
                  </Text>
                </Stack>
              </Stack>
              {/* <Stack direction={{ base: "column", md: "row" }} spacing="3">
                <Button
                  variant="outline"
                  size={useBreakpointValue({ base: "lg", md: "xl" })}
                >
                  {urlTitle}
                </Button>
              </Stack> */}
            </Stack>
            <Spacer display={{ base: "none", lg: "block" }} />
            <Box
              order={{ base: 0, lg: 2 }}
              // pos={{ lg: "absolute" }}
              // left="0"
              // bottom="0"
              w={{ base: "full", lg: "35%" }}
              height={{ base: "96", lg: "full" }}
            >
              <Image
                boxSize={{ base: "xs", lg: "xs" }}
                objectFit="contain"
                src={img}
                alt="starknet"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
