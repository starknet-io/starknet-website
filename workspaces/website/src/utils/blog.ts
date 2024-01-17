/**
 * Module dependencies
 */

import { Category } from "@starknet-io/cms-data/src/categories";

/**
 * Export `NormalizedCategory` type.
 */

export type NormalizedCategory = Omit<Category, 'parentCategory'> & {
  children: Omit<NormalizedCategory, 'children'>[];
};

/**
 * Export `normalizeCategories` util.
 */

export function normalizeCategories(categories: readonly Category[]) {
  const normalizedCategories = categories.map((category) => ({
    ...category,
    children: [] as Omit<NormalizedCategory, 'children'>[],
  }));

  const categoriesMap = new Map(
    normalizedCategories.map((category) => [category.id, category])
  );

  for (const category of normalizedCategories) {
    let parentCategory = categoriesMap.get(category.parentCategory ?? '');

    while(parentCategory?.parentCategory) {
      parentCategory = categoriesMap.get(parentCategory.parentCategory);
    }

    if (parentCategory) {
      parentCategory.children.push(category);
    }
  }

  return normalizedCategories;
}
