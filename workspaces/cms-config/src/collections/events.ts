import type { Config } from "@staticcms/core";
import type { CmsConfig } from "netlify-cms-core";

const locale = "en";

export const eventsCollectionConfig = {
  name: "events",
  label: "Events",
  label_singular: "Event",
  folder: `_data/events/${locale}`,
  slug: "{{name}}",
  summary: "{{name}}",
  create: true,
  format: "yml",
  fields: [
    {
      name: "type",
      label: "Type",
      widget: "select",
      options: [
        {
          label: "Community Event",
          value: "community_event",
        },
        {
          label: "Conference",
          value: "conference",
        },
        {
          label: "Hackathon",
          value: "hackathon",
        },
      ],
    },
    {
      name: "name",
      label: "Event Name",
      widget: "string",
    },
    {
      name: "description",
      label: "Description",
      widget: "string",
    },
    {
      name: "url",
      label: "Website URL",
      widget: "string",
    },
    {
      name: "start_date",
      label: "start date",
      widget: "datetime",
    },
    {
      name: "end_date",
      label: "end date",
      widget: "datetime",
      required: false,
    },
    {
      name: "image",
      label: "Event Image",
      widget: "image",
    },
    {
      name: "location",
      label: "Location",
      widget: "select",
      options: [
        {
          label: "online / remote",
          value: "online_remote",
        },
        {
          label: "USA",
          value: "usa",
        },
        {
          label: "Europe",
          value: "europe",
        },
        {
          label: "Asia",
          value: "asia",
        },
        {
          label: "South America",
          value: "south_america",
        },
        {
          label: "Canada",
          value: "canada",
        },
      ],
    },
    {
      name: "tags",
      label: "Tags",
      widget: "list",
      default: ["crypto", "blockchain", "starknet"],
    },
  ],
} satisfies Config["collections"][number] & CmsConfig["collections"][number];
