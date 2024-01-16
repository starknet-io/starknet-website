import { HStack } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { Card } from "./Card";
import { Heading } from "@ui/Typography/Heading";
import * as GridCard from "./GridCard";
import { ImageIconCard } from "./ImageIconCard";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import { Tag } from "@ui/Tag/Tag";
import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
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
        "/assets/illustration-scaling.png",
      ],
      control: { type: 'select' },
    },
    size: {
      options: ["large", "small"],
      control: { type: 'select' },
    },
    orientation: {
      options: ["left", "right"],
      control: { type: 'select' },
    },
    withIllustration: {
      options: [true, false],
      control: { type: 'select' },
    },
    variant: {
      options: ["image_icon_link_card", "icon_link_card", "dapp", "large_card", "community_card"],
      control: { type: 'select' },
    },
    columns: {
      options: [2, 4],
      control: { type: 'select' },
    },
    type: {
      options: ["featured", "grid"],
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
    "id": "b7cb9a4a-e51b-41d8-a04e-a67eaee97c66",
    "type": "youtube",
    "url": "https://www.youtube.com/watch?v=HJP5LVkulBw&list=PLcIyXLwiPilV5RBZj43AX1FY4FJMWHFTY&index=14",
    "image": "/assets/cairo-workshop-11.jpg",
    "title": "StarkNet Workshop #11: All about storage proofs with Herodotus",
    "published_at": "2023-03-14T13:27:19.395Z",
    "difficulty": "intermediate",
    "tags": [
        "Storage Proofs"
    ],
    "published_at_ts": 1678800439,
    "slug": "starknet-workshop-11-all-about-storage-proofs-with-herodotus",
    "locale": "en",
    "sourceFilepath": "_data/tutorials/b7cb9a4a-e51b-41d8-a04e-a67eaee97c66.yml",
    "objectID": "tutorials:en:b7cb9a4a-e51b-41d8-a04e-a67eaee97c66.yml",
    "_highlightResult": {
        "title": {
            "value": "StarkNet Workshop #11: All about storage proofs with Herodotus",
            "matchLevel": "none",
            "matchedWords": []
        },
        "published_at": {
            "value": "2023-03-14T13:27:19.395Z",
            "matchLevel": "none",
            "matchedWords": []
        }
    },
    "__position": 1
  },
  {
    "id": "0cairows11",
    "type": "youtube",
    "url": "https://www.youtube.com/watch?v=MUzfvHeqXZs",
    "image": "/assets/10_-first-steps-to-contribute-to-kakarot-zkevm.png",
    "title": "First steps to contribute to Kakarot ZKEVM",
    "author": "StarkWare",
    "published_at": "2023-02-21T00:00:00.000Z",
    "difficulty": "beginner",
    "course": "cairo_workshops",
    "tags": [
        "testing"
    ],
    "published_at_ts": 1676937600,
    "slug": "first-steps-to-contribute-to-kakarot-zkevm",
    "locale": "en",
    "sourceFilepath": "_data/tutorials/0cairows11.yml",
    "objectID": "tutorials:en:0cairows11.yml",
    "_highlightResult": {
        "title": {
            "value": "First steps to contribute to Kakarot ZKEVM",
            "matchLevel": "none",
            "matchedWords": []
        },
        "published_at": {
            "value": "2023-02-21T00:00:00.000Z",
            "matchLevel": "none",
            "matchedWords": []
        }
    },
    "__position": 2
  },
  {
    "id": "0snedu03",
    "type": "github",
    "url": "https://github.com/starknet-edu/starknet-erc721",
    "image": "/assets/github.png",
    "title": "Starknet Edu – ERC721",
    "author": "StarkWare ",
    "published_at": "2023-01-31T00:00:00+00:00",
    "difficulty": "beginner",
    "course": "starknet_edu",
    "tags": [
        "cairo",
        "ERC721"
    ],
    "published_at_ts": 1675123200,
    "slug": "starknet-edu-erc721",
    "locale": "en",
    "sourceFilepath": "_data/tutorials/0snedu03.yml",
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
    "__position": 3
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
    "published_at_ts": 1675123200,
    "slug": "starknet-edu-github-repo",
    "locale": "en",
    "sourceFilepath": "_data/tutorials/0snedu01.yml",
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
  },
  {
    name: "Paris Blockchain Week Summit",
    description:
      "The Paris Blockchain Week Summit is a two-day event that explores the latest developments in blockchain technology and its potential applications across a range of industries.",
    url: "https://www.parisblockchainweek.com/summit#speakers",
    start_date: "2023-03-20T09:50:05.569Z",
    end_date: "2023-03-24T09:50:05.575Z",
    image: "/assets/paris_blockchain_week-summit-2x.png",
    location: "europe",
    tags: ["crypto", "blockchain", "Paris"],
    type_list: [
      {
        url: "https://www.parisblockchainweek.com/summit#speakers",
        type: "ios",
      },
      {
        url: "https://www.parisblockchainweek.com/summit#speakers",
        type: "android",
      },
    ],
    city: "London",
    country: "UK",
    slug: "paris-blockchain-week-summit",
    locale: "en",
    sourceFilepath: "_data/events/en/paris-blockchain-week-summit.yml",
    objectID: "events:en:paris-blockchain-week-summit.yml",
    _highlightResult: {
      locale: {
        value: "en",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    __position: 4,
    recap: {
      label: "Read the summary of this event",
      link: "https://www.parisblockchainweek.com/summit#speakers",
      isExternal: true,
    },
  },
];

const articleData = {
  "id": "9dac0c05-fed5-40ef-84cd-a5a504b0d2b3",
  "slug": "starknet-community-call-40-ama-with-giza-tech",
  "title": "Starknet Community Call #40 | AMA with Giza tech",
  "category": "community-calls",
  "post_type": "video",
  "published_date": "2023-04-23T08:34:02.316Z",
  "time_to_consume": "43:15",
  "video": {
      "url": "https://www.youtube.com/live/TJDTWJNLkbw?feature=share",
      "id": "TJDTWJNLkbw",
      "data": {
          "kind": "youtube#video",
          "etag": "Kr7n5CvoSPeLRta6yHcgXTrEqKw",
          "id": "TJDTWJNLkbw",
          "snippet": {
              "publishedAt": "2023-04-19T01:31:02Z",
              "channelId": "UCnDWguR8mE2oDBsjhQkgbvg",
              "title": "Starknet Community Call #40 | AMA with Giza tech",
              "description": "Giza is a permissionless protocol in Starknet for deploying machine learning models on-chain, performing verifiable inferences, and enabling an open AI economy.",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/TJDTWJNLkbw/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/TJDTWJNLkbw/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/TJDTWJNLkbw/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/TJDTWJNLkbw/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  },
                  "maxres": {
                      "url": "https://i.ytimg.com/vi/TJDTWJNLkbw/maxresdefault.jpg",
                      "width": 1280,
                      "height": 720
                  }
              },
              "channelTitle": "StarkWare",
              "tags": [
                  "Cairo",
                  "StarkNet",
                  "StarkWare",
                  "blockchain",
                  "decentralized",
                  "decentralization",
                  "permissionless"
              ],
              "categoryId": "28",
              "liveBroadcastContent": "none",
              "localized": {
                  "title": "Starknet Community Call #40 | AMA with Giza tech",
                  "description": "Giza is a permissionless protocol in Starknet for deploying machine learning models on-chain, performing verifiable inferences, and enabling an open AI economy."
              },
              "defaultAudioLanguage": "en-US"
          },
          "contentDetails": {
              "duration": "PT43M15S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": false,
              "contentRating": {},
              "projection": "rectangular"
          }
      }
  },
  "topic": [
      "c509a814-84b5-4552-b21e-980b92f215f6"
  ],
  "short_desc": "Giza is a permissionless protocol in Starknet for deploying machine learning models on-chain, performing verifiable inferences, and enabling an open AI economy.",
  "image": "/assets/communitycall-40-ama-with-giza-tech-youtube.png",
  "blocks": [],
  "locale": "en",
  "sourceFilepath": "_data/posts/starknet-community-call-40-ama-with-giza-tech.yml",
  "gitlog": {
      "hash": "66cd9a2a286b1ab0fbde9d56c2f420683ac881c9",
      "date": "2023-04-27T11:30:15+04:00",
      "message": "update data",
      "refs": "HEAD -> articles-read-time, origin/articles-read-time",
      "body": "",
      "author_name": "Tsotne Nazarashvili",
      "author_email": "cotne.95@gmail.com"
  },
  "objectID": "posts:en:starknet-community-call-40-ama-with-giza-tech.yml",
  "_highlightResult": {
      "title": {
          "value": "Starknet Community Call #40 | AMA with Giza tech",
          "matchLevel": "none",
          "matchedWords": []
      },
      "published_date": {
          "value": "2023-04-23T08:34:02.316Z",
          "matchLevel": "none",
          "matchedWords": []
      },
      "locale": {
          "value": "en",
          "matchLevel": "none",
          "matchedWords": []
      }
  },
  "__position": 1
}

const articleCategory = {
  "id": "community-and-events",
  "name": "Community & Events",
  "slug": "community-and-events",
  "locale": "en",
  "objectID": "categories:en:community-and-events.yml",
  "sourceFilepath": "_data/categories/community-and-events.yml"
}

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
        {hits.map(hit => {
          const date = moment(hit.published_at).format("MMM DD, YYYY");
          return (
            <GridCard.Root href={hit.url} key={hit.title}>
              <GridCard.Image url={hit.image} type={hit.type} />
              <GridCard.Body>
                {/* <GridCard.Category category={hit.tags} /> */}
                <GridCard.Content
                  title={hit.title}
                  author={hit.author}
                  date={date}
                  difficulty={hit.difficulty}
                />
              </GridCard.Body>
              <GridCard.Footer>
                <HStack spacing="8px">
                  {hit?.tags?.map((tag, i) => {
                    // only show max 2 tags
                    if (i > 1) return null;
                    return (
                      <Tag key={i} variant="listCard">
                        {tag}
                      </Tag>
                    );
                  })}
                </HStack>
              </GridCard.Footer>
            </GridCard.Root>
          )
        })}
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
            twitter={hit.twitter}
            discord={hit.discord}
            recap={hit.recap}
          />
        );
      })}
    </Flex>
  </ThemeProvider>
);

export const Article = (args: { type?: "featured" | "grid" }) => {
  const {
    type
  } = args;
  return (
  <ThemeProvider>
    <Flex gap={4} direction="column" flex={1} maxWidth="1000px">
    <ArticleCard.Root
        type={type}
        href={`/${articleData.locale}/posts/${articleCategory.slug}/${articleData.slug}`}
      >
        <ArticleCard.Image url={articleData.image} type={type} />

        <ArticleCard.Body type={type}>
          <ArticleCard.Category category={articleCategory} />
          <ArticleCard.Content
            title={articleData.title}
            excerpt={articleData.short_desc}
            type={type}
          />
          <ArticleCard.Footer
            postType={articleData.post_type}
            publishedAt={moment(articleData.published_date).format("MMM DD, YYYY")}
            timeToConsume={articleData.time_to_consume}
            type={type}
          />
        </ArticleCard.Body>
      </ArticleCard.Root></Flex>
  </ThemeProvider>
)
};

export const ImageIcon = (args: { variant?: "image_icon_link_card" | "icon_link_card" | "dapp" | "large_card" | "community_card";
title: string;
linkText?: string;
icon?: string;
description?: string;
locale: string,
size?: "large" | "small",
withIllustration?: boolean,
withBackground?: boolean,
columns?: number,
orientation?: "left",
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
    columns,
    orientation
  } = args;
  return (
    <ThemeProvider>
      <Flex gap={4} direction="column" flex={1}>
          <Heading variant="h2">ImageIconCard component</Heading>
          <Heading variant="h4">Use knobs to play with the component</Heading>
          <Grid gap="10px" gridTemplateColumns={(variant === "large_card" || variant === "community_card") ? "1" : "repeat(3, minmax(0, 1fr))"} paddingBottom="40px">
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
              orientation={orientation}
            />
          </Grid>
          <hr/>
        <Heading variant="h2">Showcase</Heading>
        <Heading variant="h3">Community ImageIconCard</Heading>
        <Heading variant="h4">(community_card variant)</Heading>
        <Grid gap="10px" gridTemplateColumns="repeat(1, minmax(0, 1fr))" paddingBottom="40px">
          <ImageIconCard
            variant="community_card"
            title="Community led."
            size="large"
            description="This website is a community powered guide to the Starknet ecosystem."
            link={{
              custom_title: 'Get involved',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            orientation="left"
          />
        </Grid>
        <Heading variant="h3">Large ImageIconCard</Heading>
        <Heading variant="h4">(large_card variant, default orientation)</Heading>
        <Grid gap="10px" gridTemplateColumns="repeat(1, minmax(0, 1fr))" paddingBottom="40px">
          <ImageIconCard
            variant="large_card"
            title="Starknet 101"
            size="large"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/illustration-scaling.png"
            link={{
              custom_title: 'View',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            orientation="left"
          />
          <ImageIconCard
            variant="large_card"
            title="Starknet 101"
            description="Get up and running developing on Starknet through this series of video tutorials."
            icon="/assets/illustration-scaling.png"
            link={{
              custom_title: 'View',
              custom_internal_link: '/tutorials/cairo_101'
            }}
            locale="en"
            orientation="right"
          />
        </Grid>
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
            title="Starknet dApps"
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
  columns: 4,
  orientation: "left",
  type: "featured"
}

