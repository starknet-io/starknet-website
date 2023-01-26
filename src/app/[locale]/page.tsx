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
import { PageLayout } from "@ui/Layout/PageLayout";
import { FaqBlock } from "src/blocks/FaqBlock";
import { Flex } from "../../libs/chakra-ui";
import BlockDapps from "src/blocks/dataBlocks/BlockDapps/BlockDapps";
import * as LinkList from "@ui/LinkList/LinkList";
export default async function Index({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  return (
    <PageLayout
      main={
        <Flex direction="column" gap={{ base: "56px", lg: "136px" }}>
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

            <BlockCards
              base={2}
              md={2}
              lg={4}
              heading="Explore new possibilities:"
            >
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
            <BlockCommunityEvents params={{ locale }} />
          </BlockGrouping>

          <BlockGrouping>
            <BlockStats />
          </BlockGrouping>
          <BlockGrouping>
            <FaqBlock
              heading="Common questions"
              items={[
                {
                  label: "What is Starknet?",
                  content:
                    "Starknet is a technology that uses math and cryptography to securely scale Ethereum. The community is growing fast and building out an exciting ecosystem of dapps and infrastructure.",
                },
                {
                  label: "How does it scale Ethereum?",
                  content:
                    "Starknet sits on top of Ethereum as a layer 2 network. It uses technology called “STARK Proofs” to securely compress huge amounts of transactions for Ethereum.",
                },
              ]}
            />
            <FaqBlock
              heading="Something else"
              items={[
                {
                  label: "What is Starknet?",
                  content:
                    "Starknet is a technology that uses math and cryptography to securely scale Ethereum. The community is growing fast and building out an exciting ecosystem of dapps and infrastructure.",
                },
              ]}
            />
          </BlockGrouping>
          <BlockGrouping>
            <BlockDapps
              params={{
                locale,
              }}
            />
          </BlockGrouping>
        </Flex>
      }
    />
  );
}
