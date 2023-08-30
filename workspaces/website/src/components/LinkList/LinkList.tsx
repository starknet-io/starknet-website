import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import {
  HiOutlineArrowRightCircle,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";
import { Box, Icon, Flex, FlexProps, Link, Avatar } from "@chakra-ui/react";
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
    <Box>
      {heading && (
        <Heading
          variant="h3"
          color="heading-navy-fg"
          id={`toc-${slugify(heading)}`}
          marginBottom="sm"
        >
          {heading}
        </Heading>
      )}
      <Flex
        {...rest}
        as="ul"
        bg={listGap ? "transparent" : "card-bg"}
        borderRadius={listGap ? "0px" : "md"}
        borderWidth="1px"
        borderColor={listGap ? "transparent" : "border.divider"}
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

export type linkFieldsKeys = {
  custom_title?: string;
  custom_icon?: string;
  custom_internal_link?: string;
  custom_external_link?: string;
  page?: string;
  post?: string;
  hasIcon?: boolean;
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
  link?: linkFieldsKeys;
};

const getLinkIcon = (iconName?: string) => {
  // TODO add what custom icons we want to support for links
  return HiOutlineArrowRightCircle;
};
const Item = ({ subLabel, link, avatar, ...rest }: ItemProps) => {
  const { listSize, isSeperated } = useContext(ListContext);
  const isLinkisExternal = !!link?.custom_external_link;

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
        gap="12px"
        alignItems={{ md: "center" }}
      >
        {avatar && (
          <Flex alignItems="center" gap="8px">
            <Avatar name={avatar.title || "N/A "} src={avatar.url} size="sm" />
            {avatar.displayTitle && avatar.title && (
              <Text color="content.support" lineHeight="28px">
                {avatar.title}
              </Text>
            )}
          </Flex>
        )}

        {link && (
          <Link
            href={
              isLinkisExternal
                ? link.custom_external_link
                : link.custom_internal_link
            }
            isExternal={isLinkisExternal}
            display="flex"
            gap="sm"
            alignItems="center"
            _hover={{ textDecoration: "underline" }}
          >
            {(link.hasIcon ?? true) && (
              <Icon boxSize="24px" as={getLinkIcon(link.custom_icon)} />
            )}
            {link.custom_title}
            {isLinkisExternal && (
              <Icon
                fontWeight="bold"
                height="16x"
                width="16x"
                as={HiOutlineArrowUpRight}
                marginLeft="-4px"
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
            color="content.support"
          >
            {subLabel.label && (
              <Flex gap="8px">
                <Text display={{ base: "none", md: "flex" }}>•</Text>
                <Text noOfLines={1}>{subLabel.label}</Text>
              </Flex>
            )}
            {subLabel.boldLabel && (
              <Text
                // pl={{ base: "32px", md: "0px" }}
                noOfLines={1}
                color="subnav-fg-accent"
                fontWeight={600}
                lineHeight="xl"
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
