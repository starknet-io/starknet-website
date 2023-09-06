import { linkFields } from "../blocks";
import { CmsCollection } from "../types";


const permissionOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Pages",
    value: "pages",
  },
  {
    label: "Posts",
    value: "posts",
  },
  {
    label: "Events",
    value: "events",
  },
  {
    label: "Tutorials",
    value: "tutorials",
  },
  {
    label: "Jobs",
    value: "jobs",
  },
  {
    label: "SEO",
    value: "seo",
  },
  {
    label: "Settings (excluding permissions)",
    value: "settings",
  },
  {
    label: "Permissions",
    value: "permissions",
  },
  {
    label: "Roadmap and Announcements",
    value: "roadmap",
  },
]

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
          name: "show_custom_featured_post",
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
          options_length: 300
        },
      ],
    },
    {
      label: "Roadmap",
      name: "roadmap",
      file: `_data/settings/roadmap.yml`,
      crowdin: true,
      fields: [
        {
          name: "show_hero_banner",
          label: "Show hero banner",
          widget: "boolean",
          default: true,
        },
        {
          name: "hero_title",
          label: "Hero banner title",
          widget: "string",
          required: true,
          crowdin: true
        },
        {
          name: "hero_description",
          label: "Hero description",
          widget: "string",
          required: true,
          crowdin: true
        },
        {
          name: "show_hero_cta",
          label: "Show hero banner CTA",
          widget: "boolean",
          default: true,
          crowdin: true
        },
        {
          name: "hero_cta_copy",
          label: "Hero banner CTA copy",
          widget: "string",
          required: false,
          crowdin: true
        },
        {
          name: "roadmap_post_ps",
          label: "Roadmap post p.s. copy",
          widget: "markdown",
          required: false,
          crowdin: true
        }
      ],
    },
    {
      label: "Permissions",
      name: "permissions",
      file: `_data/settings/permissions.yml`,
      crowdin: false,
      fields: [
        {
          label: "Permissions",
          name: "items",
          widget: "list",
          fields: [
            {
              name: "username",
              label: "Github username",
              widget: "string",
              crowdin: false,
            },
            {
              name: "name",
              label: "Name",
              widget: "string",
              crowdin: false,
              required: false
            },
            {
              name: "access",
              label: "Access to collections",
              multiple: true,
              widget: "select",
              options: permissionOptions
            },
          ],
        },
      ],
    },
  ],
} satisfies CmsCollection;
