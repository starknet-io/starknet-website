import type { Config } from "@staticcms/core";
import { topLevelBlocks } from "../blocks";
import type { CmsConfig } from "netlify-cms-core";

const locale = "en";

export const pagesCollectionConfig = {
  name: "pages",
  label: "Pages",
  label_singular: "Page",
  identifier_field: "id",
  folder: `_data/pages/${locale}`,
  create: true,
  format: "yml",
  slug: "{{title}}",
  summary: "{{title}}",
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid" as "string",
    },
    {
      name: "title",
      label: "Title",
      widget: "string",
    },
    {
      name: "template",
      widget: "select",
      options: ["landing", "content"],
      default: "content",
    },
    {
      name: "parent_page",
      label: "Parent page",
      required: false,
      widget: "relation",
      collection: "pages",
      search_fields: ["title"],
      value_field: "id",
      display_fields: ["title"],
    },
    {
      name: "breadcrumbs",
      label: "Show breadcrumbs",
      widget: "boolean",
      default: true,
    },
    {
      name: "page_last_updated",
      label: "Show page updated",
      widget: "boolean",
      default: true,
    },
    {
      name: "blocks",
      label: "Blocks",
      widget: "list",
      types: topLevelBlocks,
    },
  ],
} satisfies CmsConfig["collections"][number] & Config["collections"][number];
