import { CmsCollection } from "../types";

export const roadmapVersionsCollectionConfig = {
  crowdin: true,
  name: "roadmap-versions",
  label: "Roadmap - Versions",
  label_singular: "Roadmap version",
  identifier_field: "id",
  folder: "_data/roadmap-versions",
  slug: "{{version}}",
  summary: "{{version}} - {{impact}}",
  create: true,
  format: "yml",
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid",
      crowdin: false,
    },
    {
      name: "version",
      label: "Version",
      widget: "string",
      crowdin: false,
    },
    {
      name: "impact",
      label: "Impact",
      widget: "string",
      crowdin: true,
    },
    {
      name: "color",
      label: "Color",
      widget: "select",
      options: [
        { label: "Green", value: "foundation" },
        { label: "Yellow", value: "community_calls" },
        { label: "Red", value: "developers" },
        { label: "Blue", value: "stark_math" },
        { label: "Purple", value: "youtube" },
        { label: "Pink", value: "community_and_events" },
        { label: "Grey", value: "stark_struct" },
      ],
      required: true,
      crowdin: false,
    },
  ],
} satisfies CmsCollection;
