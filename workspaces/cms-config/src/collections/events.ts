import { CmsCollection } from "../types";

export const eventsLocations = [
  {
    label: "Online / Remote",
    value: "online_remote",
  },
  {
    label: "Africa",
    value: "africa",
  },
  {
    label: "Asia",
    value: "asia",
  },
  {
    label: "Australia / Oceania",
    value: "australia_oceania",
  },
  {
    label: "Europe",
    value: "europe",
  },
  {
    label: "North America",
    value: "north_america",
  },
  {
    label: "South America",
    value: "south_america",
  },
];

export const eventsLocationsLabels = eventsLocations.reduce((acc, curr) => {
  acc[curr.value] = curr.label;
  return acc;
}, {} as Record<string, string>);

export const eventsTypes = [
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
  {
    label: "Meetup",
    value: "meetup",
  },
];

export const eventsTypesLabels = eventsTypes.reduce((acc, curr) => {
  acc[curr.value] = curr.label;
  return acc;
}, {} as Record<string, string>);

export const eventsCollectionConfig = {
  crowdin: true,
  name: "events",
  label: "Events",
  label_singular: "Event",
  folder: "_data/events",
  slug: "{{name}}",
  summary: "{{name}}",
  create: true,
  format: "yml",
  fields: [
    {
      name: "type",
      label: "Type",
      widget: "select",
      options: eventsTypes,
    },
    {
      name: "name",
      label: "Event Name",
      widget: "string",
      crowdin: true,
    },
    {
      name: "description",
      label: "Description",
      widget: "string",
      crowdin: true,
    },
    {
      name: "url",
      label: "Website URL",
      widget: "string",
      crowdin: false,
    },
    {
      name: "recap",
      label: "Event recap (appears on past events only)",
      widget: "object",
      fields: [
        {
          name: "label",
          label: "Label",
          widget: "string",
          crowdin: true,
        },
        {
          name: "link",
          label: "Link",
          widget: "string",
          crowdin: false,
        },
        {
          name: "isExternal",
          label: "Is external link?",
          widget: "boolean",
          crowdin: false,
        },
      ],
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
      options: eventsLocations,
    },
    {
      name: "city",
      label: "City",
      widget: "string",
      crowdin: true,
    },
    {
      name: "country",
      label: "Country (State if USA)",
      widget: "string",
      crowdin: true,
    },
  ],
} satisfies CmsCollection;
