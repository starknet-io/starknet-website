import { topLevelBlocks } from "../blocks";
import { CmsCollection } from "../types";

export const roadmapPostsCollectionConfig = {
  crowdin: true,
  name: "roadmapPosts",
  label: "Roadmap - Posts",
  label_singular: "Roadmap Post",
  identifier_field: "id",
  folder: "_data/roadmapPosts",
  create: true,
  format: "yml",
  slug: "{{title}}",
  preview_path: "/preview/roadmapPosts/{{id}}",
  summary: "{{title}}",
  sortable_fields: ["published_date", "title"],
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid",
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
      crowdin: true,
    },
    {
      name: "toc",
      label: "Table of contents",
      widget: "boolean",
    },
    {
      name: "published_date",
      label: "Published Date",
      widget: "datetime",
    },
    {
      name: "video",
      label: "Video - youtube link",
      widget: "youtube",
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
} satisfies CmsCollection;
