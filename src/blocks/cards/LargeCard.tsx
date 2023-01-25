"use client";

import {
  Box,
  Flex,
  Img,
  Link,
  Stack,
  useBreakpointValue,
} from "src/libs/chakra-ui";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import NextLink from "next/link";
import { CardLink } from "./CardLink";

type Props = {
  title: string;
  linkLabel: string;
  linkHref: string;
  description: string;
  image: string;
  orientation?: "left" | "right";
} & LocaleProps;

export default function LargeCard({
  title,
  linkHref = "/what-is-starknet/",
  linkLabel,
  description,
  image = "https://cdn.midjourney.com/08fcc5e8-f866-4582-96b1-030943fccfca/grid_0.png",
  params,
  orientation = "left",
}: Props): JSX.Element {
  console.log("params", params, "linkHref", linkHref, "linkLabel", linkLabel);
  return (
    <CardLink href={`/${params.locale}${linkHref}`}>
      <CardGradientBorder padding="0">
        <Box
          as="section"
          bg="card-bg"
          borderRadius={{ base: "24px" }}
          padding={{ base: "24px", md: "48px", lg: "48px" }}
        >
          <Box position="relative">
            <Box>
              <Stack
                direction={{ base: "column", md: "row" }}
                // spacing={{ base: "80px" }}
                align={{ lg: "center" }}
                justify={{ lg: "flex-start" }}
                height="full"
              >
                <Box
                  order={orientation === "right" ? 1 : 0}
                  maxW={{ base: "full", lg: "464px" }}
                  borderRadius="16px"
                  overflow="hidden"
                >
                  <Img
                    boxSize="full"
                    objectFit="cover"
                    src={image}
                    alt="starknet"
                  />
                </Box>
                <Stack
                  pl={{ base: "0", md: orientation === "right" ? "0" : "80px" }}
                  order={orientation === "right" ? 0 : 1}
                  spacing={{ base: "8", md: "12" }}
                >
                  <Flex>
                    <Flex
                      direction="column"
                      alignItems="flex-start"
                      gap={"24px"}
                      justify={{ base: "center", md: "flex-start" }}

                      // spacing={{ base: "4", md: "6" }}
                      // maxW={{ md: "xl", lg: "md", xl: "lg" }}
                    >
                      <Box maxW={{ base: "full", md: "80%" }}>
                        <Heading
                          color="heading-navy-fg"
                          as="h2"
                          variant="h2"
                          lineHeight={useBreakpointValue({
                            base: "1.2em",
                            md: "1.3em",
                          })}
                          size={useBreakpointValue({ base: "xs", md: "48px" })}
                          mb={0}
                          mt={0}
                        >
                          {title}
                        </Heading>
                      </Box>
                      <Box maxW={{ base: "full", md: "80%" }}>
                        <Text fontSize={{ base: "lg", md: "md" }} mb={0} mt={0}>
                          {description}
                        </Text>
                      </Box>
                    </Flex>
                  </Flex>
                  <Stack direction={{ base: "column", md: "row" }} spacing="3">
                    <Link as={NextLink} variant="card" href={linkHref}>
                      {linkLabel} &rarr;
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </CardGradientBorder>
    </CardLink>
  );
}
