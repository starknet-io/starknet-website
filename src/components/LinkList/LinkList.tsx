"use client";
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

const Root = (props: FlexProps) => {
  return (
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
      height="80px"
      display="flex"
      alignItems="center"
      padding="0 24px"
      isExternal={isExternal}
      _hover={{ textDecoration: "none" }}
      borderTopWidth="0px!important"
      borderBottomWidth="1px!important"
      borderColor="card-br!important"
      _first={{ borderTopWidth: "0px!important" }}
      _last={{ borderBottomWidth: "0px!important" }}
    >
      <HStack spacing="16px">
        {avatarUrl && <Avatar name={avatarTitle || "N/A "} src={avatarUrl} />}
        {hasIcon && <Icon boxSize="24px" as={HiArrowRightCircle} />}
        <Box _hover={{ textDecoration: "underline" }}>
          {label}{" "}
          {isExternal && (
            <Icon fontWeight="bold" boxSize="12px" as={HiArrowUpRight} />
          )}
        </Box>
        {subLabel && (
          <>
            <Text color="fg-default" fontWeight="normal">
              •
            </Text>

            <Text color="fg-default" fontWeight="normal">
              {subLabel}
            </Text>
          </>
        )}
      </HStack>
    </Link>
  );
};

export { Root, Item, type ItemProps };
