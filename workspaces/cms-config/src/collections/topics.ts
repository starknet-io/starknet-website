import type { CmsConfig } from "netlify-cms-core";

export const topicsCollectionConfig = {
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
      widget: "uuid" as "string",
    },
    {
      name: "name",
      label: "Name",
      widget: "string",
    },
  ],
} satisfies CmsConfig["collections"][number];
