"use client";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { Box, Icon, Flex, FlexProps, Link, Avatar } from "../../libs/chakra-ui";
import { slugify } from "@starknet-io/cms-utils/src/index";
import { createContext, useContext } from "react";
import { ArrowUpIcon } from "./ArrowUpIcon";

export type ListSize = "sm" | "md" | "lg";

const ListContext = createContext<{ listSize: ListSize; isSeperated: boolean }>(
  {
    listSize: "md",
    isSeperated: false,
  }
);
type RootProps = {
  heading?: string;
  listSize?: ListSize;
  listGap?: ListSize;
} & FlexProps;

const Root = (props: RootProps) => {
  const { listSize, listGap, heading, children, ...rest } = props;
  const gap: Record<ListSize, string> = {
    sm: "8px",
    md: "16px",
    lg: "24px",
  };
  return (
    <Box mb="80px">
      {heading && (
        <Heading
          variant="h3"
          color="heading-navy-fg"
          id={`toc-${slugify(heading)}`}
          marginBottom="24px"
        >
          {heading}
        </Heading>
      )}
      <Flex
        {...rest}
        as="ul"
        bg={listGap ? "transparent" : "card-bg"}
        borderRadius={listGap ? "0px" : "16px"}
        borderWidth="1px"
        borderColor={listGap ? "transparent" : "card-br"}
        overflow="hidden"
        direction="column"
        gap={gap[listGap as ListSize] || "0px"}
      >
        <ListContext.Provider
          value={{ listSize: listSize || "md", isSeperated: !!listGap }}
        >
          {children}
        </ListContext.Provider>
      </Flex>
    </Box>
  );
};

type ItemProps = {
  avatar?: {
    title?: string;
    displayTitle?: boolean;
    url?: string;
  };
  subLabel?: {
    label?: string;
    boldLabel?: string;
  };
  link?: {
    label?: string;
    href?: string;
    hasIcon?: boolean;
    isExternal?: boolean;
  };
};

const Item = ({ subLabel, link, avatar, ...rest }: ItemProps) => {
  const { listSize, isSeperated } = useContext(ListContext);

  const height = {
    sm: "64px",
    md: "72px",
    lg: "80px",
  };

  return (
    <Box
      {...rest}
      fontWeight="700"
      textDecoration="none"
      height={{ base: "auto", md: height[listSize] }}
      display="flex"
      alignItems="center"
      px="24px"
      py={{ base: "24px", md: "0px" }}
      borderTopWidth={isSeperated ? "1px" : "0px"}
      borderBottomWidth="1px!important"
      borderColor="card-br!important"
      backgroundColor="card-bg"
      _hover={{ textDecoration: "none" }}
      _last={{ borderBottomWidth: isSeperated ? "1px" : "0px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        gap="16px"
        alignItems={{ md: "center" }}
      >
        {avatar && (
          <Flex alignItems="center" gap="8px">
            <Avatar name={avatar.title || "N/A "} src={avatar.url} size="sm" />
            {avatar.displayTitle && avatar.title && <Text>{avatar.title}</Text>}
          </Flex>
        )}

        {link && (
          <Link
            href={link.href}
            isExternal={link.isExternal}
            display="flex"
            gap="8px"
            color="listLink-fg"
            _hover={{ textDecoration: "underline" }}
          >
            {(link.hasIcon ?? true) && (
              <Icon boxSize="24px" as={HiOutlineArrowRightCircle} />
            )}
            {link.label}{" "}
            {link.isExternal && (
              <Icon
                fontWeight="bold"
                boxSize="24px"
                as={ArrowUpIcon}
                height="24px"
              />
            )}
          </Link>
        )}
        {subLabel && (
          <Flex
            gap="12px"
            direction={{
              base: "column",
              md: "row",
            }}
          >
            <Text display={{ base: "none", md: "flex" }} color="fg-default">
              •
            </Text>
            <Text noOfLines={1} color="fg-default">
              {subLabel.label}
            </Text>
            {subLabel.boldLabel && (
              <Text
                // pl={{ base: "32px", md: "0px" }}
                noOfLines={1}
                color="subnav-fg-accent"
                fontWeight={700}
              >
                {subLabel.boldLabel}
              </Text>
            )}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export { Root, Item, type ItemProps };
