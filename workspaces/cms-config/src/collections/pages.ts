import { topLevelBlocks } from "../blocks";
import { CmsCollection } from "../types";

export const pagesCollectionConfig = {
  crowdin: true,
  name: "pages",
  label: "Pages",
  label_singular: "Page",
  identifier_field: "id",
  folder: '_data/pages',
  create: true,
  format: "yml",
  slug: "{{title}}",
  summary: "{{title}}",
  preview_path: "/preview/pages/{{id}}",
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid",
    },
    { label: "Deploy ID", name: "deploy_id", widget: "hidden" },
    {
      name: "title",
      label: "Title",
      widget: "string",
      crowdin: true,
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
} satisfies CmsCollection;
