import { CmsCollection } from "../types";

export const categoriesCollectionConfig = {
  crowdin: true,
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
      widget: "uuid",
      crowdin: false
    },
    {
      name: "name",
      label: "Name",
      widget: "string",
      crowdin: true
    },
    {
      name: "show_custom_featured_post",
      label: "Show custom featured post",
      widget: "boolean",
      default: true,
    },
    {
      name: "custom_featured_post",
      label: "Custom featured post",
      widget: "relation",
      collection: "posts",
      search_fields: ["title"],
      value_field: "id",
      display_fields: ["title"],
      options_length: 300
    },
  ],
} satisfies CmsCollection;
