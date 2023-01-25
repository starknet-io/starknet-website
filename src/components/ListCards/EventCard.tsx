"use client";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Stack,
  Tag,
  useColorModeValue,
  Wrap,
} from "src/libs/chakra-ui";
import { Text } from "@ui/Typography/Text";
import * as React from "react";

import { FiExternalLink } from "react-icons/fi";
import { HiGlobeAlt } from "react-icons/hi2";
import { SiDiscord, SiTwitter } from "react-icons/si";

import { Card } from "../Card/Card";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";
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
  readonly twitter?: string;
  readonly variant?: "default" | "list" | "event" | "job";
};

export const EventCard = (props: Props) => {
  return (
    <CardGradientBorder>
      <Card href={props.href} variant="list">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "3", md: "10" }}
          align="flex-start"
        >
          <Stack spacing="4">
            <Avatar
              rounded="xl"
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
                <Icon as={FiExternalLink} color="list-card-sm-title-link-fg" />
              </HStack>
            </Stack>

            <Text
              pb="14px"
              fontSize="sm"
              noOfLines={1}
              color="list-card-lg-desc-fg"
            >
              {props.description}
            </Text>
            {props.variant === "event" && (
              <Box py="8px">
                <Button variant="outline" size="sm">
                  View event recap
                </Button>
              </Box>
            )}

            <Wrap pb="20px" pt="8px" shouldWrapChildren>
              {["Browser extension", "iOS", "Android"].map((tag) => (
                <Tag key={tag} variant="listCard">
                  {tag}
                </Tag>
              ))}
            </Wrap>
            <Wrap shouldWrapChildren>
              <IconButton
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
              />
            </Wrap>
          </Box>
        </Stack>
      </Card>
    </CardGradientBorder>
  );
};
