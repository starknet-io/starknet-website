import { CmsCollection } from "../types";

export const topicsCollectionConfig = {
  crowdin: true,
  name: "topics",
  label: "Blog - Topics",
  label_singular: "Topic",
  identifier_field: "id",
  folder: '_data/topics',
  slug: "{{name}}",
  summary: "{{name}}",
  create: true,
  format: "yml",
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid",
    },
    {
      name: "name",
      label: "Name",
      widget: "string",
      crowdin: true
    },
  ],
} satisfies CmsCollection;
