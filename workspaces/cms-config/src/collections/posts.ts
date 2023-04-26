import { topLevelBlocks } from "../blocks";
import type { CmsConfig } from "netlify-cms-core";

export const postsCollectionConfig = {
  name: "posts",
  label: "Blog - Posts",
  label_singular: "Post",
  identifier_field: "id",
  folder: '_data/posts',
  create: true,
  format: "yml",
  slug: "{{title}}",
  summary: "{{title}}",
  sortable_fields: ["published_date", "title"],
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid" as "string",
    },
    {
      name: "post_type",
      label: "Post Type",
      widget: "select",
      options: [
        {
          label: "Article",
          value: "article",
        },
        {
          label: "Video",
          value: "video",
        },
        {
          label: "Audio",
          value: "audio",
        },
      ],
      default: "article",
    },
    {
      name: "title",
      label: "Post Title",
      widget: "string",
    },
    {
      name: "toc",
      label: "Table of contents",
      widget: "boolean"
    },
    {
      name: "published_date",
      label: "Published Date",
      widget: "datetime",
    },
    {
      name: "time_to_consume",
      label: "Time to read / watch / listen (in minutes)",
      widget: "timeToConsume" as "string"
    },
    {
      name: "video",
      label: "Video - youtube link",
      widget: "youtube" as "string",
      required: false,
    },
    {
      name: "image",
      label: "Featured Image",
      widget: "image",
    },
    {
      name: "category",
      label: "Category",
      widget: "relation",
      collection: "categories",
      search_fields: ["name"],
      value_field: "id",
      display_fields: ["name"],
    },
    {
      name: "topic",
      label: "Topic",
      widget: "relation",
      multiple: true,
      collection: "topics",
      search_fields: ["name"],
      value_field: "id",
      display_fields: ["name"],
    },
    {
      name: "short_desc",
      label: "Short Description",
      widget: "text",
    },
    {
      name: "blocks",
      label: "Blocks",
      widget: "list",
      types: topLevelBlocks,
    },
  ],
} satisfies CmsConfig["collections"][number];
