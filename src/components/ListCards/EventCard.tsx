"use client";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Tag,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { Text } from "@ui/Typography/Text";
import * as React from "react";

import { FiExternalLink } from "react-icons/fi";

import { Card } from "../Card/Card";
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
};

export const EventCard = (props: Props) => {
  return (
    <Card href={props.href}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "3", md: "10" }}
        align="flex-start"
      >
        <Stack spacing="4">
          <Avatar
            rounded="xl"
            bg="black"
            size="lg"
            src={props.image}
            name={props.title}
          />
        </Stack>
        <Box>
          <Text mt="2" fontSize="xs">
            {props.startDateTime}
          </Text>
          <Stack
            spacing={{ base: "1", md: "2" }}
            direction={{ base: "column", md: "row" }}
          >
            <Text as="h2" fontWeight="bold" fontSize="18px">
              {props.title}
            </Text>
            <HStack fontSize={{ base: "md", md: "xl" }}>
              <Icon as={FiExternalLink} color="fg-default" />
            </HStack>
          </Stack>

          <Box fontSize="sm" noOfLines={1}>
            {props.description}
          </Box>
          <Wrap
            shouldWrapChildren
            mt="5"
            color={useColorModeValue("gray.600", "gray.300")}
          >
            {["type1", "type2"].map((tag) => (
              <Tag key={tag} color="inherit" px="3">
                {tag}
              </Tag>
            ))}
          </Wrap>
        </Box>
      </Stack>
    </Card>
  );
};
