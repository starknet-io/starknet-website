"use client";

import * as SubNav from "@ui/SubNav/SubNav";
import type { Category } from "src/data/categories";

export interface Props {
  readonly categories: Category[];
}

export const SubNavBlog = ({ categories }: Props) => {
  return (
    <SubNav.Root>
      {categories.map((category) => (
        <SubNav.Item
          onClick={() => console.log(category.name)}
          key={category.id}
        >
          <> {category.name}</>
        </SubNav.Item>
      ))}
    </SubNav.Root>
  );
};
