/**
 * Module dependencies
 */

import { Box, ButtonProps, Collapse, Flex, Icon } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { useState } from "react";
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
};

/**
 * Export `CategoryButton` component.
 */

export const CategoryButton = ({
  activeCategory,
  category,
  onClick,
  ...rest 
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(category)

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
        display={'flex'}
        justifyContent={'space-between'}
        variant="categoryVertical"
        fullWidth
        onClick={() => setIsOpen(prevOpen => !prevOpen)}
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
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease-in-out'
            }}
          />
        )}
      </Button>

      <Collapse in={isOpen}>
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
