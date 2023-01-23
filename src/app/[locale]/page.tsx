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
import { BlockCards } from "../../blocks/BlockCards";
import { BasicCard } from "../../blocks/cards/BasicCard";
import { LargeCard } from "../../blocks/cards/LargeCard";
import { ImageIconCard } from "../../blocks/cards/ImageIconCard";
import { IconLinkCard } from "../../blocks/cards/IconLinkCard";
import { CommunityCard } from "../../blocks/cards/CommunityCard";
import { BlockStats } from "../../blocks/dataBlocks/BlockStats";
import { BlockGrouping } from "../../blocks/BlockGrouping";
import { BlockCommunityEvents } from "../../blocks/dataBlocks/BlockCommunityEvents/BlockCommunityEvents";
import { HomepageHero } from "../../blocks/HomepageHero";
import { PageContentContainerNoSidebar } from "./(components)/PageContentContainerNoSidebar";
import { useMessages, useLocale } from "./(components)/ClientLocaleProvider";

export default function Index() {
  const messages = useMessages();
  const locale = useLocale();

  return (
    <PageContentContainerNoSidebar>
      {/* <Box as="section" bg="card-bg" borderRadius="xl">
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
            <Heading color="heading-navy-fg" as="h3" variant="h3" size="sm">
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
       */}
      <BlockGrouping>
        <HomepageHero />

        <CommunityCard
          description=" This website is a community powered guide to the Starknet
              ecosystem."
          title="Community led."
          linkLabel="Get Involved"
          linkHref="/community/"
        />
      </BlockGrouping>
      <BlockGrouping>
        <LargeCard
          orientation="left"
          image="https://cdn.midjourney.com/08fcc5e8-f866-4582-96b1-030943fccfca/grid_0.png"
          linkHref="/what-is-starknet/"
          linkLabel="What is Starknet"
          title="What is Starknet? "
          description="Starknet is a technology that uses math and cryptography to securely scale Ethereum. The community is growing fast and building out an exciting ecosystem of dapps and infrastructure. "
        />
        <LargeCard
          orientation="right"
          image="https://cdn.midjourney.com/08fcc5e8-f866-4582-96b1-030943fccfca/grid_0.png"
          linkHref="/what-is-starknet/"
          linkLabel="How Starknet works"
          title="How does it scale Ethereum?"
          description="Starknet sits on top of Ethereum as a layer 2 network. It uses technology called “STARK Proofs” to securely compress huge amounts of transactions for Ethereum.  "
        />

        <BlockCards base={1} md={2}>
          <BasicCard
            title="Scaling transactions"
            linkLabel="Learn"
            linkHref="/what-is-starknet/"
          />
          <BasicCard
            title="Scaling compute power"
            linkLabel="Learn"
            linkHref="/what-is-starknet/"
          />
        </BlockCards>
      </BlockGrouping>
      <BlockGrouping>
        <LargeCard
          image="https://cdn.midjourney.com/08fcc5e8-f866-4582-96b1-030943fccfca/grid_0.png"
          linkHref="/what-is-starknet/"
          linkLabel="What is now possible"
          title="What do Ethereum + Starknet unlock?"
          description="Together the networks unlock Ethereum’s vision for a fairer and more open internet. Decentralised financial systems. Digital assets. Trustless systems."
        />

        <BlockCards base={1} md={2} lg={4}>
          <IconLinkCard
            title="Unlimited scale"
            icon="/assets/cards/unlimited_scale.svg"
            color="orange"
            linkHref="Learn"
            linkLabel="Learn"
          />
          <IconLinkCard
            icon="/assets/cards/on-chain-computation.svg"
            color="blue"
            linkHref="Learn"
            linkLabel="Learn"
            title="On-chain computation"
          />
          <IconLinkCard
            icon="/assets/cards/account_abstraction.svg"
            color="green"
            linkHref="Learn"
            linkLabel="Learn"
            title="Account abstraction"
          />
          <IconLinkCard
            icon="/assets/cards/trustlessness.svg"
            color="yellow"
            linkHref="Learn"
            linkLabel="Learn"
            title="Trustlessness"
          />
        </BlockCards>
      </BlockGrouping>
      <BlockGrouping>
        <BlockCards
          base={1}
          md={2}
          lg={3}
          heading="Start building"
          headingVariant="lg"
        >
          {[
            {
              linkHref: "/what-is-starknet/",
              linkLabel: "How Starknet works",
              imageAlt: "How starknet works",
              icon: "/assets/cards/5.svg",
              title: "Learn how Starknet works",
              description:
                "Learn how the Starknet architecture and tech stack works.",
            },
            {
              linkHref: "https://docs.starknet.io",
              linkLabel: "View docs",
              imageAlt: "Developer documentation",
              icon: "/assets/cards/6.svg",
              title: "Developer documentation",
              description:
                "Read the docs to learn how to build on Starknet and Cairo.",
            },
            {
              linkHref: "/tutorials/",
              linkLabel: "View tutorials",
              imageAlt: "Developer tutorials",
              icon: "/assets/cards/7.svg",
              title: "Developer tutorials",
              description:
                "Learn how to build on Starknet from developers who have already started.",
            },
          ].map((card, index) => (
            <ImageIconCard
              key={index}
              linkHref={card.linkHref}
              linkLabel={card.linkLabel}
              imageAlt={card.imageAlt}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </BlockCards>

        <BlockCards base={2} md={2} lg={4} heading="Explore new possibilities:">
          <BasicCard
            size="sm"
            title="Computing power"
            linkLabel="Learn"
            linkHref="/what-is-starknet/"
          />
          <BasicCard
            size="sm"
            title="Account abstraction"
            linkLabel="Learn"
            linkHref="/what-is-starknet/"
          />
          <BasicCard
            size="sm"
            title="Trustless bridging"
            linkLabel="Learn"
            linkHref="/what-is-starknet/"
          />
          <BasicCard
            size="sm"
            title="Storage proofs"
            linkLabel="Learn"
            linkHref="/what-is-starknet/"
          />
        </BlockCards>
      </BlockGrouping>
      <BlockGrouping>
        <BlockCards
          base={1}
          md={2}
          lg={3}
          heading="Start playing"
          headingVariant="lg"
        >
          {[
            {
              linkHref: "/dapps/",
              linkLabel: "view dapps",
              imageAlt: "Discover dapps",
              icon: "/assets/cards/4.svg",
              title: "Discover dapps",
              description:
                "Starknet.io is a community powered guide for users and developers. ",
            },
            {
              linkHref: "/wallets/",
              linkLabel: "View wallets",
              imageAlt: "How starknet works",
              icon: "/assets/cards/2.svg",
              title: "Find a wallet",
              description:
                "Starknet.io is a community powered guide for users and developers. ",
            },
            {
              linkHref: "/bridges/",
              linkLabel: "View",
              imageAlt: "Deposit & withdraw funds",
              icon: "/assets/cards/1.svg",
              title: "Deposit & withdraw funds ",
              description:
                "Starknet.io is a community powered guide for users and developers. ",
            },
          ].map((card, index) => (
            <ImageIconCard
              key={index}
              linkHref={card.linkHref}
              linkLabel={card.linkLabel}
              imageAlt={card.imageAlt}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </BlockCards>
      </BlockGrouping>
      <BlockGrouping>
        <BlockCommunityEvents params={{ locale: locale }} />
      </BlockGrouping>

      <BlockGrouping>
        {/* Block for stats which fetches stats from an api  */}
        <BlockStats />
      </BlockGrouping>
      {/* <Box>
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
      </Box> */}
      {/* <Spacer height={2} /> */}
      {/* <Box>
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
      </Box> */}
      {/*  */}
      {/* <Box>
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
      </Box> */}
      {/*  */}

      {/* <InstantSearch searchClient={searchClient} indexName="starknet-docs-v2">
        <SearchBox className="text-black" />
        <RefinementList attribute="title" />
        <Hits hitComponent={Hit} />
      </InstantSearch> */}
    </PageContentContainerNoSidebar>
  );
}
