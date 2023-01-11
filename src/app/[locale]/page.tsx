"use client";
import {
  Badge,
  Box,
  Container,
  Img,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";

import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  RefinementList,
} from "react-instantsearch-hooks-web";
import { PageContentContainer } from "./(components)/PageContentContainer";

// import { ChevronRightIcon } from "../../libs/heroicons/20/solid";

const searchClient = algoliasearch(
  "EIX7SZ4KVU",
  "022134985272ac0a499480996693a6c4"
);

function Hit({
  hit,
}: {
  hit: {
    objectID: string;
    url: string;
    title: string;
    content: string;
    imageUrl: string;
  };
}) {
  return (
    <article>
      {/* <div>{hit.objectID}</div>
      <img src={hit.imageUrl} alt={hit.title} /> */}
      <h1>
        {/* <a href={hit.url}>
          <Highlight attribute="title" hit={hit as any} />
        </a> */}
      </h1>
      {/* <div>
        <Highlight attribute="content" hit={hit as any} />
      </div> */}
    </article>
  );
}

export default function Index() {
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
                    Learm more
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
