/**
 * Module dependencies
 */

import { Box, ButtonProps } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { useScrollDirection } from "src/hooks/useScrollDirection";
import { FilterDrawer } from "./Drawer";
import { useMemo, useState } from "react";
import { Category } from "@starknet-io/cms-data/src/categories";
import { Topic } from "@starknet-io/cms-data/src/topics";

/**
 * Export `Props` type.
 */

export type Props = ButtonProps & {
  topics: readonly Topic[];
  categories: readonly Category[];
  params: LocaleParams & {
    readonly category?: string;
    readonly postType?: string;
    readonly topicFilters?: readonly string[];
  };
} 

/**
 * Export `FilterButton` component.
 */

export const FilterButton = ({ categories, params, topics, ...props}: Props) => {
  const scrollDirection = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);
  const totalFilter = useMemo(() => {
    let total = 0;
    if (params.category) {
      total += 1;
    }
    if (params.postType) {
      total += 1;
    }
    if (params.topicFilters?.length) {
      total += params.topicFilters.length;
    }
    return total;
  }, [params]);

  return (
    <Box
      bottom={'42px'}
      padding={'0 16px'}
      position={'fixed'}
      width={'100%'}
      transition={'transform 0.6s cubic-bezier(.08,.52,.52,1)'}
      transform={scrollDirection === 'up' ? 'translateY(200px)' : 'translateY(0)'}
    >
      <FilterDrawer
        topics={topics}
        categories={categories}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        params={params}
      />

      <Button
        leftIcon={<HiOutlineAdjustmentsVertical />}
        fullWidth
        color={'heading-navy-fg'}
        onClick={event => {
          setIsOpen(true)
          props.onClick?.(event);
        }}
        sx={{boxShadow: '0px 1px 25px -3px #00000026'}}
        {...props}
        variant={'outlineFull'}
      >
        Filters

        {totalFilter > 0 && ` (${totalFilter})`}
      </Button>
    </Box>
  );
}
