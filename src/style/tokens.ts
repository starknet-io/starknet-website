export const tokens = {
  colors: {
    light: {
      "bg-default": "#F6F6F6",
      "fg-default": "#6B7280",
      "fg-muted": "#858585",
      "fg-accent": "#E97880",
      "navbar-bg": "#FAFAFA",
      "navbar-dropdown-bg": "#FFFFFF",
      "navlink-fg": "#6B7280",
      "btn-outline-bg": "transparent",
      "btn-outline-fg": "#6B7280",
      "btn-outline-border": "#EFEFEF",
      "btn-outline-hover-bg": "transparent",
      "btn-outline-hover-fg": "#5C94FF",
      "btn-outline-hover-border": "#5C94FF",
      "btn-outline-active-bg": "#EFEFEF",
      "btn-outline-active-fg": "#6B7280",
      "btn-outline-active-border": "#EFEFEF",

      "btn-bg": "",
      "btn-hover-bg": "",
      "btn-active-bg": "",
      "btn-fg": "",
      "btn-hover-fg": "",
      "btn-active-fg": "",
      "btn-border": "",
      "btn-hover-border": "",
      "btn-active-border": "",
      "btn-primary-bg": "#0C0C4F",
      "btn-primary-hover-bg": "#0C0C4F",
      "btn-primary-active-bg": "#0C0C4F",
      "btn-primary-fg": "#FFFFFF",
      "btn-primary-hover-fg": "#FFFFFF",
      "btn-primary-active-fg": "#FFFFFF",
      "btn-primary-border": "#0C0C4F",
      "btn-primary-hover-border": "#0C0C4F",
      "btn-primary-active-border": "#0C0C4F",
      "article-card-bg": "#FFFFFF",
      "card-bg": "#FFFFFF",
      "subnav-fg": "#858585",
      "subnav-fg-accent": "0C0C4F",
      "heading-navy-fg": "#0C0C4F",
      "columnlink-bg": "transparent",
      "columnlink-fg": "#6B7280",
      "columnlink-hover-bg": "#FBFBFB",
      "columnlink-hover-fg": "#5C94FF",
      "columnlink-active-bg": "#FFFFFF",
      "columnlink-active-fg": "#0C0C4F",
      "divider-bg": "#EFEFEF",
    },

    dark: {
      "bg-default": "#0B0B0B",
      "fg-default": "#CCCCCC",
      "fg-muted": "#7E7E7E",
      "fg-accent": "#FE9E92",
      "navbar-bg": "#121212",
      "navbar-dropdown-bg": "#1B1B1B",
      "navlink-fg": "#CCCCCC",
      "btn-outline-bg": "transparent",
      "btn-outline-fg": "#ffffff",
      "btn-outline-border": "#7E7E7E",
      "btn-outline-hover-bg": "transparent",
      "btn-outline-hover-fg": "#9EBFFF",
      "btn-outline-hover-border": "#9EBFFF",
      "btn-outline-active-bg": "#000000",
      "btn-outline-active-fg": "#858585",
      "btn-outline-active-border": "#000000",
      "btn-bg": "",
      "btn-hover-bg": "",
      "btn-active-bg": "",
      "btn-fg": "",
      "btn-hover-fg": "",
      "btn-active-fg": "",
      "btn-border": "",
      "btn-hover-border": "",
      "btn-active-border": "",
      "btn-primary-bg": "#5C94FF",
      "btn-primary-hover-bg": "#5C94FF",
      "btn-primary-active-bg": "#5C94FF",
      "btn-primary-fg": "#FFFFFF",
      "btn-primary-hover-fg": "#FFFFFF",
      "btn-primary-active-fg": "#FFFFFF",
      "btn-primary-border": "#5C94FF",
      "btn-primary-hover-border": "#5C94FF",
      "btn-primary-active-border": "#5C94FF",
      "article-card-bg": "#1B1B1B",
      "card-bg": "#1B1B1B",
      "subnav-fg": "#7E7E7E",
      "subnav-fg-accent": "#ffffff",
      "heading-navy-fg": "#FFFFFF",
      "columnlink-bg": "transparent",
      "columnlink-fg": "#CCCCCC",
      "columnlink-hover-bg": "#121212",
      "columnlink-hover-fg": "#9EBFFF",
      "columnlink-active-bg": "transparent",
      "columnlink-active-fg": "#9EBFFF",
      "divider-bg": "#313131",
    },
  },
};

export const semanticTokens = {
  colors: {
    "bg-default": {
      default: tokens.colors.light["bg-default"],
      _dark: tokens.colors.dark["bg-default"],
    },
    "fg-default": {
      default: tokens.colors.light["fg-default"],
      _dark: tokens.colors.dark["fg-default"],
    },
    "fg-muted": {
      default: tokens.colors.light["fg-muted"],
      _dark: tokens.colors.dark["fg-muted"],
    },
    "fg-accent": {
      default: tokens.colors.light["fg-accent"],
      _dark: tokens.colors.dark["fg-accent"],
    },
    "navbar-bg": {
      default: tokens.colors.light["navbar-bg"],
      _dark: tokens.colors.dark["navbar-bg"],
    },
    "navbar-dropdown-bg": {
      default: tokens.colors.light["navbar-dropdown-bg"],
      _dark: tokens.colors.dark["navbar-dropdown-bg"],
    },
    "navlink-fg": {
      default: tokens.colors.light["navlink-fg"],
      _dark: tokens.colors.dark["navlink-fg"],
    },
    "btn-bg": {
      default: tokens.colors.light["btn-bg"],
      _dark: tokens.colors.dark["btn-bg"],
    },
    "btn-hover-bg": {
      default: tokens.colors.light["btn-hover-bg"],
      _dark: tokens.colors.dark["btn-hover-bg"],
    },
    "btn-active-bg": {
      default: tokens.colors.light["btn-active-bg"],
      _dark: tokens.colors.dark["btn-active-bg"],
    },
    "btn-fg": {
      default: tokens.colors.light["btn-fg"],
      _dark: tokens.colors.dark["btn-fg"],
    },
    "btn-hover-fg": {
      default: tokens.colors.light["btn-hover-fg"],
      _dark: tokens.colors.dark["btn-hover-fg"],
    },
    "btn-active-fg": {
      default: tokens.colors.light["btn-active-fg"],
      _dark: tokens.colors.dark["btn-active-fg"],
    },
    "btn-border": {
      default: tokens.colors.light["btn-border"],
      _dark: tokens.colors.dark["btn-border"],
    },
    "btn-hover-border": {
      default: tokens.colors.light["btn-hover-border"],
      _dark: tokens.colors.dark["btn-hover-border"],
    },
    "btn-active-border": {
      default: tokens.colors.light["btn-active-border"],
      _dark: tokens.colors.dark["btn-active-border"],
    },

    "btn-primary-bg": {
      default: tokens.colors.light["btn-primary-bg"],
      _dark: tokens.colors.dark["btn-primary-bg"],
    },
    "btn-primary-hover-bg": {
      default: tokens.colors.light["btn-primary-hover-bg"],
      _dark: tokens.colors.dark["btn-primary-hover-bg"],
    },
    "btn-primary-active-bg": {
      default: tokens.colors.light["btn-primary-active-bg"],
      _dark: tokens.colors.dark["btn-primary-active-bg"],
    },
    "btn-primary-fg": {
      default: tokens.colors.light["btn-primary-fg"],
      _dark: tokens.colors.dark["btn-primary-fg"],
    },
    "btn-primary-hover-fg": {
      default: tokens.colors.light["btn-primary-hover-fg"],
      _dark: tokens.colors.dark["btn-primary-hover-fg"],
    },
    "btn-primary-active-fg": {
      default: tokens.colors.light["btn-primary-active-fg"],
      _dark: tokens.colors.dark["btn-primary-active-fg"],
    },
    "btn-primary-border": {
      default: tokens.colors.light["btn-primary-border"],
      _dark: tokens.colors.dark["btn-primary-border"],
    },
    "btn-primary-hover-border": {
      default: tokens.colors.light["btn-primary-hover-border"],
      _dark: tokens.colors.dark["btn-primary-hover-border"],
    },
    "btn-primary-active-border": {
      default: tokens.colors.light["btn-primary-active-border"],
      _dark: tokens.colors.dark["btn-primary-active-border"],
    },
    "article-card-bg": {
      default: tokens.colors.light["article-card-bg"],
      _dark: tokens.colors.dark["article-card-bg"],
    },
    "card-bg": {
      default: tokens.colors.light["card-bg"],
      _dark: tokens.colors.dark["card-bg"],
    },
    "subnav-fg": {
      default: tokens.colors.light["subnav-fg"],
      _dark: tokens.colors.dark["subnav-fg"],
    },
    "subnav-fg-accent": {
      default: tokens.colors.light["subnav-fg-accent"],
      _dark: tokens.colors.dark["subnav-fg-accent"],
    },
    "heading-navy-fg": {
      default: tokens.colors.light["heading-navy-fg"],
      _dark: tokens.colors.dark["heading-navy-fg"],
    },
    "columnlink-bg": {
      default: tokens.colors.light["columnlink-bg"],
      _dark: tokens.colors.dark["columnlink-bg"],
    },
    "columnlink-fg": {
      default: tokens.colors.light["columnlink-fg"],
      _dark: tokens.colors.dark["columnlink-fg"],
    },
    "columnlink-hover-bg": {
      default: tokens.colors.light["columnlink-hover-bg"],
      _dark: tokens.colors.dark["columnlink-hover-bg"],
    },
    "columnlink-hover-fg": {
      default: tokens.colors.light["columnlink-hover-fg"],
      _dark: tokens.colors.dark["columnlink-hover-fg"],
    },
    "columnlink-active-bg": {
      default: tokens.colors.light["columnlink-active-bg"],
      _dark: tokens.colors.dark["columnlink-active-bg"],
    },
    "columnlink-active-fg": {
      default: tokens.colors.light["columnlink-active-fg"],
      _dark: tokens.colors.dark["columnlink-active-fg"],
    },
    "btn-outline-bg": {
      default: tokens.colors.light["btn-outline-bg"],
      _dark: tokens.colors.dark["btn-outline-bg"],
    },
    "btn-outline-fg": {
      default: tokens.colors.light["btn-outline-fg"],
      _dark: tokens.colors.dark["btn-outline-fg"],
    },
    "btn-outline-border": {
      default: tokens.colors.light["btn-outline-border"],
      _dark: tokens.colors.dark["btn-outline-border"],
    },
    "btn-outline-hover-border": {
      default: tokens.colors.light["btn-outline-hover-border"],
      _dark: tokens.colors.dark["btn-outline-hover-border"],
    },
    "btn-outline-hover-fg": {
      default: tokens.colors.light["btn-outline-hover-fg"],
      _dark: tokens.colors.dark["btn-outline-hover-fg"],
    },
    "btn-outline-active-bg": {
      default: tokens.colors.light["btn-outline-active-bg"],
      _dark: tokens.colors.dark["btn-outline-active-bg"],
    },
    "btn-outline-active-fg": {
      default: tokens.colors.light["btn-outline-active-fg"],
      _dark: tokens.colors.dark["btn-outline-active-fg"],
    },
    "btn-outline-active-border": {
      default: tokens.colors.light["btn-outline-active-border"],
      _dark: tokens.colors.dark["btn-outline-active-border"],
    },
  },
};
