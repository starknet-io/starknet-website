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
    { label: "Deploy ID", name: "deploy_id", widget: "hidden" },
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
  ],
} satisfies CmsCollection;
