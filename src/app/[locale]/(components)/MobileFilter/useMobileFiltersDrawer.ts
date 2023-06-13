import { useBreakpointValue } from "@chakra-ui/react";
import { useCallback, useMemo, useState } from "react";
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";

export default function useMobileFiltersDrawer(
  filtersItems: RefinementListProps["items"]
) {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const onClose = useCallback(() => setFilterOpen(false), []);
  const onOpen = useCallback(() => setFilterOpen(true), []);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const filtersCount = useMemo(() => {
    return filtersItems.reduce((acc, curr) => {
      return acc + (curr.isRefined ? 1 : 0);
    }, 0);
  }, [filtersItems]);

  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});

  const handleFilterClick = (attribute: string, value: string) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (!newFilters[attribute]) {
        newFilters[attribute] = [];
      }

      if (newFilters[attribute].includes(value)) {
        newFilters[attribute] = newFilters[attribute].filter((val) => val !== value);
      } else {
        newFilters[attribute].push(value);
      }
      return newFilters;
    });
  };

  let filtersCounts = useMemo(() => {
    return Object.values(selectedFilters).reduce((total, currentArray) => {
      return total + currentArray.length;
    }, 0);
  }, [selectedFilters]);

  return {
    isOpen: isMobile ? isFilterOpen : false,
    filtersCount,
    setFilterOpen,
    onClose,
    onOpen,
    handleFilterClick,
    filtersCounts,
    selectedFilters,
    setSelectedFilters
  };
}
