import {
  Box,
  Container,
  Image,
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
  url: string;
  urlTitle?: string;
  image_orientation?: "left" | "right";
};

export const BlockWithImage = ({
  title = "How does it scale Ethereum?",
  description = "Starknet sits on top of Ethereum as a layer 2 network. It uses technology called 'STARK Proofs' to securely compress huge amounts of transactions for Ethereum.",
  img = "https://cdn.midjourney.com/08fcc5e8-f866-4582-96b1-030943fccfca/grid_0.png",
  imgAlt = "starknet",
  url = "https://starkware.co/starknet",
  urlTitle,
}: Props) => {
  return (
    <Box as="section" bg="card-bg" borderRadius="xl">
      <Box position="relative" height={{ lg: "500px" }}>
        <Container py={{ base: "16", md: "24" }} height="full">
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "16" }}
            align={{ lg: "center" }}
            height="full"
          >
            <Box
              // pos={{ lg: "absolute" }}
              // left="0"
              // bottom="0"
              w={{ base: "full", lg: "40%" }}
              height={{ base: "96", lg: "full" }}
            >
              <Image
                boxSize="full"
                objectFit="cover"
                src={img}
                alt="starknet"
              />
            </Box>
            <Stack spacing={{ base: "8", md: "12" }}>
              <Stack spacing="4">
                <Stack
                  spacing={{ base: "4", md: "6" }}
                  maxW={{ md: "xl", lg: "md", xl: "xl" }}
                >
                  <Heading
                    color="heading-navy-fg"
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
              <Stack direction={{ base: "column", md: "row" }} spacing="3">
                <Button
                  variant="link"
                  size={useBreakpointValue({ base: "lg", md: "xl" })}
                >
                  {urlTitle} &rarr;
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
