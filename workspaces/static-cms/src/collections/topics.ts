import type { Config } from "@staticcms/core";
import type { CmsConfig } from "netlify-cms-core";

const locale = "en";

export const topicsCollectionConfig = {
  name: "topics",
  label: "Blog - Topics",
  label_singular: "Topic",
  identifier_field: "id",
  folder: `_data/topics/${locale}`,
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
} satisfies Config["collections"][number] & CmsConfig["collections"][number];
