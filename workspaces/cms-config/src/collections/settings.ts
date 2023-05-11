import { linkFields } from "../blocks";
import { CmsCollection } from "../types";

export const settingsCollectionConfig = {
  crowdin: true,
  label: "Settings",
  name: "settings",
  files: [
    {
      label: "Main Menu",
      name: "main-menu",
      file: `_data/settings/main-menu.yml`,
      crowdin: true,
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
              crowdin: true
            },
            {
              label: "Columns",
              name: "columns",
              widget: "list",
              summary: "Column",
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
                      widget: "string",
                      crowdin: true
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
      label: "Redirects",
      name: "redirects",
      file: `_data/settings/redirects.yml`,
      crowdin: false,
      fields: [
        {
          label: "Redirects",
          name: "items",
          widget: "list",
          fields: [
            {
              name: "source",
              widget: "string",
              crowdin: false
            },
            {
              name: "destination",
              widget: "string",
              crowdin: false
            },
          ],
        },
      ],
    },
    {
      label: "Dapps",
      name: "dapps",
      file: `_data/settings/dapps.yml`,
      crowdin: true,
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
              crowdin: true
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
              crowdin: false
            },
            {
              label: "Website url",
              name: "website_url",
              widget: "string",
              crowdin: false
            },
            {
              label: "Description",
              name: "description",
              widget: "string",
              crowdin: true
            },
          ],
        },
      ],
    },
    {
      label: "Wallets",
      name: "wallets",
      file: `_data/settings/wallets.yml`,
      crowdin: true,
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
              crowdin: true
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
              crowdin: false
            },
            {
              label: "Website url",
              name: "website_url",
              widget: "string",
              crowdin: false
            },
            {
              label: "Description",
              name: "body",
              widget: "string",
              crowdin: true
            },
          ],
        },
      ],
    },
    {
      label: "Block explorers",
      name: "block-explorers",
      file: `_data/settings/block-explorers.yml`,
      crowdin: true,
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
              crowdin: true
            },
            {
              label: "Website url",
              name: "website_url",
              widget: "string",
              crowdin: false
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
              crowdin: true
            },
            {
              label: "Twitter handle",
              name: "twitter",
              widget: "string",
              crowdin: false
            },
            {
              label: "Description",
              name: "description",
              widget: "string",
              crowdin: true
            },
          ],
        },
      ],
    },
    {
      label: "Bridges",
      name: "bridges",
      file: `_data/settings/bridges.yml`,
      crowdin: true,
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
              crowdin: true
            },
            {
              label: "Website url",
              name: "website_url",
              widget: "string",
              crowdin: false
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
              crowdin: true
            },
            {
              label: "Twitter handle",
              name: "twitter",
              widget: "string",
              crowdin: false
            },
            {
              label: "Description",
              name: "description",
              widget: "string",
              crowdin: true
            },
          ],
        },
      ],
    },
    {
      label: "Fiat on-ramps",
      name: "fiat-on-ramps",
      file: `_data/settings/fiat-on-ramps.yml`,
      crowdin: true,
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
              crowdin: true
            },
            {
              label: "Website url",
              name: "website_url",
              widget: "string",
              crowdin: false
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
              crowdin: true
            },
            {
              label: "Twitter handle",
              name: "twitter",
              widget: "string",
              crowdin: false
            },
            {
              label: "Description",
              name: "description",
              widget: "string",
              crowdin: true
            },
          ],
        },
      ],
    },
    {
      label: "Alert",
      name: "alert",
      file: `_data/settings/alert.yml`,
      crowdin: true,
      fields: [
        {
          label: "Alert",
          name: "items",
          widget: "list",
          fields: [
            {
              name: "variant",
              label: "Variant",
              widget: "select",
              required: false,
              options: ["info", "warning", "important"],
              default: "info",
            },
            {
              name: "hasCloseButton",
              label: "Show close icon",
              widget: "boolean",
              default: false,
              required: false,
            },
            {
              name: "id",
              label: "id",
              widget: "uuid",
            },
            {
              name: "title",
              label: "Title",
              widget: "string",
              crowdin: true
            },
            {
              name: "body",
              label: "Description",
              widget: "markdown",
            },
            {
              name: "page_url",
              label: "Page url",
              hint: "If page url is not specified (e.g. 'learn/glossary'), it will be used globally",
              required: false,
              widget: "string",
              crowdin: false
            },
          ],
        },
      ],
    },
    {
      label: "Blog posts",
      name: "blog-posts",
      file: `_data/settings/blog-posts.yml`,
      crowdin: true,
      fields: [
        {
          name: "show_featured_post",
          label: "Show custom featured post",
          widget: "boolean",
          default: true,
        },
        {
          name: "custom_featured_post",
          label: "Custom featured post",
          widget: "relation",
          collection: "posts",
          search_fields: ["title"],
          value_field: "id",
          display_fields: ["title"],
        },
      ],
    },
  ],
} satisfies CmsCollection;
