import React from "react";
import { HStack } from "src/libs/chakra-ui";
import { Meta } from "@storybook/react";
import { Card } from "./Card";
import { Heading } from "@ui/Typography/Heading";
import * as GridCard from "./GridCard";
import { ImageIconCard } from "./ImageIconCard";
import { ThemeProvider } from "src/app/providers/ThemeProvider";
import {
  Grid,
  Flex
} from "@chakra-ui/react";
import { ListCard } from "@ui/Card/ListCard";
import moment from "moment";

export default {
  title: "starknet.io/Cards",
  component: Card,
  argTypes: {
    color: {
      options: ["purple", "peach", "blue", "blue-default", "cyan", "orange", "pink", "grey"],
      control: { type: 'select' },
    },
    description: {
      control: { type: 'text' },
    },
    linkText: {
      control: { type: 'text' },
    },
    icon: {
      options: [
        null,
        "/assets/1.svg",
        "/assets/dapps.svg",
        "/assets/dapps-icon.svg",
        "/assets/community.svg",
        "/assets/developers.svg",
        "/assets/deposit-withdraw.svg",
        "/assets/docs.svg",
        "/assets/5.svg",
        "/assets/on-chain-computation.svg",
        "/assets/on-ramp.svg",
        "/assets/unlimited_scale.svg",
        "/assets/trustlessness.svg",
        "/assets/tutorials.svg",
        "/assets/wallet.svg",
        "/assets/yellow.svg",
        "/assets/community-events.svg",
        "/assets/online-communities.svg",
        "/assets/local-environment.svg",
        "/assets/jobs.svg",
        "/assets/blog.svg",
        "/assets/github.svg",
        "/assets/tools-and-resources.svg",
      ],
      control: { type: 'select' },
    },
    size: {
      options: ["large", "small"],
      control: { type: 'select' },
    },
    withIllustration: {
      options: [true, false],
      control: { type: 'select' },
    },
    variant: {
      options: ["image_icon_link_card", "icon_link_card", "dapp"],
      control: { type: 'select' },
    },
    columns: {
      options: [2, 4],
      control: { type: 'select' },
    }
  },
} as Meta<typeof Card>;

export const Basic = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Card variant="default">Default card</Card>
        <Card 
          variant="list">List card</Card>
      </>
    </HStack>
  </ThemeProvider>
);

const hits = [
  {
      "id": "0snedu03",
      "type": "github",
      "url": "https://github.com/starknet-edu/starknet-erc721",
      "image": "fsadasdasasdasdasds",
      "title": "Starknet Edu – ERC721",
      "author": "StarkWare ",
      "published_at": "2023-01-31T00:00:00+00:00",
      "difficulty": "beginner",
      "course": "starknet_edu",
      "tags": [
          "cairo",
          "ERC722",
          "ERC721",
          "ERC723",
          "ERC724",
          "ERC725"
      ],
      "slug": "starknet-edu-erc721",
      "locale": "en",
      "sourceFilepath": "_data/tutorials/en/0snedu03.yml",
      "objectID": "tutorials:en:0snedu03.yml",
      "_highlightResult": {
          "title": {
              "value": "Starknet Edu – ERC721",
              "matchLevel": "none",
              "matchedWords": []
          },
          "published_at": {
              "value": "2023-01-31T00:00:00+00:00",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 1
  },
  {
      "id": "0snedu01",
      "type": "github",
      "url": "https://github.com/starknet-edu",
      "image": "/assets/github.png",
      "title": "Starknet Edu – Github Repo ",
      "author": "StarkWare ",
      "published_at": "2023-01-31T00:00:00+00:00",
      "difficulty": "beginner",
      "course": "starknet_edu",
      "tags": [
          "cairo",
          "account abstraction",
          "contracts"
      ],
      "slug": "starknet-edu-github-repo",
      "locale": "en",
      "sourceFilepath": "_data/tutorials/en/0snedu01.yml",
      "objectID": "tutorials:en:0snedu01.yml",
      "_highlightResult": {
          "title": {
              "value": "Starknet Edu – Github Repo ",
              "matchLevel": "none",
              "matchedWords": []
          },
          "published_at": {
              "value": "2023-01-31T00:00:00+00:00",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 2
  },
  {
      "id": "0cairows03",
      "type": "youtube",
      "url": "https://youtu.be/SA28R690pTA",
      "image": "/assets/cairows03.jpeg",
      "title": "Diving into Cairo ",
      "author": "StarkWare",
      "published_at": "2023-01-31T00:00:00+00:00",
      "difficulty": "beginner",
      "course": "cairo_workshops",
      "tags": [
          "cairo"
      ],
      "slug": "diving-into-cairo",
      "locale": "en",
      "sourceFilepath": "_data/tutorials/en/0cairows03.yml",
      "objectID": "tutorials:en:0cairows03.yml",
      "_highlightResult": {
          "title": {
              "value": "Diving into Cairo ",
              "matchLevel": "none",
              "matchedWords": []
          },
          "published_at": {
              "value": "2023-01-31T00:00:00+00:00",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 3
  },
  {
      "id": "0cairows02",
      "type": "youtube",
      "url": "https://youtu.be/51Qb3TLpNro",
      "image": "/assets/cairows02.jpeg",
      "title": "Account abstraction ",
      "author": "StarkWare",
      "published_at": "2023-01-31T00:00:00+00:00",
      "difficulty": "beginner",
      "course": "cairo_workshops",
      "tags": [
          "Contracts",
          "Accounts"
      ],
      "slug": "account-abstraction",
      "locale": "en",
      "sourceFilepath": "_data/tutorials/en/0cairows02.yml",
      "objectID": "tutorials:en:0cairows02.yml",
      "_highlightResult": {
          "title": {
              "value": "Account abstraction ",
              "matchLevel": "none",
              "matchedWords": []
          },
          "published_at": {
              "value": "2023-01-31T00:00:00+00:00",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 4
  }
];

const list = [
  {
      "type": "conference",
      "name": "Hacksummit",
      "description": "A Virtual Conference for Blockchain Developers Featuring the pioneers in our industry and supporting good causes.",
      "url": "http://2023.hacksummit.org/",
      "start_date": "2023-03-31T09:27:04.521Z",
      "end_date": "2023-04-02T09:27:04.535Z",
      "image": "/assets/hacksummit.jpg",
      "location": "online_remote",
      "tags": [
          "crypto",
          "blockchain",
          "starknet"
      ],
      "type_list": [
        {
          "url": "https://www.parisblockchainweek.com/summit#speakers",
          "type": "ios"
        },
        {
          "url": "https://www.parisblockchainweek.com/summit#speakers",
          "type": "android"
        }
      ],
      "city": "Paris",
      "country": "France",
      "slug": "hacksummit",
      "locale": "en",
      "sourceFilepath": "_data/events/en/hacksummit.yml",
      "objectID": "events:en:hacksummit.yml",
      "_highlightResult": {
          "locale": {
              "value": "en",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 1
  },
  {
      "type": "conference",
      "name": "HBC2023",
      "description": "A top student-run blockchain innovation hub.",
      "url": "https://www.harvardblockchain.xyz/",
      "start_date": "2023-03-30T09:10:27.037Z",
      "end_date": "2023-04-02T09:10:27.043Z",
      "image": "/assets/hbc23-2x.png",
      "location": "usa",
      "tags": [
          "crypto",
          "blockchain",
          "Harvard",
          "web3"
      ],
      "type_list": [
        {
          "url": "https://www.parisblockchainweek.com/summit#speakers",
          "type": "ios"
        },
        {
          "url": "https://www.parisblockchainweek.com/summit#speakers",
          "type": "android"
        }
      ],
      "city": "Paris",
      "country": "France",
      "slug": "hbc2023",
      "locale": "en",
      "sourceFilepath": "_data/events/en/hbc2023.yml",
      "objectID": "events:en:hbc2023.yml",
      "_highlightResult": {
          "locale": {
              "value": "en",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 2
  },
  {
      "type": "community_event",
      "name": "Cairo 1 and Starknet Roadmap",
      "description": "Starknet, Cairo 1 and everything about Starknet's roadmap, as well as a special guest from SNX",
      "url": "https://www.meetup.com/starknet-melbourne/events/291944115/",
      "start_date": "2023-03-30T07:50:35.618Z",
      "end_date": "",
      "image": "/assets/starknet-meetups.jpg",
      "location": "asia",
      "tags": [
          "crypto",
          "blockchain",
          "starknet",
          "australia",
          "Melbourne"
      ],
      "type_list": [
        {
          "url": "https://www.parisblockchainweek.com/summit#speakers",
          "type": "ios"
        },
        {
          "url": "https://www.parisblockchainweek.com/summit#speakers",
          "type": "android"
        }
      ],
      "city": "Paris",
      "country": "France",
      "slug": "cairo-1-and-starknet-roadmap",
      "locale": "en",
      "sourceFilepath": "_data/events/en/cairo-1-and-starknet-roadmap.yml",
      "objectID": "events:en:cairo-1-and-starknet-roadmap.yml",
      "_highlightResult": {
          "locale": {
              "value": "en",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 3
  },
  {
      "name": "Paris Blockchain Week Summit",
      "description": "The Paris Blockchain Week Summit is a two-day event that explores the latest developments in blockchain technology and its potential applications across a range of industries.",
      "url": "https://www.parisblockchainweek.com/summit#speakers",
      "start_date": "2023-03-20T09:50:05.569Z",
      "end_date": "2023-03-24T09:50:05.575Z",
      "image": "/assets/paris_blockchain_week-summit-2x.png",
      "location": "europe",
      "tags": [
          "crypto",
          "blockchain",
          "Paris"
      ],
      "type_list": [
        {
          "url": "https://www.parisblockchainweek.com/summit#speakers",
          "type": "ios"
        },
        {
          "url": "https://www.parisblockchainweek.com/summit#speakers",
          "type": "android"
        }
      ],
      "city": "London",
      "country": "UK",
      "slug": "paris-blockchain-week-summit",
      "locale": "en",
      "sourceFilepath": "_data/events/en/paris-blockchain-week-summit.yml",
      "objectID": "events:en:paris-blockchain-week-summit.yml",
      "_highlightResult": {
          "locale": {
              "value": "en",
              "matchLevel": "none",
              "matchedWords": []
          }
      },
      "__position": 4,
      "twitter": "https://twitter.com/myBraavos",
      "discord": "https://discord.gg/2Z8Z8Z"
  }
];

export const Gridcard = () => (
  <ThemeProvider>
    <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(280px, 1fr))",
          lg: "repeat(auto-fit, minmax(280px, 1fr))",
          xl: "repeat(auto-fit, minmax(280px, 299px))",
        }}
        templateRows="1fr"
        columnGap="24px"
        rowGap="48px"
      >
        {hits.map(hit => <GridCard.Root href={hit.url} key={hit.title}>
          <GridCard.Image url={hit.image} type={hit.type} />
          <GridCard.Body>
            {/* <GridCard.Category category={hit.tags} /> */}
            <GridCard.Content
              title={hit.title}
              author={hit.author}
              date="12.03.2023"
              difficulty={hit.difficulty}
            />
          </GridCard.Body>
          <GridCard.Footer>
            <GridCard.Tags tags={hit?.tags} />
          </GridCard.Footer>
        </GridCard.Root>)}
    </Grid>
  </ThemeProvider>
);

export const Listcard = () => (
  <ThemeProvider>
    <Flex gap={4} direction="column" flex={1}>
      {list.map((hit) => {
        return (
          <ListCard
            variant="event"
            href={hit.url}
            key={hit?.name}
            startDateTime={
              hit?.end_date
                ? `${moment(hit?.start_date).format("ddd MMM DD")} - ${moment(
                    hit?.end_date,
                  ).format("ddd MMM DD, YYYY")}`
                : moment(hit?.start_date).format("ddd MMM DD, YYYY")
            }
            image={hit.image}
            title={hit.name}
            description={hit.description}
            type={hit.tags}
            type_list={hit.type_list}
            city={hit.city}
            country={hit.country}
            twitterHandle={hit.twitter}
            discordHandle={hit.discord}
          />
        );
      })}
    </Flex>
  </ThemeProvider>
);

export const ImageIcon = (args: { variant?: "image_icon_link_card" | "icon_link_card" | "dapp";
title: string;
linkText?: string;
icon?: string;
description?: string;
locale: string,
size?: "large" | "small",
withIllustration?: boolean,
withBackground?: boolean,
columns?: number,
color?:
| "blue-default"
| "orange"
| "blue"
| "purple"
| "peach"
| "cyan"
| "pink"
| "grey" }) => {
  const {
    color,
    description,
    linkText,
    icon,
    size,
    withIllustration,
    variant,
    columns
  } = args;
  return (
    <ThemeProvider>
      <Flex gap={4} direction="column" flex={1}>
          <Heading variant="h2">ImageIconCard component</Heading>
          <Heading variant="h4">Use knobs to play with the component</Heading>
          <Grid gap="10px" gridTemplateColumns="repeat(3, minmax(0, 1fr))" paddingBottom="40px">
            <ImageIconCard
              variant={variant}
              color={color}
              title="Starknet 101"
              description={description}
              icon={icon}
              link={{
                custom_title: linkText,
                custom_internal_link: '/tutorials/cairo_101'
              }}
              locale="en"
              withIllustration={withIllustration}
              size={size}
              columns={columns}
            />
          </Grid>
          <hr/>
        <Heading variant="h2">Showcase</Heading>
        <Heading variant="h3">Large ImageIconCard</Heading>
        <Heading variant="h4">(image_icon_link_card variant, large size)</Heading>
        <Grid gap="10px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" paddingBottom="40px">
          <ImageIconCard
            variant="image_icon_link_card"
            color="blue-default"
            title="Starknet 101"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/1.svg"
            link={{
              custom_title: 'View',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            withIllustration={false}
            size="large"
          />
          <ImageIconCard
            variant="image_icon_link_card"
            color="blue-default"
            title="Starknet 102"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/dapps.svg"
            link={{
              custom_title: 'View',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            withIllustration={true}
            size="large"
          />
        </Grid>
        <Heading variant="h3">Small ImageIconCard</Heading>
        <Heading variant="h4">(image_icon_link_card variant, small size)</Heading>
        <Grid gap="10px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" paddingBottom="40px">
          <ImageIconCard
            variant="image_icon_link_card"
            color="blue-default"
            title="Starknet 101"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/deposit-withdraw.svg"
            link={{
              custom_title: 'View',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            withIllustration={false}
            size="small"
          />
          <ImageIconCard
            variant="image_icon_link_card"
            color="blue-default"
            title="Starknet 101"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/developers.svg"
            link={{
              custom_title: 'View',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            withIllustration={true}
            size="small"
          />
        </Grid>
        <Heading variant="h3">Image and icon card / gradient variants</Heading>
        <Heading variant="h4">(image_icon_link_card variant, small size, without links)</Heading>
        <Grid gap="10px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" paddingBottom="40px">
          <ImageIconCard
            variant="image_icon_link_card"
            color="purple"
            title="Starknet 101"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/docs.svg"
            locale="en"
            withIllustration={false}
            size="small"
          />
          <ImageIconCard
            variant="image_icon_link_card"
            color="peach"
            title="Starknet Dapps"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/5.svg"
            locale="en"
            withIllustration={false}
            size="small"
          />
          <ImageIconCard
            variant="image_icon_link_card"
            color="blue"
            title="Starknet 101"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/on-chain-computation.svg"
            locale="en"
            withIllustration={false}
            size="small"
          />
          <ImageIconCard
            variant="image_icon_link_card"
            color="cyan"
            title="Starknet 101"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/unlimited_scale.svg"
            locale="en"
            withIllustration={false}
            size="small"
          />
          <ImageIconCard
            variant="image_icon_link_card"
            color="orange"
            title="Starknet 101"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/trustlessness.svg"
            locale="en"
            withIllustration={false}
            size="small"
          />
          <ImageIconCard
            variant="image_icon_link_card"
            color="pink"
            title="Starknet 101"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/tutorials.svg"
            locale="en"
            withIllustration={false}
            size="small"
          />
        </Grid>
        <Heading variant="h3">Icon link card</Heading>
        <Heading variant="h4">(icon_link_card variant with and without icon)</Heading>
        <Grid gap="10px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" paddingBottom="40px">
          <ImageIconCard
            variant="icon_link_card"
            color="blue"
            title="Unlimited title"
            link={{
              custom_title: 'Learn',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            icon="/assets/wallet.svg"
            locale="en"
            size="large"
          />
          <ImageIconCard
            variant="icon_link_card"
            color="blue"
            title="Unlimited title"
            link={{
              custom_title: 'Learn',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            icon="/assets/3.svg"
            locale="en"
            size="large"
          />
          <ImageIconCard
            variant="icon_link_card"
            color="peach"
            title="Unlimited scale"
            link={{
              custom_title: 'Learn',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            size="large"
          />
          <ImageIconCard
            variant="icon_link_card"
            color="peach"
            title="Unlimited scale"
            link={{
              custom_title: 'Learn',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            size="large"
          />
        </Grid>
        <Heading variant="h3">Icon link card 4 columns</Heading>
        <Heading variant="h4">(icon_link_card variant with and without icon)</Heading>
        <Grid gap="10px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" paddingBottom="40px">
          <ImageIconCard
            variant="icon_link_card"
            color="blue"
            title="Unlimited title"
            columns={4}
            link={{
              custom_title: 'Learn',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            size="large"
          />
          <ImageIconCard
            variant="icon_link_card"
            color="peach"
            title="Unlimited scale"
            columns={4}
            link={{
              custom_title: 'Learn',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            size="large"
          />
          <ImageIconCard
            variant="icon_link_card"
            color="blue"
            title="Unlimited title"
            columns={4}
            link={{
              custom_title: 'Learn',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            size="large"
          />
          <ImageIconCard
            variant="icon_link_card"
            color="peach"
            title="Unlimited scale"
            columns={4}
            link={{
              custom_title: 'Learn',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            size="large"
          />
        </Grid>
        <Heading variant="h3">Dapp cards</Heading>
        <Heading variant="h4">(dapp variant)</Heading>
        <Grid gap="10px" gridTemplateColumns="repeat(3, minmax(0, 1fr))" paddingBottom="40px">
        <ImageIconCard
            variant="dapp"
            color="grey"
            title="Cartridge"
            description="Account abstraction "
            icon="/assets/Cartridge.png"
            locale="en"
            withIllustration={false}
            size="large"
          />
          <ImageIconCard
            variant="dapp"
            color="grey"
            title="Cartridge"
            description="Account abstraction "
            icon="/assets/community-events.svg"
            locale="en"
            withIllustration={false}
            size="large"
          />
        </Grid>
      </Flex>
    </ThemeProvider>
  )
};
ImageIcon.args = {
  color: "purple",
  description: "Get up and running developing on Starknet through this series of video tutorials.",
  linkText: "View",
  icon: "/assets/1.svg",
  size: "large",
  withIllustration: true,
  variant: "image_icon_link_card",
  columns: 4
}