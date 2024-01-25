import { List, ListItem, ListProps, ListItemProps } from "@chakra-ui/react";

const Root = ({ children }: ListProps) => {
  return (
    <List spacing="3px" borderLeftWidth="1px" borderColor="divider-bg">
      {children}
    </List>
  );
};

type ItemProps = {
  isActive?: boolean;
  subItem?: boolean;
} & ListItemProps;

const Item = ({ children, subItem, isActive, ...rest }: ItemProps) => {
  return (
    <ListItem
      pl="16px"
      {...rest}
      lineHeight="1em"
      paddingBottom="11px"
      fontSize="14px"
      color={isActive ? "listLink-fg" : "fg-muted"}
      ml={subItem ? "32px" : "0"}
      position="relative"
      _hover={{ color: "listLink-fg" }}
      _before={{
        content: "''",
        position: "absolute",
        left: "-6px",
        top: "5px",
        width: "5px",
        height: "14px",
        borderRadius: "1px",

        bg: isActive ? "listLink-fg" : "transparent",
      }}

      // color={isActive ? "red" : "grey"}
    >
      {children}
    </ListItem>
  );
};
export { Root, Item };
