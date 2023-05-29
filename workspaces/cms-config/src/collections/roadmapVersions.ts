import { CmsCollection } from "../types";

export const roadmapVersionsCollectionConfig = {
  crowdin: true,
  name: "roadmap-versions",
  label: "Roadmap - Versions",
  label_singular: "Roadmap version",
  identifier_field: "id",
  folder: "_data/roadmap-versions",
  slug: "{{version}} - {{impact}}",
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
      name: "bgColor",
      label: "Background color",
      widget: "string",
      crowdin: false,
    },
    {
      name: "textColor",
      label: "Text color",
      widget: "string",
      crowdin: false,
    },
  ],
} satisfies CmsCollection;
