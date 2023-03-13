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
} from "src/libs/chakra-ui";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import * as React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { Card } from "../Card/Card";
type Props = {
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly location: string;
  readonly image: string;
  readonly tags: string[];
};

export const ListCard = (props: Props) => {
  return (
    <Card href="/">
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "3", md: "10" }}
        align="flex-start"
      >
        <Stack spacing="4">
          <Avatar
            rounded="full"
            bg="black"
            size="lg"
            src={props.image}
            name={props.name}
          />
        </Stack>
        <Box>
          <Text mt="2" fontSize="xs">
            {props.name}
          </Text>
          <Stack
            spacing={{ base: "1", md: "2" }}
            direction={{ base: "column", md: "row" }}
          >
            <Heading variant="h4">
              {props.title}
            </Heading>
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
