import { CmsCollection } from "../types";

export const roadmapVersionsCollectionConfig = {
  crowdin: true,
  name: "roadmap_versions",
  label: "Roadmap - Versions",
  label_singular: "Roadmap version",
  identifier_field: "id",
  folder: "_data/roadmap_versions",
  slug: "{{name}}-{{impact}}",
  summary: "{{name}} - {{impact}}",
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
      widget: "string",
      crowdin: false,
    },
  ],
} satisfies CmsCollection;
