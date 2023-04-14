"use client";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { createContext, useContext } from "react";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { slugify } from "src/utils/utils";
import { Avatar, Box, Flex, FlexProps, Icon, Link } from "../../libs/chakra-ui";
import { ArrowUpIcon } from "./ArrowUpIcon";

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
  avatar?: {
    title?: string;
    displayTitle?: boolean;
    url?: string;
  };
  subLabel?: {
    label: string;
    boldLabel?: string;
  };
  link?: {
    label: string;
    href: string;
    hasIcon?: boolean;
    isExternal?: boolean;
  };
};

const Item = ({ subLabel, link, avatar, ...rest }: ItemProps) => {
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
    <Box
      {...rest}
      fontWeight="700"
      textDecoration="none"
      height={{ base: "auto", md: height[listSize] }}
      display="flex"
      alignItems="center"
      px="24px"
      py={{ base: "24px", md: "0px" }}
      _hover={{ textDecoration: "none" }}
      borderTopWidth="0px!important"
      borderBottomWidth="1px!important"
      borderColor="card-br!important"
      _first={{ borderTopWidth: "0px!important" }}
      _last={{ borderBottomWidth: "0px!important" }}
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
