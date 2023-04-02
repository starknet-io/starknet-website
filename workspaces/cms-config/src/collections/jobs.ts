import type { Config } from "@staticcms/core";
import type { CmsConfig } from "netlify-cms-core";

const locale = "en";

export const jobsCollectionConfig = {
  name: "jobs",
  label: "Jobs",
  identifier_field: "id",
  label_singular: "Job",
  folder: `_data/jobs/${locale}`,
  create: true,
  format: "yml",
  summary: "{{job.title}}",
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid" as "string",
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
        },
        {
          name: "email",
          label: "Email",
          widget: "string",
        },
        {
          name: "twitter",
          label: "Twitter",
          widget: "string",
        },
        {
          name: "discord",
          label: "Discord",
          widget: "string",
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
        },
        {
          name: "description",
          label: "Description",
          widget: "string",
        },
        {
          name: "role",
          label: "Role",
          widget: "string",
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
        },
        {
          name: "how_to_apply",
          label: "How to apply",
          widget: "string",
        },
        {
          name: "apply_url",
          label: "Link to apply",
          widget: "string",
        },
      ],
    },
  ],
} satisfies Config["collections"][number] & CmsConfig["collections"][number];
