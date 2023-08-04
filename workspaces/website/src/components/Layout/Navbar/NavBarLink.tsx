import { Link, LinkProps, Icon } from "@chakra-ui/react";
import { HiArrowUpRight } from "react-icons/hi2";

type Props = {} & LinkProps;

export const NavBarLink = (props: Props) => {
  return (
    <Link
      fontSize="sm"
      px={4}
      height="36px"
      color="fg-default-light"
      borderRadius={18}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      textDecoration="none"
      mt="0px!important"
      gap={1}
      fontWeight={400}
      _hover={{
        color: "fg-default-hover",
      }}
      _active={{
        color: "fg-default-hover",
        svg: {
          color: "fg-default-hover",
        },
      }}
      {...props}
      href={props.href}
    >
      {props.children}
      {props.isExternal && <Icon boxSize="14px" as={HiArrowUpRight} />}
    </Link>
  );
};
