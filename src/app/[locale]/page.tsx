"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  useBreakpointValue,
  SimpleGrid,
  useColorModeValue,
  Badge,
  Spacer,
  Img,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import { Stat } from "@ui/Stat/Stat";
import { PageContentContainerNoSidebar } from "./(components)/PageContentContainerNoSidebar";
import { useMessages } from "./(components)/ClientLocaleProvider";

export default function Index() {
  const messages = useMessages();

  return (
    <PageContentContainerNoSidebar>
      <Box as="section" bg="card-bg" borderRadius="xl">
        <Container py={{ base: "16", md: "24" }}>
          <Stack spacing={{ base: "8", md: "10" }}>
            <Stack spacing={{ base: "4", md: "5" }} align="center">
              <Heading
                color="heading-navy-fg"
                as="h2"
                variant="h2"
                size={useBreakpointValue({ base: "sm", md: "md" })}
              >
                ようこそ to Starknet
              </Heading>
              <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
                Starknet is the secure scaling technology bringing Ethereum’s
                benefits to the world.
              </Text>
            </Stack>
            <Stack
              spacing="3"
              direction={{ base: "column", sm: "row" }}
              justify="center"
            >
              <Button variant="primary" size="lg">
                Build on Starknet
              </Button>
              <Button variant="secondary" size="lg">
                Learn the basics
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Spacer height={12} />
      <Box
        bg="card-bg"
        borderRadius="xl"
        px={{ base: "6", lg: "16" }}
        py={{ base: "10", lg: "16" }}
      >
        <Stack
          spacing="8"
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
        >
          <Stack spacing="4" maxW="2xl">
            <Heading color="heading-navy-fg" as="h4" variant="h4" size="sm">
              Community led.{" "}
            </Heading>
            <Text
              color="muted"
              fontSize={useBreakpointValue({ base: "lg", lg: "xl" })}
            >
              This website is a community powered guide to the Starknet
              ecosystem
            </Text>
          </Stack>
          <Stack
            spacing="3"
            direction={{ base: "column", sm: "row" }}
            justify={{ base: "start" }}
          >
            <Button variant="secondary" size="lg">
              Get Involved
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Spacer height={24} />
      <Box as="section" bg="card-bg" borderRadius="xl">
        <Box position="relative" height={{ lg: "500px" }}>
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
                      color="heading-navy-fg"
                      as="h4"
                      variant="h4"
                      size={useBreakpointValue({ base: "md", md: "lg" })}
                    >
                      What is Starknet?
                    </Heading>
                    <Text fontSize={{ base: "lg", md: "lg" }} color="muted">
                      Starknet is a technology that uses math and cryptography
                      to securely scale Ethereum. The community is growing fast
                      and building out an exciting ecosystem of dapps and
                      infrastructure.
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction={{ base: "column", md: "row" }} spacing="3">
                  <Button
                    variant="link"
                    size={useBreakpointValue({ base: "lg", md: "xl" })}
                  >
                    What is Starknet &rarr;
                  </Button>
                </Stack>
              </Stack>
              <Box
                // pos={{ lg: "absolute" }}
                // right="0"
                // bottom="0"
                w={{ base: "full", lg: "40%" }}
                height={{ base: "96", lg: "full" }}
              >
                <Img
                  boxSize="full"
                  objectFit="cover"
                  src="https://cdn.midjourney.com/08fcc5e8-f866-4582-96b1-030943fccfca/grid_0.png"
                  alt="starknet"
                />
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Spacer height={12} />

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
                <Img
                  boxSize="full"
                  objectFit="cover"
                  src="https://cdn.midjourney.com/08fcc5e8-f866-4582-96b1-030943fccfca/grid_0.png"
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
                      as="h4"
                      variant="h4"
                      size={useBreakpointValue({ base: "md", md: "lg" })}
                    >
                      How does it scale Ethereum?
                    </Heading>
                    <Text fontSize={{ base: "lg", md: "lg" }} color="muted">
                      Starknet sits on top of Ethereum as a layer 2 network. It
                      uses technology called “STARK Proofs” to securely compress
                      huge amounts of transactions for Ethereum.
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction={{ base: "column", md: "row" }} spacing="3">
                  <Button
                    variant="link"
                    size={useBreakpointValue({ base: "lg", md: "xl" })}
                  >
                    How Starknet works &rarr;
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Spacer height={12} />
      <SimpleGrid columns={{ base: 2 }} spacing="12">
        <Box
          bg="card-bg"
          boxShadow={useColorModeValue("sm", "sm-dark")}
          borderRadius="lg"
          p={{ base: "4", md: "6" }}
        >
          <Stack
            direction={{ base: "column", md: "column" }}
            spacing={{ base: "5", md: "6" }}
            justify="space-between"
          >
            <Stack spacing="1">
              <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                Scaling transactions
              </Text>
            </Stack>
            <Box>
              <Button variant="link">Learn &rarr;</Button>
            </Box>
          </Stack>
        </Box>

        <Box
          bg="card-bg"
          boxShadow={useColorModeValue("sm", "sm-dark")}
          borderRadius="lg"
          p={{ base: "4", md: "6" }}
        >
          <Stack
            direction={{ base: "column", md: "column" }}
            spacing={{ base: "5", md: "6" }}
            justify="space-between"
          >
            <Stack spacing="1">
              <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                Scaling compute power
              </Text>
            </Stack>
            <Box>
              <Button variant="link">Learn &rarr;</Button>
            </Box>
          </Stack>
        </Box>
      </SimpleGrid>

      <Spacer height={32} />

      <Box as="section" bg="card-bg" borderRadius="xl">
        <Box position="relative" height={{ lg: "500px" }}>
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
                      color="heading-navy-fg"
                      as="h4"
                      variant="h4"
                      size={useBreakpointValue({ base: "md", md: "lg" })}
                    >
                      What do Ethereum + Starknet unlock?
                    </Heading>
                    <Text fontSize={{ base: "lg", md: "lg" }} color="muted">
                      Together the networks unlock Ethereum’s vision for a
                      fairer and more open internet. Decentralised financial
                      systems. Digital assets. Trustless systems.
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction={{ base: "column", md: "row" }} spacing="3">
                  <Button
                    variant="link"
                    size={useBreakpointValue({ base: "lg", md: "xl" })}
                  >
                    What is now possible &rarr;
                  </Button>
                </Stack>
              </Stack>
              <Box
                // pos={{ lg: "absolute" }}
                // right="0"
                // bottom="0"
                w={{ base: "full", lg: "40%" }}
                height={{ base: "96", lg: "full" }}
              >
                <Img
                  boxSize="full"
                  objectFit="cover"
                  src="https://cdn.midjourney.com/08fcc5e8-f866-4582-96b1-030943fccfca/grid_0.png"
                  alt="starknet"
                />
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Spacer height={12} />
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing="12">
        <Box
          bg="card-bg"
          boxShadow={useColorModeValue("sm", "sm-dark")}
          borderRadius="lg"
          p={{ base: "4", md: "6" }}
        >
          <Stack
            direction={{ base: "column", md: "column" }}
            spacing={{ base: "5", md: "6" }}
            justify="space-between"
          >
            <Stack spacing="1">
              <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                Unlimited scale
              </Text>
            </Stack>
            <Box>
              <Button variant="link">Learn &rarr;</Button>
            </Box>
          </Stack>
        </Box>

        <Box
          bg="card-bg"
          boxShadow={useColorModeValue("sm", "sm-dark")}
          borderRadius="lg"
          p={{ base: "4", md: "6" }}
        >
          <Stack
            direction={{ base: "column", md: "column" }}
            spacing={{ base: "5", md: "6" }}
            justify="space-between"
          >
            <Stack spacing="1">
              <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                On-chain computation
              </Text>
            </Stack>
            <Box>
              <Button variant="link">Learn &rarr;</Button>
            </Box>
          </Stack>
        </Box>
        <Box
          bg="card-bg"
          boxShadow={useColorModeValue("sm", "sm-dark")}
          borderRadius="lg"
          p={{ base: "4", md: "6" }}
        >
          <Stack
            direction={{ base: "column", md: "column" }}
            spacing={{ base: "5", md: "6" }}
            justify="space-between"
          >
            <Stack spacing="1">
              <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                Account abstraction
              </Text>
            </Stack>
            <Box>
              <Button variant="link">Learn &rarr;</Button>
            </Box>
          </Stack>
        </Box>
        <Box
          bg="card-bg"
          boxShadow={useColorModeValue("sm", "sm-dark")}
          borderRadius="lg"
          p={{ base: "4", md: "6" }}
        >
          <Stack
            direction={{ base: "column", md: "column" }}
            spacing={{ base: "5", md: "6" }}
            justify="space-between"
          >
            <Stack spacing="1">
              <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                Trustlessness
              </Text>
            </Stack>
            <Box>
              <Button variant="link">Learn &rarr;</Button>
            </Box>
          </Stack>
        </Box>
      </SimpleGrid>
      <Spacer height={24} />
      <Box>
        <Heading color="heading-navy-fg" as="h2" variant="h2" mt="12" mb="8">
          Start building
        </Heading>

        <SimpleGrid columns={{ base: 2, md: 3 }} spacing="12">
          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                  Learn how Starknet works
                </Text>
                <Text fontSize="sm" color="muted">
                  Learn how the Starknet architecture and tech stack works.
                </Text>
              </Stack>
              <Box>
                <Button variant="link">How Starknet works &rarr;</Button>
              </Box>
            </Stack>
          </Box>

          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                  Developer documentation
                </Text>
                <Text fontSize="sm" color="muted">
                  Read the docs to learn how to build on Starknet and Cairo.
                </Text>
              </Stack>
              <Box>
                <Button variant="link">View docs &rarr;</Button>
              </Box>
            </Stack>
          </Box>
          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                  Developer tutorials
                </Text>
                <Text fontSize="sm" color="muted">
                  Learn how to build on Starknet from developers who have
                  already started.
                </Text>
              </Stack>
              <Box>
                <Button variant="link">View tutorials &rarr;</Button>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>

      <Spacer height={2} />
      <Box>
        <Heading color="heading-navy-fg" as="h4" variant="h4" mt="12" mb="3">
          Explore new possibilities:
        </Heading>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing="12">
          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                  Computing power
                </Text>
              </Stack>
              <Box>
                <Button variant="link">Learn &rarr;</Button>
              </Box>
            </Stack>
          </Box>

          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                  Account abstraction
                </Text>
              </Stack>
              <Box>
                <Button variant="link">Learn &rarr;</Button>
              </Box>
            </Stack>
          </Box>
          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                  Trustless bridging
                </Text>
              </Stack>
              <Box>
                <Button variant="link">Learn &rarr;</Button>
              </Box>
            </Stack>
          </Box>
          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                  Storage proofs
                </Text>
              </Stack>
              <Box>
                <Button variant="link">Learn &rarr;</Button>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>

      <Spacer height={24} />
      <Box>
        <Heading color="heading-navy-fg" as="h2" variant="h2" mt="12" mb="8">
          Start playing
        </Heading>

        <SimpleGrid columns={{ base: 2, md: 3 }} spacing="12">
          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                  Discover dapps
                </Text>
                <Text fontSize="sm" color="muted">
                  Starknet.io is a community powered guide for users and
                  developers.
                </Text>
              </Stack>
              <Box>
                <Button variant="link">Learn &rarr;</Button>
              </Box>
            </Stack>
          </Box>

          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                  Find a wallet
                </Text>
                <Text fontSize="sm" color="muted">
                  Starknet.io is a community powered guide for users and
                  developers.
                </Text>
              </Stack>
              <Box>
                <Button variant="link">View docs &rarr;</Button>
              </Box>
            </Stack>
          </Box>
          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Text color="heading-navy-fg" fontSize="lg" fontWeight="bold">
                  Deposit & withdraw funds
                </Text>
                <Text fontSize="sm" color="muted">
                  Starknet.io is a community powered guide for users and
                  developers.
                </Text>
              </Stack>
              <Box>
                <Button variant="link">View tutorials &rarr;</Button>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>

      <Spacer height={24} />
      <Box>
        <Heading color="heading-navy-fg" as="h2" variant="h2" mt="12" mb="8">
          Starknet today
        </Heading>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing="12">
          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Heading
                  as="h3"
                  variant="h3"
                  color="heading-navy-fg"
                  fontWeight="bold"
                >
                  465,135
                </Heading>
                <Text fontSize="sm" color="muted">
                  Transactions today
                </Text>
              </Stack>
            </Stack>
          </Box>

          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Heading
                  as="h3"
                  variant="h3"
                  color="heading-navy-fg"
                  fontWeight="bold"
                >
                  98,109
                </Heading>
                <Text fontSize="sm" color="muted">
                  Account contracts created
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Heading
                  as="h3"
                  variant="h3"
                  color="heading-navy-fg"
                  fontWeight="bold"
                >
                  98,109
                </Heading>
                <Text fontSize="sm" color="muted">
                  Account contracts created
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box
            bg="card-bg"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
          >
            <Stack
              direction={{ base: "column", md: "column" }}
              spacing={{ base: "5", md: "6" }}
              justify="space-between"
            >
              <Stack spacing="1">
                <Heading
                  as="h3"
                  variant="h3"
                  color="heading-navy-fg"
                  fontWeight="bold"
                >
                  98,109
                </Heading>
                <Text fontSize="sm" color="muted">
                  Account contracts created
                </Text>
              </Stack>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>

      {/* <InstantSearch searchClient={searchClient} indexName="starknet-docs-v2">
        <SearchBox className="text-black" />
        <RefinementList attribute="title" />
        <Hits hitComponent={Hit} />
      </InstantSearch> */}
    </PageContentContainerNoSidebar>
  );
}
