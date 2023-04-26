import { CmsField, CmsFieldList } from "./types";

export const linkFields = [
  {
    label: "Custom Title",
    required: false,
    name: "custom_title",
    widget: "string",
    crowdin: true,
  },
  {
    label: "Custom Icon",
    required: false,
    name: "custom_icon",
    widget: "string",
    crowdin: false,
  },
  {
    label: "Custom Internal Link",
    required: false,
    name: "custom_internal_link",
    widget: "string",
    crowdin: false,
  },
  {
    label: "Custom External Link",
    required: false,
    name: "custom_external_link",
    widget: "string",
    crowdin: false,
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
] satisfies CmsField[];

export const blocks = [
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
        crowdin: true,
      },
      {
        name: "description",
        widget: "string",
        crowdin: true
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
        crowdin: false,
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
        crowdin: false
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
        crowdin: false
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
        crowdin: false
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
        crowdin: false
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
        crowdin: true
      },
      {
        name: "description",
        widget: "string",
        crowdin: true
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
        crowdin: true
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
        crowdin: true
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
        crowdin: true
      },
      {
        name: "description",
        widget: "string",
        crowdin: true
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
        crowdin: true
      },
      {
        name: "link",
        widget: "object",
        fields: linkFields,
      },
      {
        name: "description",
        widget: "string",
        crowdin: true
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
        crowdin: true
      },
      {
        name: "description",
        widget: "string",
        crowdin: true
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
      {
        name: "buttonText",
        label: "Button text",
        required: false,
        widget: "string",
        crowdin: true
      },
      {
        name: "buttonUrl",
        label: "Button url",
        required: false,
        widget: "string",
        crowdin: false
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
        crowdin: true
      },
      {
        name: "listSize",
        label: "List Size",
        widget: "select",
        options: ["sm", "md", "lg"],
      },
      {
        name: "listGap",
        label: "List Gap",
        widget: "select",
        options: ["sm", "md", "lg"],
        required: false,
      },
      {
        name: "blocks",
        label: "Blocks",
        widget: "list",
        fields: [
          {
            name: "link",
            widget: "object",
            label: "Link",
            fields: [
              {
                name: "hasIcon",
                label: "Has Icon",
                widget: "boolean",
                required: true,
                default: true,
              },
              ...linkFields,
            ],
          },
          {
            name: "subLabel",
            widget: "object",
            label: "Sub Label",
            fields: [
              {
                name: "label",
                label: "Label",
                widget: "string",
                crowdin: true
              },
              {
                name: "boldLabel",
                label: "Bold Label",
                widget: "string",
                crowdin: true
              },
            ],
          },
          {
            name: "avatar",
            widget: "object",
            label: "Avatar",
            fields: [
              {
                name: "url",
                label: "URL",
                widget: "string",
                crowdin: false
              },
              {
                name: "title",
                label: "Title",
                widget: "string",
                crowdin: true
              },
              {
                name: "displayTitle",
                label: "Display title",
                widget: "boolean",
                required: false,
              },
            ],
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
        crowdin: true
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
            crowdin: true
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
            crowdin: true
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
] satisfies CmsFieldList["types"];

export const topLevelBlocks = [
  {
    name: "group",
    label: "Block group",
    widget: "object",
    fields: [
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
        crowdin: true
      },
      {
        name: "heading_variant",
        widget: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
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
] satisfies CmsFieldList["types"];
