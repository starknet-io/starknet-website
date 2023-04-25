import type { CmsConfig } from "netlify-cms-core";

export const categoriesCollectionConfig = {
  name: "categories",
  label: "Blog - Categories",
  label_singular: "Category",
  identifier_field: "id",
  folder: '_data/categories',
  slug: "{{name}}",
  summary: "{{name}}",
  create: true,
  format: "yml",
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid" as "string",
    },
    {
      name: "name",
      label: "Name",
      widget: "string",
    },
  ],
} satisfies CmsConfig["collections"][number];
