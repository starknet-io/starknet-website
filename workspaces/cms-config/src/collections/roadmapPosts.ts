import { topLevelBlocks } from "../blocks";
import { CmsCollection } from "../types";
import {
  HiOutlineWrenchScrewdriver,
  HiOutlineRocketLaunch,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

export const roadmapStagesFields = [
  {
    label: "Building now",
    value: "building-now",
    icon: HiOutlineWrenchScrewdriver,
  },
  {
    label: "Building next",
    value: "building-next",
    icon: HiOutlineRocketLaunch,
  },
  {
    label: "Backlog",
    value: "backlog",
    icon: HiOutlineSquares2X2,
  },
];

export const roadmapPostsCollectionConfig = {
  crowdin: true,
  name: "roadmap-posts",
  label: "Roadmap - Posts",
  label_singular: "Roadmap Post",
  identifier_field: "id",
  folder: "_data/roadmap-posts",
  create: true,
  format: "yml",
  slug: "{{title}}",
  preview_path: "/preview/roadmap-posts/{{id}}",
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
      name: "availability",
      label: "Availability",
      widget: "select",
      options: [
        "No time yet",
        "Q2 2023",
        "Q3 2023",
        "Q4 2023",
        "Q1 2024",
        "Q2 2024",
        "Q3 2024",
        "Q4 2024",
        "Q1 2025",
        "Q2 2025",
        "Q3 2025",
        "Q4 2025",
      ],
    },
    {
      name: "state",
      label: "Availability state",
      widget: "select",
      options: ["On testnet", "Testing now"],
      required: false,
    },
    {
      name: "specific_info",
      label: "Specific info",
      widget: "string",
      required: false,
      index_file: "",
      meta: false,
    },
    {
      name: "version",
      label: "Version",
      widget: "relation",
      collection: "roadmap-versions",
      search_fields: ["version", "impact"],
      value_field: "id",
      display_fields: ["version", "impact"],
    },
    {
      name: "stage",
      label: "Stage",
      widget: "select",
      options: roadmapStagesFields,
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
