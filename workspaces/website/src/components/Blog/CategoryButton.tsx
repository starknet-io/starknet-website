/**
 * Module dependencies
 */

import { Box, ButtonProps, Collapse, Flex, Icon } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { HiChevronDown } from "react-icons/hi2";
import { NormalizedCategory } from "src/utils/blog";


/**
 * `Props` type.
 */

export type Props = Omit<ButtonProps, 'variant' | 'onClick'> & {
  activeCategory?: string;
  category: NormalizedCategory;
  onClick?: (
    category: NormalizedCategory | NormalizedCategory['children'][number]
  ) => void;
  openCategory: string | null;
  setOpenCategory: (category: string | null) => void;
};

/**
 * Export `CategoryButton` component.
 */

export const CategoryButton = ({
  activeCategory,
  category,
  onClick,
  openCategory,
  setOpenCategory,
  ...rest 
}: Props) => {

  if((category.children ?? []).length === 0) {
    return (
      <Button
        isActive={activeCategory === category.slug}
        variant="categoryVertical"
        onClick={() => onClick?.(category)}
        {...rest}
      >
        {category.name}
      </Button>
    );
  }

  return (
    <>
      <Button
        isActive={!(openCategory === category.id) && (category.children.some((child) => child.slug === activeCategory) || activeCategory === category.slug)}
        display={'flex'}
        justifyContent={'space-between'}
        variant="categoryVertical"
        fullWidth
        onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
      >
        <Box>
          {category.name}
        </Box>

        {((category.children ?? []).length !== 0) && (
          <Icon
            ml={'32px'}
            as={HiChevronDown}
            boxSize="12px"
            color="list-card-icon-fg"
            sx={{
              transform: openCategory === category.id ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease-in-out'
            }}
          />
        )}
      </Button>

      <Collapse in={openCategory === category.id}>
        <Flex direction={'column'} alignItems={'start'}>
          <Button
            isActive={activeCategory === category.slug}
            variant="categoryVertical"
            paddingLeft={'32px'}
            onClick={() => onClick?.(category)}
            {...rest}
          >
            {'All posts'}
          </Button>

          {(category.children ?? []).map((child) => (
            <Button
              isActive={activeCategory === child.slug}
              variant="categoryVertical"
              paddingLeft={'32px'}
              onClick={() => onClick?.(child)}
              {...rest}
            >
              {child.name}
            </Button>
          ))}
        </Flex>
      </Collapse>
    </>
  );
}
