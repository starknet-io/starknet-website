"use client";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import React from "react";
import {
  HiArrowRightCircle,
  HiArrowUpRight,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";
import {
  Box,
  Icon,
  Flex,
  FlexProps,
  HStack,
  Link,
  LinkProps,
  Avatar,
} from "../../libs/chakra-ui";

type RootProps = {
  heading?: string;
} & FlexProps;

const Root = (props: RootProps) => {
  return (
    <Box>
      {props.heading && (
        <Heading variant="h2" as="h2">
          {props.heading}
        </Heading>
      )}
      <Flex
        {...props}
        as="ul"
        bg="card-bg"
        borderRadius="16px"
        borderWidth="1px"
        borderColor="card-br"
        overflow="hidden"
        direction="column"
        gap="12px"
      >
        {props.children}
      </Flex>
    </Box>
  );
};

type ItemProps = {
  label?: string;
  avatarTitle?: string;
  avatarUrl?: string;
  subLabel?: string;
  hasIcon?: boolean;
} & LinkProps;

const Item = ({
  label,
  subLabel,
  avatarTitle,
  hasIcon = true,
  avatarUrl,
  isExternal,
  ...rest
}: ItemProps) => {
  return (
    <Link
      {...rest}
      color="listLink-fg"
      fontWeight="700"
      textDecoration="none"
      height={{ base: "auto", md: "80px" }}
      display="flex"
      alignItems="center"
      py={{ base: "16px", md: "0px" }}
      px={{ base: "16px", md: "24px" }}
      isExternal={isExternal}
      _hover={{ textDecoration: "none" }}
      borderTopWidth="0px!important"
      borderBottomWidth="1px!important"
      borderColor="card-br!important"
      _first={{ borderTopWidth: "0px!important" }}
      _last={{ borderBottomWidth: "0px!important" }}
    >
      <Flex direction={{ base: "column", md: "row" }} gap="8px">
        {avatarUrl && <Avatar name={avatarTitle || "N/A "} src={avatarUrl} />}

        <Flex
          gap="8px"
          alignItems="center"
          direction="row"
          _hover={{ textDecoration: "underline" }}
        >
          {hasIcon && <Icon boxSize="24px" as={HiOutlineArrowRightCircle} />}
          {label}{" "}
          {isExternal && (
            <Icon fontWeight="bold" boxSize="12px" as={HiArrowUpRight} />
          )}
        </Flex>
        {subLabel && (
          <Flex gap="8px">
            <Text
              display={{ base: "none", md: "flex" }}
              color="fg-default"
              fontWeight="normal"
            >
              •
            </Text>

            <Text
              pl={{ base: "32px", md: "0px" }}
              noOfLines={1}
              color="fg-default"
              fontWeight="normal"
            >
              {subLabel}
            </Text>
          </Flex>
        )}
      </Flex>
    </Link>
  );
};

export { Root, Item, type ItemProps };
