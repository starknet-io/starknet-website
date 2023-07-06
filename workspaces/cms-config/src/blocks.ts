import { CmsField, CmsFieldList } from "./types";

export const codeLanguages = [
  {label: 'Asciidoc', value: 'asciidoc', abbreviation: 'ADOC'},
  {label: 'Bash', value: 'bash', abbreviation: 'SH'},
  {label: 'Clojure', value: 'clojure', abbreviation: 'CLJ'},
  {label: 'C++', value: 'cpp', abbreviation: 'CPP'},
  {label: 'CSS', value: 'css', abbreviation: 'CSS'},
  {label: 'Diff', value: 'diff', abbreviation: 'DIFF'},
  {label: 'Dockerfile', value: 'dockerfile', abbreviation: 'DOCKER'},
  {label: 'Elixir', value: 'elixir', abbreviation: 'EX'},
  {label: 'Go', value: 'go', abbreviation: 'GO'},
  {label: 'Groovy', value: 'groovy', abbreviation: 'GROOVY'},
  {label: 'Haskell', value: 'haskell', abbreviation: 'HS'},
  {label: 'Java', value: 'java', abbreviation: 'JAVA'},
  {label: 'Javascript', value: 'javascript', abbreviation: 'JS'},
  {label: 'JSON', value: 'json', abbreviation: 'JSON'},
  {label: 'Kotlin', value: 'kotlin', abbreviation: 'KT'},
  {label: 'Markdown', value: 'markdown', abbreviation: 'MD'},
  {label: 'Nix', value: 'nix', abbreviation: 'NIX'},
  {label: 'Objective-C', value: 'objectivec', abbreviation: 'OBJC'},
  {label: 'Perl', value: 'perl', abbreviation: 'PL'},
  {label: 'PHP', value: 'php', abbreviation: 'PHP'},
  {label: 'Properties', value: 'properties', abbreviation: 'PROPERTIES'},
  {label: 'Puppet', value: 'puppet', abbreviation: 'PP'},
  {label: 'Python', value: 'python', abbreviation: 'PY'},
  {label: 'Ruby', value: 'ruby', abbreviation: 'RB'},
  {label: 'Rust', value: 'rust', abbreviation: 'RS'},
  {label: 'Scala', value: 'scala', abbreviation: 'SC'},
  {label: 'Shell', value: 'shell', abbreviation: 'SH'},
  {label: 'SQL', value: 'sql', abbreviation: 'SQL'},
  {label: 'Swift', value: 'swift', abbreviation: 'SWIFT'},
  {label: 'Typescript', value: 'typescript', abbreviation: 'TS'},
  {label: 'XML', value: 'xml', abbreviation: 'XML'},
  {label: 'YAML', value: 'yaml', abbreviation: 'YAML'}
];


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

export const cardListItem = [
  {
    label: "Title",
    name: "title",
    widget: "string",
    crowdin: true,
  },
  {
    label: "Description",
    name: "description",
    widget: "string",
    crowdin: false,
  },
  {
    label: "Link url",
    name: "link_url",
    widget: "string",
    crowdin: false,
  },
  {
    label: "Image",
    required: false,
    name: "image",
    widget: "image",
    crowdin: false,
  },
  {
    label: "Website url",
    name: "website_url",
    required: false,
    widget: "string",
    index_file: "",
    meta: false
  },
  {
    label: "Start date time",
    name: "start_date_time",
    required: false,
    widget: "string",
    index_file: "",
    meta: false
  },
  {
    label: "Location",
    name: "location",
    required: false,
    widget: "string",
    index_file: "",
    meta: false
  },
  {
    label: "Tags (separate by comma)",
    name: "tags",
    required: false,
    widget: "string",
    index_file: "",
    meta: false
  },
  {
    label: "City",
    name: "city",
    required: false,
    widget: "string",
    index_file: "",
    meta: false
  },
  {
    label: "Country",
    name: "country",
    required: false,
    widget: "string",
    index_file: "",
    meta: false
  },
  {
    label: "Venue",
    name: "venue",
    required: false,
    widget: "string",
    index_file: "",
    meta: false
  },
  {
    label: "Discord handle",
    name: "discordHandle",
    required: false,
    widget: "string",
    index_file: "",
    meta: false
  },
  {
    label: "Type list",
    name: "type_list",
    required: false,
    widget: "list",
    fields: [
      {
        label: "Type",
        name: "type",
        widget: "string",
        crowdin: true,
      },
      {
        label: "Url",
        name: "url",
        widget: "string",
        crowdin: false,
      }
    ],
  },
  {
    label: "Type (separate by comma)",
    name: "type",
    required: false,
    widget: "string",
    index_file: "",
    meta: false
  },
  {
    label: "Is image rounded",
    name: "is_rounded",
    required: false,
    widget: "boolean",
    index_file: "",
    meta: false
  },
  {
    label: "Recap",
    name: "recap",
    required: false,
    widget: "list",
    fields: [
      {
        label: "Label",
        name: "label",
        widget: "string",
        crowdin: true,
      },
      {
        label: "Link",
        name: "link",
        widget: "string",
        crowdin: false,
      },
      {
        label: "Is external link",
        name: "isExternal",
        widget: "boolean",
        crowdin: false,
      }
    ],
    index_file: "",
    meta: false
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
    name: "code",
    label: "Code",
    widget: "object",
    fields: [
      {
        label: 'Language',
        name: 'language',
        widget: 'select',
        crowdin: false,
        options: codeLanguages,
      },
      {
        name: "body",
        widget: "code",
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
    name: "image_icon_link_card",
    label: "Image Icon link card",
    widget: "object",
    fields: [
      {
        name: "variant",
        label: "Variant (Image icon link card by default)",
        widget: "select",
        default: "image_icon_link_card",
        required: false,
        options: [
          { label: "Image icon link card", value: "image_icon_link_card" },
          { label: "Icon link card", value: "icon_link_card" },
          { label: "Dapp", value: "dapp" },
          { label: "Large card", value: "large_card" },
          { label: "Community card", value: "community_card" }
        ],
      },
      {
        name: "size",
        label: "Size (Large by default)",
        widget: "select",
        default: "large",
        required: false,
        options: [
          { label: "Large", value: "large" },
          { label: "Small", value: "small" }
        ],
      },
      {
        label: "Background illustration (hidden by default)",
        name: "withIllustration",
        widget: "boolean",
        default: false,
        required: false,
      },
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
        widget: "image"
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
          "grey"
        ],
        default: "orange",
      },
      {
        name: "columns",
        label: "Columns (number of cards per row, works only for icon_link_card)",
        widget: "select",
        default: "4",
        required: false,
        options: ["2", "4"],
      },
      {
        name: "orientation",
        label: "Orientation (for large cards only)",
        widget: "select",
        default: "left",
        required: false,
        options: ["left", "right"],
      }
    ],
  },
  {
    name: "card_list",
    label: "Cards list",
    widget: "object",
    fields: [
      {
        label: "Title",
        name: "title",
        required: false,
        widget: "string",
        crowdin: true
      },
      {
        label: "Description",
        name: "description",
        required: false,
        widget: "string",
        crowdin: true
      },
      {
        name: "randomize",
        label: "Randomize",
        widget: "boolean",
        required: false,
        default: false,
      },
      {
        label: "Card list items",
        name: "card_list_items",
        widget: "list",
        fields: cardListItem,
        crowdin: true,
        required: true,
        index_file: "",
        meta: true
      },
    ]
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
          "nodes_and_services",
          "security",
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
      {
        name: "leftBoxMaxWidth",
        label: "Left box max width",
        required: false,
        widget: "number",
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
        required: false,
      },
      {
        name: "listGap",
        label: "List Gap",
        widget: "select",
        options: ["sm", "md", "lg"],
        required: false,
      },
      {
        name: "randomize",
        label: "Randomize",
        widget: "boolean",
        required: false,
        default: false,
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
