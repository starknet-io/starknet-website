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
    {
      name: "title",
      label: "Title",
      widget: "string",
      crowdin: true,
    },
    {
      name: "show_title",
      label: "Show title",
      widget: "boolean"
    },
    {
      required: false,
      name: "seoTitle",
      label: "Seo title",
      hint: "If empty the title field will be used",
      widget: "string",
      crowdin: true,
    },
    {
      required: false,
      name: "seoDescription",
      label: "Seo description",
      widget: "string",
      crowdin: true,
    },
    {
      required: false,
      name: "seoFocusKeywords",
      label: "Seo focus keywords",
      hint: "Enter the focus keywords separated by commas",
      widget: 'list',
      crowdin: true,
    },
    {
      name: "template",
      widget: "select",
      options: ["landing", "content", "narrow content"],
      default: "content",
    },
    {
      name: "toc",
      label: "Show table of contents",
      hint: "Applies only for the 'content' template type",
      widget: "boolean",
      default: true,
      required: false
    },
    {
      name: "tocCustomTitle",
      label: "Custom Table of contents title",
      hint: "If empty, default 'On this page' title will be used",
      widget: "string",
      required: false,
      crowdin: true
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
      name: "hidden_page",
      label: "Omit page from navigation",
      widget: "boolean",
      default: false,
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
