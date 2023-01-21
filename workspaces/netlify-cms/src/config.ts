import { CmsConfig } from "netlify-cms-core";

const locale = "en";

const branch =
  location.pathname === "/" ? "dev" : location.pathname.replace(/^\//, "");

console.log(branch);

export const config: CmsConfig = {
  backend: {
    name: "github",
    repo: "starknet-io/starknet-website",
    branch,
  },
  media_folder: "public/assets",
  public_folder: "/assets",
  collections: [
    {
      name: "pages",
      label: "Pages",
      label_singular: "Page",
      identifier_field: "title",
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
          multiple: true,
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
          name: "subtitle",
          label: "subtitle Name",
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
          name: "end_date", // ?? keep this?
          label: "End Date",
          widget: "datetime",
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
          name: "city",
          label: "City",
        },
        {
          name: "venue",
          label: "Venue",
        },
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
          name: "url",
          label: "Website URL",
        },
        {
          name: "tags",
          label: "Tags",
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
              name: "role",
              label: "Role",
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
              name: "required_experience",
              label: "Required experience",
              widget: "text",
            },
            {
              name: "scope",
              label: "Job scope",
            },
            {
              name: "how_to_apply",
              label: "How to apply",
            },
            {
              name: "apply_url",
              label: "Link to apply",
            },
          ],
        },
      ],
    },
    {
      label: "Glossary",
      name: "glossary",
      folder: `_data/glossary/${locale}`,
      create: true,
      identifier_field: "glossary_item",
      fields: [
        {
          label: "Glossary item",
          name: "glossary_item",
        },
        {
          label: "Glossary description",
          name: "body",
          widget: "markdown",
        },
      ],
    },
    {
      label: "Dapps",
      name: "dapps",
      folder: `_data/dapps/${locale}`,
      create: true,
      identifier_field: "name",
      fields: [
        {
          label: "Name",
          name: "name",
        },
        {
          label: "Image",
          name: "image",
          widget: "image",
        },
        {
          label: "Twitter handle",
          name: "twitter",
        },
        {
          label: "Website url",
          name: "website_url",
        },
        {
          label: "Description",
          name: "description",
          widget: "string",
        },
      ],
    },
    {
      label: "Wallets",
      name: "wallets",
      folder: `_data/wallets/${locale}`,
      create: true,
      identifier_field: "name",
      fields: [
        {
          label: "Name",
          name: "name",
        },
        {
          label: "Type",
          name: "type",
          multiple: true,
          widget: "select",
          options: [
            {
              label: "Browser extension",
              value: "browser_extension",
            },
            {
              label: "iOS",
              value: "ios",
            },
            {
              label: "Android",
              value: "android",
            },
          ],
        },
        {
          label: "Image",
          name: "image",
          widget: "image",
        },
        {
          label: "Twitter handle",
          name: "twitter",
        },
        {
          label: "Website url",
          name: "website_url",
        },
        {
          label: "Description",
          name: "body",
        },
      ],
    },
    {
      label: "Block explorers",
      name: "block_explorers",
      folder: `_data/block_explorers/${locale}`,
      create: true,
      identifier_field: "name",
      fields: [
        {
          label: "Name",
          name: "name",
        },
        {
          label: "Type",
          name: "type",
          widget: "select",
          options: [
            {
              label: "Browser extension",
              value: "browser_extension",
            },
            {
              label: "iOS",
              value: "ios",
            },
            {
              label: "Android",
              value: "android",
            },
          ],
        },
        {
          label: "Website url",
          name: "website_url",
        },
        {
          label: "Image",
          name: "image",
          widget: "image",
        },
        {
          label: "Company name",
          name: "company_name",
        },
        {
          label: "Twitter handle",
          name: "twitter",
        },
        {
          label: "Description",
          name: "description",
          widget: "string",
        },
      ],
    },
    {
      label: "Bridges and fiat on ramps",
      name: "bridges",
      folder: `_data/bridges/${locale}`,
      create: true,
      identifier_field: "name",
      fields: [
        {
          label: "Name",
          name: "name",
        },
        {
          label: "Type",
          name: "type",
          widget: "select",
          options: [
            {
              label: "Browser extension",
              value: "browser_extension",
            },
            {
              label: "iOS",
              value: "ios",
            },
            {
              label: "Android",
              value: "android",
            },
          ],
        },
        {
          label: "Website url",
          name: "website_url",
        },
        {
          label: "Image",
          name: "image",
          widget: "image",
        },
        {
          label: "Company name",
          name: "company_name",
        },
        {
          label: "Twitter handle",
          name: "twitter",
        },
        {
          label: "Description",
          name: "description",
          widget: "string",
        },
      ],
    },
    {
      label: "Tutorials",
      name: "tutorials",
      folder: `_data/tutorials/${locale}`,
      create: true,
      identifier_field: "id",
      fields: [
        {
          label: "ID",
          name: "id",
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
        },
        {
          label: "Author",
          name: "author",
          required: false,
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
          label: "Tags",
          name: "tags",
          required: false,
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
              label: "Top Level Menu Items",
              name: "items",
              widget: "list",
              fields: [
                {
                  label: "Title",
                  name: "title",
                },
                {
                  label: "Columns",
                  name: "columns",
                  widget: "list",
                  fields: [
                    {
                      label: "Blocks",
                      name: "blocks",
                      widget: "list",
                      fields: [
                        {
                          label: "Title",
                          name: "title",
                          required: false,
                        },
                        {
                          label: "Menu Items",
                          name: "items",
                          widget: "list",
                          fields: [
                            {
                              label: "Custom Title",
                              required: false,
                              name: "custom_title",
                            },
                            {
                              label: "Custom Icon",
                              required: false,
                              name: "custom_icon",
                            },
                            {
                              label: "Custom Internal Link",
                              required: false,
                              name: "custom_internal_link",
                            },
                            {
                              label: "Custom External Link",
                              required: false,
                              name: "custom_external_link",
                            },
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
        {
          label: "Tutorials Page",
          name: "tutorials-page",
          file: `_data/settings/${locale}/tutorials-page.yml`,
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
