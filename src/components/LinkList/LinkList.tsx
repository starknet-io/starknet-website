"use client";
import { createContext, useContext, useMemo } from "react";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { HiArrowUpRight, HiOutlineArrowRightCircle } from "react-icons/hi2";
import { slugify } from "src/utils/utils";
import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  Icon,
  Link,
  LinkProps,
} from "../../libs/chakra-ui";

export type ListSize = "sm" | "md" | "lg";

const ListContext = createContext<{ listSize: ListSize }>({
  listSize: "md",
});

type RootProps = {
  heading?: string;
  listSize?: ListSize;
} & FlexProps;

const Root = (props: RootProps) => {
  return (
    <Box mb="80px">
      {props.heading && (
        <Heading
          variant="h3"
          color="heading-navy-fg"
          id={`toc-${slugify(props.heading)}`}
          marginBottom="24px"
        >
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
        // gap="12px"
      >
        <ListContext.Provider value={{ listSize: props.listSize || "md" }}>
          {props.children}
        </ListContext.Provider>
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
  href,
  ...rest
}: ItemProps) => {
  const { listSize } = useContext(ListContext);

  const height = {
    sm: "64px",
    md: "72px",
    lg: "80px",
  };
  const padding = {
    sm: "16px",
    md: "20px",
    lg: "24px",
  };

  return (
    <Link
      {...rest}
      color="listLink-fg"
      fontWeight="700"
      textDecoration="none"
      height={{ base: "auto", md: height[listSize] }}
      display="flex"
      alignItems="center"
      px={padding[listSize]}
      py={{ base: padding[listSize], md: "0px" }}
      isExternal={isExternal}
      _hover={{ textDecoration: "none" }}
      borderTopWidth="0px!important"
      borderBottomWidth="1px!important"
      borderColor="card-br!important"
      _first={{ borderTopWidth: "0px!important" }}
      _last={{ borderBottomWidth: "0px!important" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        gap="8px"
        alignItems="center"
      >
        <Flex
          gap="8px"
          alignItems="center"
          direction="row"
          _hover={{ textDecoration: "underline" }}
        >
          {!avatarUrl && hasIcon && (
            <Icon boxSize="24px" as={HiOutlineArrowRightCircle} />
          )}
          {avatarUrl && (
            <Avatar name={avatarTitle || "N/A "} src={avatarUrl} size="sm" />
          )}
          {label}{" "}
          {isExternal && (
            <Icon fontWeight="bold" boxSize="12px" as={HiArrowUpRight} />
          )}
        </Flex>
        {subLabel && (
          <Flex gap="8px">
            <Text display={{ base: "none", md: "flex" }} color="fg-default">
              •
            </Text>

            <Text
              pl={{ base: "32px", md: "0px" }}
              noOfLines={1}
              color="fg-default"
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
