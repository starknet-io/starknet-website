import { topLevelBlocks } from "../blocks";
import { CmsCollection } from "../types";

export const announcementsCollectionConfig = {
  crowdin: true,
  name: "announcements",
  label: "Announcements",
  label_singular: "Announcements Post",
  identifier_field: "id",
  folder: "_data/announcements",
  create: true,
  format: "yml",
  slug: "{{title}}",
  preview_path: "/preview/announcements/{{id}}",
  summary: "{{title}}",
  sortable_fields: ["published_date", "title"],
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid",
    },
    {
      name: "title",
      label: "Post Title",
      widget: "string",
      crowdin: true,
    },
    {
      name: "description",
      label: "Description",
      widget: "markdown",
      crowdin: true,
    },
    {
      name: "image",
      label: "Background Image",
      widget: "image",
    },
    {
      name: "badge",
      label: "Tag",
      widget: "select",
      options: [
        {
          label: "Completed",
          value: "completed",
        },
        {
          label: "Building now",
          value: "building-now",
        },
        {
          label: "Building next",
          value: "building-next",
        },
        {
          label: "Backlog",
          value: "backlog",
        },
      ],
      required: true,
    },
    {
      name: "blocks",
      label: "Blocks",
      widget: "list",
      types: topLevelBlocks,
    },
  ],
} satisfies CmsCollection;
