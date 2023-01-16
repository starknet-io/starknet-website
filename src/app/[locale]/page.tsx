"use client";

import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Stat } from "@ui/Stat/Stat";
import { PageContentContainerNoSidebar } from "./(components)/PageContentContainerNoSidebar";
import { useMessages } from "./(components)/ClientLocaleProvider";
import { PageContentContainer } from "./(components)/PageContentContainer";

export default function Index() {
  const messages = useMessages();

  return (
    <PageContentContainerNoSidebar>
      <Box as="section" bg="bg-surface">
        <Box position="relative" height={{ lg: "720px" }}>
          <Container py={{ base: "16", md: "24" }} height="full">
            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing={{ base: "16" }}
              align={{ lg: "center" }}
              height="full"
            >
              <Stack spacing={{ base: "8", md: "12" }}>
                <Stack spacing="4">
                  <Stack
                    spacing={{ base: "4", md: "6" }}
                    maxW={{ md: "xl", lg: "md", xl: "xl" }}
                  >
                    <Heading
                      size={useBreakpointValue({ base: "md", md: "xl" })}
                    >
                      Starknet
                    </Heading>
                    <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ut id odio sapiente aperiam, magnam, porro dolore at
                      doloremque qui expedita corrupti laudantium consequatur
                      praesentium quae. Et earum debitis laborum facilis!
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction={{ base: "column", md: "row" }} spacing="3">
                  <Button
                    variant="primary"
                    size={useBreakpointValue({ base: "lg", md: "xl" })}
                  >
                    Learm more {messages.search}
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
      {/* <InstantSearch searchClient={searchClient} indexName="starknet-docs-v2">
        <SearchBox className="text-black" />
        <RefinementList attribute="title" />
        <Hits hitComponent={Hit} />
      </InstantSearch> */}
      <Container py={{ base: "16", md: "24" }}>
        <Stack spacing={{ base: "12", md: "16" }}>
          <Stack
            spacing={{ base: "4", md: "5" }}
            textAlign="center"
            align="center"
          >
            <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
              Why Chakra UI Pro?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="muted" maxW="3xl">
              Because this beautiful and responsive React components will help
              your to realize your next project in no time.
            </Text>
          </Stack>
          <Box
            bg="bg-accent"
            color="on-accent"
            borderRadius="2xl"
            px={{ base: "6", md: "12", lg: "16" }}
            py={{ base: "10", md: "12", lg: "16" }}
          >
            <SimpleGrid columns={{ base: 1, md: 3 }} rowGap="8">
              <Stat label="stat 1" value="234234324" />
              <Stat label="stat 1" value="234234324" />
              <Stat label="stat 1" value="234234324" />
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </PageContentContainerNoSidebar>
  );
}
