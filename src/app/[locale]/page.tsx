"use client";

import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { useMessages } from "./(components)/ClientLocaleProvider";
import { PageContentContainer } from "./(components)/PageContentContainer";

export default function Index() {
  const messages = useMessages();

  return (
    <PageContentContainer>
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
    </PageContentContainer>
  );
}
