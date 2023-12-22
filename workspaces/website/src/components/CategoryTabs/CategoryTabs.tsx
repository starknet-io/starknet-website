
/**
 * Module dependencies
 */

import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@ui/Button";

/**
 * Export `CategoryTabItem` type.
 */

export type CategoryTabItem = {
  id: string;
  label: string;
  link?: string;
};

/**
 * Export `CategoryTabProps` type.
 */

export type CategoryTabsProps = {
  items: CategoryTabItem[];
  activeItemId: string;
  onTabClick?: (id: string) => void;
  playlistOnBottom: boolean;
};

/**
 * Export `CategoryTabs` component.
 */

export const CategoryTabs = ({
  items,
  activeItemId,
  onTabClick,
  playlistOnBottom,
}: CategoryTabsProps) => {
  return (
    <Box
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor="border.divider"
      marginTop={{ base: "32px", lg: !playlistOnBottom ? "64px" : "32px"  }}
      width="100%"
    >
      <Flex
        as="ul"
        sx={{ overflowX: "auto" }}
        gap="24px"
        width="100%"
        padding={'0 24px'}
      >
        {items.map((item) => {
          return (
            <Box>
              <Button
                as={item.link ? "a" : "button"}
                href={item.link}
                isActive={item.id === activeItemId}
                onClick={() => onTabClick?.(item.id)}
                variant="category"
                padding={'24px 12px'}
              >
                {item.label}
              </Button>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
