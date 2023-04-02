import type { Config } from "@staticcms/core";
import type { CmsConfig } from "netlify-cms-core";
import { linkFields } from "../blocks";

const locale = "en";

export const settingsCollectionConfig = {
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
      label: "Redirects",
      name: "redirects",
      file: `_data/settings/${locale}/redirects.yml`,
      fields: [
        {
          label: "Redirects",
          name: "items",
          widget: "list",
          fields: [
            {
              name: "source",
              widget: "string",
            },
            {
              name: "destination",
              widget: "string",
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
    {
      label: "Alert",
      name: "alert",
      file: `_data/settings/${locale}/alert.yml`,
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
              widget: "uuid" as "string",
            },
            {
              name: "title",
              label: "Title",
              widget: "string",
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
            },
          ],
        },
      ],
    },
  ],
} satisfies Config["collections"][number] & CmsConfig["collections"][number];
