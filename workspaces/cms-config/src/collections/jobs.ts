import { CmsCollection } from "../types";

export const jobsCollectionConfig = {
  crowdin: true,
  name: "jobs",
  label: "Jobs",
  identifier_field: "id",
  label_singular: "Job",
  folder: '_data/jobs',
  create: true,
  format: "yml",
  summary: "{{job.title}}",
  view_filters: [
    {
      field: 'archived', 
      label: 'Active',
      pattern: 'false'
    },
    {
      field: 'archived', 
      label: 'Archived',
      pattern: 'true'
    }
  ],
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid",
    },
    {
      name: "contact",
      label: "Contact",
      widget: "object",
      fields: [
        {
          name: "name",
          label: "Name",
          widget: "string",
          crowdin: true,
        },
        {
          name: "email",
          label: "Email",
          widget: "string",
          crowdin: false
        },
        {
          name: "twitter",
          label: "Twitter",
          widget: "string",
          crowdin: false
        },
        {
          name: "discord",
          label: "Discord",
          widget: "string",
          crowdin: false
        },
        {
          name: "logo",
          label: "Project Logo",
          widget: "image",
        },
      ],
    },
    {
      name: "job",
      label: "Job",
      widget: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          widget: "string",
          crowdin: true
        },
        {
          name: "description",
          label: "Description",
          widget: "string",
          crowdin: true
        },
        {
          name: "role",
          label: "Role",
          widget: "string",
          crowdin: true
        },
        {
          name: "type",
          label: "Type",
          widget: "select",
          options: [
            {
              label: "Full time",
              value: "full_time",
            },
            {
              label: "Part time",
              value: "part_time",
            },
            {
              label: "Freelance",
              value: "freelance",
            },
            {
              label: "Contract",
              value: "contract",
            },
          ],
        },
        {
          name: "location",
          label: "Location",
          widget: "select",
          options: [
            {
              label: "Remote",
              value: "remote",
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
            {
              label: "Tel-Aviv / Remote",
              value: "tel_aviv_remote",
            },
            {
              label: "Global / Remote",
              value: "global_remote",
            },
          ],
        },
        {
          name: "required_experience",
          label: "Required experience",
          widget: "text",
        },
        {
          name: "scope",
          label: "Job scope",
          widget: "string",
          crowdin: true
        },
        {
          name: "how_to_apply",
          label: "How to apply",
          widget: "string",
          crowdin: true
        },
        {
          name: "apply_url",
          label: "Link to apply",
          widget: "string",
          crowdin: false
        },
      ],
    },
    {
      label: "Published at",
      name: "published_at",
      widget: "datetime",
    },
    {
      label: "Archived",
      name: "archived",
      widget: "boolean",
      required: false,
      search_fields: ["name"],
      value_field: "id",
      display_fields: ["name"],
    },
  ],
} satisfies CmsCollection;
