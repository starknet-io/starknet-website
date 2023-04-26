import type { CmsConfig } from "netlify-cms-core";

export const tutorialsCollectionConfig = {
  label: "Tutorials",
  name: "tutorials",
  folder: '_data/tutorials',
  create: true,
  format: "yml",
  identifier_field: "id",
  summary: "{{title}}",
  sortable_fields: ["published_at", "title"],
  fields: [
    {
      label: "ID",
      name: "id",
      widget: "uuid" as "string",
    },
    {
      label: "Type",
      name: "type",
      widget: "select",
      options: [
        {
          label: "Youtube",
          value: "youtube",
        },
        {
          label: "Blog",
          value: "blog",
        },
        {
          label: "Github",
          value: "github",
        },
      ],
    },
    {
      label: "URL",
      name: "url",
      widget: "string",
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: false,
    },
    {
      label: "Title",
      name: "title",
      required: false,
      widget: "string",
    },
    {
      label: "Author",
      name: "author",
      required: false,
      widget: "string",
    },
    {
      label: "Published at",
      name: "published_at",
      widget: "datetime",
    },
    {
      label: "Difficulty",
      name: "difficulty",
      widget: "select",
      options: [
        {
          label: "Beginner",
          value: "beginner",
        },
        {
          label: "Intermediate",
          value: "intermediate",
        },
        {
          label: "Advanced",
          value: "advanced",
        },
      ],
    },
    {
      label: "Belongs to course",
      name: "course",
      widget: "select",
      options: [
        {
          label: "Bytesized series",
          value: "bytesized_series",
        },
        {
          label: "Starknet edu series",
          value: "starknet_edu",
        },
        {
          label: "Cairo 101",
          value: "cairo_101",
        },
        {
          label: "Cairo workshops",
          value: "cairo_workshops",
        },
        {
          label: "Hackathon Feb 22",
          value: "hackathon_feb_22",
        },
        {
          label: "Hackathon Oct 22",
          value: "hackathon_oct_22",
        },
      ],
    },

    {
      label: "Tags",
      name: "tags",
      required: false,
      widget: "string",
    },
  ],
} satisfies CmsConfig["collections"][number];
