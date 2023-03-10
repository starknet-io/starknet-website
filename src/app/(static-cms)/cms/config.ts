import type { Config, Field, ListField } from "@staticcms/core";

const locale = "en";

const linkFields: Field[] = [
  {
    label: "Custom Title",
    required: false,
    name: "custom_title",
    widget: "string",
  },
  {
    label: "Custom Icon",
    required: false,
    name: "custom_icon",
    widget: "string",
  },
  {
    label: "Custom Internal Link",
    required: false,
    name: "custom_internal_link",
    widget: "string",
  },
  {
    label: "Custom External Link",
    required: false,
    name: "custom_external_link",
    widget: "string",
  },
  {
    label: "Page",
    name: "page",
    required: false,
    widget: "relation",
    collection: "pages",
    search_fields: ["title"],
    value_field: "id",
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
];

const blocks: ListField["types"] = [
  {
    name: "markdown",
    label: "Rich Text / Markdown",
    widget: "object",
    fields: [
      {
        name: "body",
        widget: "markdown",
      },
    ],
  },
  {
    name: "page_header",
    label: "Page Header",
    widget: "object",
    fields: [
      {
        name: "title",
        widget: "string",
      },
      {
        name: "description",
        widget: "string",
      },
    ],
  },
  {
    name: "home_hero",
    label: "Home Hero",
    widget: "object",
    fields: [
      {
        name: "type",
        widget: "hidden",
      },
    ],
  },
  {
    name: "community_events",
    label: "Community events block",
    widget: "object",
    fields: [
      {
        name: "type",
        widget: "hidden",
      },
    ],
  },
  {
    name: "dapps",
    label: "Dapps block",
    widget: "object",
    fields: [
      {
        name: "type",
        widget: "hidden",
      },
      {
        name: "no_of_items",
        required: false,
        widget: "string",
      },
    ],
  },
  {
    name: "block_explorers",
    label: "Block Explorers block",
    widget: "object",
    fields: [
      {
        name: "type",
        widget: "hidden",
      },
      {
        name: "no_of_items",
        required: false,
        widget: "string",
      },
    ],
  },
  {
    name: "bridges",
    label: "Bridges block",
    widget: "object",
    fields: [
      {
        name: "type",
        widget: "hidden",
      },
      {
        name: "no_of_items",
        required: false,
        widget: "string",
      },
    ],
  },
  {
    name: "on_ramps",
    label: "On-Ramps block",
    widget: "object",
    fields: [
      {
        name: "type",
        widget: "hidden",
      },
      {
        name: "no_of_items",
        required: false,
        widget: "string",
      },
    ],
  },
  {
    name: "wallets",
    label: "Wallets block",
    widget: "object",
    fields: [
      {
        name: "type",
        widget: "hidden",
      },
      {
        name: "no_of_items",
        required: false,
        widget: "string",
      },
    ],
  },
  {
    name: "get_involved_card",
    label: "Get Involved card",
    widget: "object",
    fields: [
      {
        name: "title",
        widget: "string",
      },
      {
        name: "description",
        widget: "string",
      },
      {
        name: "link",
        widget: "object",
        fields: linkFields,
      },
    ],
  },
  {
    name: "basic_card",
    label: "Basic card",
    widget: "object",
    fields: [
      {
        name: "title",
        widget: "string",
      },
      {
        name: "link",
        widget: "object",
        fields: linkFields,
      },
      {
        name: "size",
        widget: "select",
        required: false,
        options: ["sm", "md"],
        default: "sm",
      },
    ],
  },
  {
    name: "icon_link_card",
    label: "Icon link card",
    widget: "object",
    fields: [
      {
        name: "title",
        widget: "string",
      },
      {
        name: "link",
        widget: "object",
        fields: linkFields,
      },
      {
        name: "icon",
        widget: "image",
      },
      {
        name: "color",
        widget: "select",
        required: false,
        options: ["orange", "blue", "green", "yellow"],
        default: "orange",
      },
    ],
  },
  {
    name: "image_icon_link_card",
    label: "Image Icon link card",
    widget: "object",
    fields: [
      {
        name: "title",
        widget: "string",
      },
      {
        name: "description",
        widget: "string",
      },
      {
        name: "link",
        widget: "object",
        fields: linkFields,
      },
      {
        name: "icon",
        widget: "image",
      },
      {
        name: "color",
        widget: "select",
        required: false,
        options: [
          "blue-default",
          "purple",
          "peach",
          "blue",
          "cyan",
          "orange",
          "pink",
        ],
        default: "orange",
      },
    ],
  },
  {
    name: "large_card",
    label: "Large card",
    widget: "object",
    fields: [
      {
        name: "title",
        widget: "string",
      },
      {
        name: "link",
        widget: "object",
        fields: linkFields,
      },
      {
        name: "description",
        widget: "string",
      },
      {
        name: "image",
        widget: "image",
      },
      {
        name: "orientation",
        widget: "select",
        required: false,
        options: ["left", "right"],
      },
    ],
  },
  {
    name: "hero",
    label: "Hero",
    widget: "object",
    fields: [
      {
        name: "title",
        widget: "string",
      },
      {
        name: "description",
        widget: "string",
      },
      {
        name: "variant",
        widget: "select",
        required: false,
        options: [
          "wallets",
          "block_explorers",
          "bridges",
          "dapps",
          "learn",
          "build",
          "community",
        ],
        default: "learn",
      },
    ],
  },
  {
    name: "link_list",
    label: "LinkList",
    widget: "object",
    fields: [
      {
        name: "heading",
        label: "Heading",
        required: false,
        widget: "string",
      },
      {
        name: "blocks",
        label: "Blocks",
        widget: "list",
        fields: [
          {
            name: "label",
            widget: "string",
          },
          {
            name: "sub_label",
            widget: "string",
          },
          {
            name: "href",
            widget: "string",
          },
          {
            name: "is_external",
            widget: "boolean",
            required: false,
            default: false,
          },
        ],
      },
    ],
  },
  {
    name: "accordion",
    label: "Accordion",
    widget: "object",
    fields: [
      {
        name: "heading",
        label: "Heading",
        required: false,
        widget: "string",
      },
      {
        name: "blocks",
        label: "Blocks",
        widget: "list",
        fields: [
          {
            name: "label",
            label: "Label",
            widget: "string",
          },
          {
            name: "body",
            label: "Content",
            widget: "markdown",
          },
        ],
      },
    ],
  },
  {
    name: "ordered_block",
    label: "Ordered Block",
    widget: "object",
    fields: [
      {
        name: "blocks",
        label: "Blocks",
        widget: "list",
        fields: [
          {
            name: "title",
            widget: "string",
          },
          {
            name: "body",
            label: "Content",
            widget: "markdown",
          },
        ],
      },
    ],
  },
];

const topLevelBlocks: ListField["types"] = [
  {
    name: "group",
    label: "Block group",
    widget: "object",
    fields: [
      {
        // quickfix for a bug with lists that have only one field
        name: "not-a-field",
        widget: "hidden",
        required: false,
      },
      {
        name: "blocks",
        label: "Blocks",
        widget: "list",
        types: blocks,
        default: [],
      },
    ],
  },
  {
    name: "container",
    label: "Container",
    widget: "object",
    fields: [
      {
        name: "max_width",
        label: "Max width",
        widget: "number",
      },
      {
        name: "blocks",
        label: "Blocks",
        widget: "list",
        types: blocks,
        default: [],
      },
    ],
  },
  {
    name: "flex_layout",
    label: "Flex layout",
    widget: "object",
    fields: [
      {
        name: "base",
        widget: "number",
        required: false,
      },
      {
        name: "md",
        widget: "number",
        required: false,
      },
      {
        name: "lg",
        widget: "number",
        required: false,
      },
      {
        name: "xl",
        widget: "number",
        required: false,
      },
      {
        name: "heading",
        required: false,
        widget: "string",
      },
      {
        name: "heading_variant",
        widget: "select",
        options: ["sm", "md", "lg"],
        required: false,
        default: "sm",
      },
      {
        name: "blocks",
        label: "Blocks",
        widget: "list",
        types: blocks,
        default: [],
      },
    ],
  },
  ...blocks,
];

export const config: Config = {
  backend: {
    name: "github",
    repo: "starknet-io/starknet-website",
    branch: "dev",
    base_url: "https://starknet-website-cms-auth-api.vercel.app",
  },
  media_folder: "public/assets",
  public_folder: "/assets",
  collections: [
    {
      name: "pages",
      label: "Pages",
      label_singular: "Page",
      identifier_field: "id",
      folder: `_data/pages/${locale}`,
      create: true,
      format: "yml",
      slug: "{{title}}",
      summary: "{{title}}",
      fields: [
        {
          name: "id",
          label: "id",
          widget: "uuid" as "string",
        },
        {
          name: "title",
          label: "Title",
          widget: "string",
        },
        {
          name: "template",
          widget: "select",
          options: ["landing", "content"],
          default: "content",
        },
        {
          name: "parent_page",
          label: "Parent page",
          required: false,
          widget: "relation",
          collection: "pages",
          search_fields: ["title"],
          value_field: "id",
          display_fields: ["title"],
        },
        {
          name: "breadcrumbs",
          label: "Show breadcrumbs",
          widget: "boolean",
          default: true,
        },
        {
          name: "page_last_updated",
          label: "Show page updated",
          widget: "boolean",
          default: true,
        },
        {
          name: "blocks",
          label: "Blocks",
          widget: "list",
          types: topLevelBlocks,
        },
      ],
    },
    {
      name: "posts",
      label: "Blog - Posts",
      label_singular: "Post",
      identifier_field: "id",
      folder: `_data/posts/${locale}`,
      create: true,
      format: "yml",
      slug: "{{title}}",
      summary: "{{title}}",
      fields: [
        {
          name: "id",
          label: "id",
          widget: "uuid" as "string",
        },
        {
          name: "post_type",
          label: "Post Type",
          widget: "select",
          options: [
            {
              label: "Article",
              value: "article",
            },
            {
              label: "Video",
              value: "video",
            },
            {
              label: "Audio",
              value: "audio",
            },
          ],
          default: "article",
        },
        {
          name: "title",
          label: "Post Title",
          widget: "string",
        },
        {
          name: "published_date",
          label: "Published Date",
          widget: "datetime",
        },
        {
          name: "time_to_consume",
          label: "Time to read / watch / listen (in minutes)",
          widget: "string",
        },
        {
          name: "video",
          label: "Video - youtube link",
          widget: "youtube" as "string",
          required: false,
        },
        {
          name: "image",
          label: "Featured Image",
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
          name: "blocks",
          label: "Blocks",
          widget: "list",
          types: topLevelBlocks,
        },
      ],
    },
    {
      name: "topics",
      label: "Blog - Topics",
      label_singular: "Topic",
      identifier_field: "id",
      folder: `_data/topics/${locale}`,
      slug: "{{name}}",
      summary: "{{name}}",
      create: true,
      format: "yml",
      fields: [
        {
          name: "id",
          label: "id",
          widget: "uuid" as "string",
        },
        {
          name: "name",
          label: "Name",
          widget: "string",
        },
      ],
    },
    {
      name: "categories",
      label: "Blog - Categories",
      label_singular: "Category",
      identifier_field: "id",
      folder: `_data/categories/${locale}`,
      slug: "{{name}}",
      summary: "{{name}}",
      create: true,
      format: "yml",
      fields: [
        {
          name: "id",
          label: "id",
          widget: "uuid" as "string",
        },
        {
          name: "name",
          label: "Name",
          widget: "string",
        },
      ],
    },
    {
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
    },
    {
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
    },
    {
      label: "Tutorials",
      name: "tutorials",
      folder: `_data/tutorials/${locale}`,
      create: true,
      format: "yml",
      identifier_field: "id",
      fields: [
        {
          label: "ID",
          name: "id",
          widget: "string",
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
          widget: "string",
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
          widget: "string",
        },
        {
          label: "Author",
          name: "author",
          required: false,
          widget: "string",
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
          label: "Belongs to course",
          name: "course",
          widget: "select",
          options: [
            {
              label: "Bytesized series",
              value: "bytesized_series",
            },
            {
              label: "Starknet edu series",
              value: "starknet_edu",
            },
            {
              label: "Cairo 101",
              value: "cairo_101",
            },
            {
              label: "Cairo workshops",
              value: "cairo_workshops",
            },
            {
              label: "Hackathon Feb 22",
              value: "hackathon_feb_22",
            },
            {
              label: "Hackathon Oct 22",
              value: "hackathon_oct_22",
            },
          ],
        },

        {
          label: "Tags",
          name: "tags",
          required: false,
          widget: "string",
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
                  widget: "string",
                },
                {
                  label: "Columns",
                  name: "columns",
                  widget: "list",
                  summary: "Column",
                  fields: [
                    {
                      // quickfix for a bug with lists that have only one field
                      name: "not-a-field",
                      widget: "hidden",
                      required: false,
                    },
                    {
                      label: "Blocks",
                      name: "blocks",
                      widget: "list",
                      fields: [
                        {
                          label: "Title",
                          name: "title",
                          required: false,
                          widget: "string",
                        },
                        {
                          label: "Menu Items",
                          name: "items",
                          widget: "list",
                          fields: [
                            ...linkFields,
                            {
                              name: "hide_from_footer",
                              widget: "boolean",
                              required: false,
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
          label: "Dapps",
          name: "dapps",
          file: `_data/settings/${locale}/dapps.yml`,
          fields: [
            {
              label: "Dapps",
              name: "items",
              widget: "list",
              fields: [
                {
                  label: "Name",
                  name: "name",
                  widget: "string",
                },
                {
                  label: "Image",
                  name: "image",
                  widget: "image",
                },
                {
                  label: "Twitter handle",
                  name: "twitter",
                  widget: "string",
                },
                {
                  label: "Website url",
                  name: "website_url",
                  widget: "string",
                },
                {
                  label: "Description",
                  name: "description",
                  widget: "string",
                },
              ],
            },
          ],
        },
        {
          label: "Wallets",
          name: "wallets",
          file: `_data/settings/${locale}/wallets.yml`,
          fields: [
            {
              label: "Wallets",
              name: "items",
              widget: "list",
              fields: [
                {
                  label: "Name",
                  name: "name",
                  widget: "string",
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
                  widget: "string",
                },
                {
                  label: "Website url",
                  name: "website_url",
                  widget: "string",
                },
                {
                  label: "Description",
                  name: "body",
                  widget: "string",
                },
              ],
            },
          ],
        },
        {
          label: "Block explorers",
          name: "block-explorers",
          file: `_data/settings/${locale}/block-explorers.yml`,
          fields: [
            {
              label: "Block explorers",
              name: "items",
              widget: "list",
              fields: [
                {
                  label: "Name",
                  name: "name",
                  widget: "string",
                },
                {
                  label: "Website url",
                  name: "website_url",
                  widget: "string",
                },
                {
                  label: "Image",
                  name: "image",
                  widget: "image",
                },
                {
                  label: "Company name",
                  name: "company_name",
                  widget: "string",
                },
                {
                  label: "Twitter handle",
                  name: "twitter",
                  widget: "string",
                },
                {
                  label: "Description",
                  name: "description",
                  widget: "string",
                },
              ],
            },
          ],
        },
        {
          label: "Bridges",
          name: "bridges",
          file: `_data/settings/${locale}/bridges.yml`,
          fields: [
            {
              label: "Bridges",
              name: "items",
              widget: "list",
              fields: [
                {
                  label: "Name",
                  name: "name",
                  widget: "string",
                },
                {
                  label: "Website url",
                  name: "website_url",
                  widget: "string",
                },
                {
                  label: "Image",
                  name: "image",
                  widget: "image",
                },
                {
                  label: "Company name",
                  name: "company_name",
                  widget: "string",
                },
                {
                  label: "Twitter handle",
                  name: "twitter",
                  widget: "string",
                },
                {
                  label: "Description",
                  name: "description",
                  widget: "string",
                },
              ],
            },
          ],
        },
        {
          label: "Fiat on-ramps",
          name: "fiat-on-ramps",
          file: `_data/settings/${locale}/fiat-on-ramps.yml`,
          fields: [
            {
              label: "Fiat on-ramps",
              name: "items",
              widget: "list",
              fields: [
                {
                  label: "Name",
                  name: "name",
                  widget: "string",
                },
                {
                  label: "Website url",
                  name: "website_url",
                  widget: "string",
                },
                {
                  label: "Image",
                  name: "image",
                  widget: "image",
                },
                {
                  label: "Company name",
                  name: "company_name",
                  widget: "string",
                },
                {
                  label: "Twitter handle",
                  name: "twitter",
                  widget: "string",
                },
                {
                  label: "Description",
                  name: "description",
                  widget: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
