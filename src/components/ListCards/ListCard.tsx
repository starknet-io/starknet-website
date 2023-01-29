"use client";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Tag,
  Wrap,
  Link,
  BoxProps,
} from "src/libs/chakra-ui";
import { Text } from "@ui/Typography/Text";
import NextLink from "next/link";
import * as React from "react";

import { HiArrowUpRight, HiGlobeAlt } from "react-icons/hi2";
import { SiTwitter } from "react-icons/si";

import { Card } from "../Card/Card";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";
import { CardLink } from "src/blocks/cards/CardLink";
type Props = {
  readonly title?: string;
  readonly startDateTime?: string;
  readonly description?: string;
  readonly href?: string;
  readonly location?: string;
  readonly image?: string;
  readonly tags?: string[];
  readonly city?: string;
  readonly venue?: string;
  readonly twitterHandle?: string;
  readonly variant?: "default" | "dapp" | "event" | "job" | "wallet";
  readonly type?: string[];
  readonly rounded?: boolean;
} & BoxProps;

export const ListCard = (props: Props) => {
  return (
    <CardLink href={props.href} maxW="5xl">
      <CardGradientBorder padding="0" borderRadius={{ base: "16px" }}>
        <Box
          w={{ base: "full" }}
          mx="auto"
          bg="card-bg"
          borderRadius="16px"
          rounded={props.variant === "default" ? "8px" : "16px"}
          padding={"32px 24px"}
          // borderWidth="1px"
          borderColor="card-br"
          // shadow={{ md: "base" }}
          px={{ base: "6", md: "8" }}
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "3", md: "10" }}
            align="flex-start"
          >
            <Stack spacing="4">
              <Avatar
                rounded={props.rounded ? "full" : "xl"}
                bg="black"
                size="superLg"
                src={props.image}
                name={props.title}
              />
            </Stack>
            <Box>
              {props.startDateTime && (
                <Text
                  mt="2"
                  fontSize="xs"
                  fontWeight="extrabold"
                  color="list-card-sm-title-fg"
                >
                  {props.startDateTime}
                </Text>
              )}

              <Stack
                spacing={{ base: "1", md: "2" }}
                direction={{ base: "row", md: "row" }}
                pb="4px"
              >
                <Text
                  as="h2"
                  fontWeight="bold"
                  fontSize="18px"
                  color="list-card-lg-title-fg"
                >
                  {props.title}
                </Text>
                <HStack fontSize={{ base: "md", md: "xl" }}>
                  {/* <Icon as={FiExternalLink} color="list-card-sm-title-link-fg" /> */}
                  <Icon as={HiArrowUpRight} color="list-card-lg-title-fg" />
                </HStack>
              </Stack>

              <Text pb="14px" fontSize="sm" color="list-card-lg-desc-fg">
                {props.description}
              </Text>
              {props.variant === "event" && (
                <Box py="8px">
                  <Button variant="outline" size="sm">
                    View event recap
                  </Button>
                </Box>
              )}
              {props.type && (
                <Wrap pb="20px" pt="4px" shouldWrapChildren>
                  {props.type.map((tag) => (
                    <Tag key={tag} variant="listCard">
                      {tag}
                    </Tag>
                  ))}
                </Wrap>
              )}

              <Wrap shouldWrapChildren>
                {props.href && (
                  <Link
                    isExternal
                    as={NextLink}
                    href={`https://www.twitter.com/${props.href}`}
                  >
                    <HiGlobeAlt color="list-card-icon-fg" />
                  </Link>
                )}
                {props.twitterHandle && (
                  <Link
                    isExternal
                    as={NextLink}
                    href={`https://www.twitter.com/${props.twitterHandle}`}
                  >
                    <SiTwitter color="list-card-icon-fg" />
                  </Link>
                )}

                {/* <IconButton
              variant="simple"
              aria-label="Website"
              icon={<HiGlobeAlt />}
            />
            <IconButton
              variant="simple"
              aria-label="Twitter"
              icon={<SiTwitter />}
            />
            <IconButton
              variant="simple"
              aria-label="Discord"
              icon={<SiDiscord />}
            /> */}
              </Wrap>
            </Box>
          </Stack>
        </Box>
      </CardGradientBorder>
    </CardLink>
  );
};
