import { Link, LinkProps, Icon } from "@chakra-ui/react";
import { HiArrowUpRight } from "react-icons/hi2";

type Props = {} & LinkProps;

export const NavBarLink = (props: Props) => {
  return (
    <Link
      fontSize="sm"
      px={4}
      height="36px"
      bg="navbar-link-bg"
      color="navbar-link-fg"
      borderRadius={18}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      textDecoration="none"
      mt="0px!important"
      gap={1}
      _hover={{
        color: "navbar-link-hover-fg",
        bg: "navbar-link-hover-bg",
      }}
      _active={{
        color: "navbar-link-active-fg",
        svg: {
          color: "navbar-link-active-fg",
        },
      }}
      // _visited={{
      //   color: "navbar-link-active-fg",
      //   svg: {
      //     color: "navbar-link-active-fg",
      //   },
      // }}
      {...props}
      href={props.href}
    >
      {props.children}
      {props.isExternal && <Icon boxSize="14px" as={HiArrowUpRight} />}
    </Link>
  );
};
