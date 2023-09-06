import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { Button } from "@ui/Button";

export type CategoryTabItem = {
  id: string;
  label: string;
  link?: string;
};

export type CategoryTabsProps = {
  items: CategoryTabItem[];
  activeItemId: string;
  withInlinePadding?: boolean;
  onTabClick?: (id: string) => void;
  contentProps?: FlexProps;
};

export const CategoryTabs = ({
  items,
  activeItemId,
  withInlinePadding,
  onTabClick,
  contentProps,
}: CategoryTabsProps) => {
  return (
    <Box
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor="border.divider"
      width="100%"
    >
      <Flex
        sx={{ overflowX: "auto" }}
        maxW="contentMaxW.xl"
        margin="0 auto"
        px={{
          base: withInlinePadding ? "page.left-right.base" : "none",
          md: withInlinePadding ? "page.left-right.md" : "none",
        }}
        {...contentProps}
      >
        {items.map((item) => {
          return (
            <Button
              display="block"
              minW="none"
              key={item.id}
              variant="category"
              as={item.link ? "a" : "button"}
              href={item.link}
              onClick={() => onTabClick?.(item.id)}
              aria-selected={item.id === activeItemId}
            >
              {item.label}
            </Button>
          );
        })}
      </Flex>
    </Box>
  );
};
