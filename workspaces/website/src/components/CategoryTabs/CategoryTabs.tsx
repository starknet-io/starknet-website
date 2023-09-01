import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@ui/Button";

export type CategoryTabItem = {
  id: string;
  label: string;
  link: string;
};

export type CategoryTabsProps = {
  items: CategoryTabItem[];
  activeItemId: string;
  withInlinePadding?: boolean;
};

export const CategoryTabs = ({
  items,
  activeItemId,
  withInlinePadding,
}: CategoryTabsProps) => {
  return (
    <Box
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor="border.divider"
      width="100%"
    >
      <Flex
        as="ul"
        sx={{ overflowX: "auto" }}
        gap="24px"
        maxW="contentMaxW.xl"
        margin="0 auto"
        px={{
          base: withInlinePadding ? "page.left-right.base" : "none",
          md: withInlinePadding ? "page.left-right.md" : "none",
        }}
      >
        {items.map((item) => {
          return (
            <Button
              key={item.id}
              variant="category"
              href={item.link}
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
