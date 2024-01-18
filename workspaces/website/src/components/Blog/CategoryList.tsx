/**
 * Module dependencies
 */

import { Box, Flex } from "@chakra-ui/react";
import { Category } from "@starknet-io/cms-data/src/categories";
import { Button } from "@ui/Button";
import { useMemo, useState } from "react";
import { normalizeCategories } from "src/utils/blog";
import { navigate } from "vite-plugin-ssr/client/router";
import { CategoryButton } from "./CategoryButton";


/**
 * `Props` type.
 */

export type Props = {
  categories: readonly Category[];
  params: LocaleParams & {
    readonly category?: string;
  };
};

/**
 * Export `CategoryList` component.
 */

export const CategoryList = ({ categories, params }: Props) => {
  const normalizedCategories = useMemo(() => (
    normalizeCategories(categories).filter((category) => !category.parentCategory)
  ), [categories]);
  const [openCategory, setOpenCategory] = useState(
    normalizedCategories.find((category) => (
      category.slug === params.category || category.children.some(
        (child) => child.slug === params.category
      )
    )
  )?.slug ?? null);

  return (
    <Flex
      as="ul"
      gap="24px"
      flexDirection={'column'}
      width={'200px'}
    >
      <Box>
        <Button
          variant="categoryVertical"
          as="a"
          isActive={params.category == null}
          onClick={() => {
            navigate(`/${params.locale}/content`)
          }}
        >
          All posts
        </Button>

        {normalizedCategories.map((category, index) => (
          <Box key={index}>
            <CategoryButton
              as="a"
              category={category}
              activeCategory={params.category}
              onClick={(currentCat) => {
                if (currentCat.slug === params.category) return;
                setOpenCategory(category.slug);

                navigate(`/${params.locale}/content/category/${currentCat.slug}${
                  currentCat.default_filter ? `?postType=${currentCat.default_filter}` : ''
                }`)
              }}
              openCategory={openCategory}
              setOpenCategory={setOpenCategory}
            />
          </Box>
        ))}

      </Box>
    </Flex>
  );
}
