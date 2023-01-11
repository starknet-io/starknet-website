import { CmsConfig } from "netlify-cms-core";

const locale = "en";

export const config: CmsConfig = {
  backend: {
    name: "github",
    repo: "starknet-io/starknet-website",
    branch: "dev",
  },
  media_folder: "static/assets",
  public_folder: "/assets",
  collections: [
    {
      name: "pages",
      label: "Pages",
      label_singular: "Page",
      identifier_field: "path",
      folder: `_data/pages/${locale}`,
      create: true,
      fields: [
        {
          name: "path",
          label: "Path",
        },
        {
          name: "title",
          label: "Title",
        },
        {
          name: "body",
          label: "Body",
          widget: "markdown",
        },
      ],
    },
    {
      name: "posts",
      label: "Posts",
      label_singular: "Post",
      identifier_field: "id",
      folder: `_data/posts/${locale}`,
      create: true,
      fields: [
        {
          name: "id",
          label: "id",
        },
        {
          name: "title",
          label: "Title",
        },
        {
          name: "image",
          label: "Image",
          widget: "image",
        },
        {
          name: "category",
          label: "Category",
          widget: "relation",
          collection: "categories",
          search_fields: ["name"],
          value_field: "id",
          display_fields: ["name"],
        },
        {
          name: "topic",
          label: "Topic",
          widget: "relation",
          collection: "topics",
          search_fields: ["name"],
          value_field: "id",
          display_fields: ["name"],
        },
        {
          name: "short_desc",
          label: "Short Description",
          widget: "text",
        },
        {
          name: "body",
          label: "Body",
          widget: "markdown",
        },
      ],
    },
    {
      name: "topics",
      label: "Topics",
      label_singular: "Topic",
      identifier_field: "id",
      folder: `_data/topics/${locale}`,
      create: true,
      fields: [
        {
          name: "id",
          label: "id",
        },
        {
          name: "name",
          label: "Name",
        },
      ],
    },
    {
      name: "categories",
      label: "Categories",
      label_singular: "Category",
      identifier_field: "id",
      folder: `_data/categories/${locale}`,
      create: true,
      fields: [
        {
          name: "id",
          label: "id",
        },
        {
          name: "name",
          label: "Name",
        },
      ],
    },
    {
      name: "events",
      label: "Events",
      label_singular: "Event",
      folder: `_data/events/${locale}`,
      create: true,
      fields: [
        {
          name: "name",
          label: "Event Name",
        },
        {
          name: "image",
          label: "Event Image",
          widget: "image",
        },
        {
          name: "start_date",
          label: "Start Date",
          widget: "datetime",
        },
        {
          name: "end_date",
          label: "End Date",
          widget: "datetime",
        },
        {
          name: "location",
          label: "Location",
          widget: "map",
        },
        {
          name: "location_name",
          label: "Location Name",
        },
        {
          name: "url",
          label: "Website URL",
        },
      ],
    },
    {
      name: "jobs",
      label: "Jobs",
      label_singular: "Job",
      folder: `_data/jobs/${locale}`,
      create: true,
      format: "json",
      fields: [
        {
          name: "contact",
          label: "Contact",
          widget: "object",
          fields: [
            {
              name: "name",
              label: "Name",
            },
            {
              name: "email",
              label: "Email",
            },
            {
              name: "twitter",
              label: "Twitter",
            },
            {
              name: "discord",
              label: "Discord",
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
            },
            {
              name: "description",
              label: "Description",
            },
            {
              name: "required_experience",
              label: "Required experience",
              widget: "text",
            },
            {
              name: "location",
              label: "Job location / Remote",
            },
            {
              name: "scope",
              label: "Job scope",
            },
            {
              name: "how_to_apply",
              label: "How to apply",
            },
          ],
        },
      ],
    },
    {
      label: "Settings",
      name: "settings",
      files: [
        {
          label: "Main Menu",
          name: "main-menu",
          file: `_data/settings/${locale}/main-menu.yml`,
          fields: [
            {
              label: "Pages",
              name: "pages",
              widget: "list",
              fields: [
                {
                  label: "Page",
                  name: "page",
                  widget: "relation",
                  collection: "pages",
                  search_fields: ["title"],
                  value_field: "path",
                  display_fields: ["title"],
                },

                {
                  label: "Pages",
                  name: "pages",
                  widget: "list",
                  fields: [
                    {
                      label: "Page",
                      name: "page",
                      required: false,
                      widget: "relation",
                      collection: "pages",
                      search_fields: ["title"],
                      value_field: "path",
                      display_fields: ["title"],
                    },
                    {
                      label: "Post",
                      name: "post",
                      required: false,
                      widget: "relation",
                      collection: "posts",
                      search_fields: ["title"],
                      value_field: "id",
                      display_fields: ["title"],
                    },
                    {
                      label: "Custom Link",
                      display_fields: ["title"],
                      required: false,
                      name: "custom_link",
                    },
                    {
                      label: "Pages",
                      name: "pages",
                      widget: "list",
                      fields: [
                        {
                          label: "Page",
                          name: "page",
                          widget: "relation",
                          collection: "pages",
                          search_fields: ["title"],
                          value_field: "path",
                          display_fields: ["title"],
                        },
                        {
                          label: "Pages",
                          name: "pages",
                          widget: "list",
                          fields: [
                            {
                              label: "Page",
                              name: "page",
                              widget: "relation",
                              collection: "pages",
                              search_fields: ["title"],
                              value_field: "path",
                              display_fields: ["title"],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Events Page",
          name: "events-page",
          file: `_data/settings/${locale}/events-page.yml`,
          fields: [
            {
              label: "Title",
              name: "title",
            },
            {
              label: "Description",
              name: "description",
            },
          ],
        },
      ],
    },
  ],
};
