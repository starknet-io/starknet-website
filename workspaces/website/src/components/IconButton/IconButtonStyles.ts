/**
 * Module dependencies
 */

import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

/**
 * `primary` variant
 */

const primary = defineStyle({
  height: "auto",
  color: "darkMode.card",
  bg: "transparent",
  borderColor: "transparent",
  borderWidth: 1,
  _hover: {
    bg: "bg.200",
    _focus: {
      bg: "bg.200",
      borderColor: "transparent",
      borderWidth: 1,
    },
    _dark: {
      bg: "black",
    },
  },
  _active: {
    bg: "transparent",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    outlineWidth: 1,
    borderWidth: "1px",
    borderColor: "transparent",
    color: "darkMode.card",
    _focus: {
      bg: "transparent",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      outlineWidth: 1,
      borderWidth: "1px",
      borderColor: "transparent"
    },
    _dark: {
      bg: "black",
      color: "btn-outline-active-fg",
      borderColor: "black",
      outlineWidth: 1,
      _focus: {
        bg: "black",
        color: "grey.greyDusk",
        borderColor: "black",
        outlineWidth: 1
      }
    }
  },
  _focus: {
    boxShadow: "none",
    borderColor: "selected.main",
    _dark: {
      boxShadow: "none",
      borderColor: "selected.100",
      borderWidth: "1px",
      borderStyle: "solid"
    }
  },
  _dark: {
    borderColor: "transparent",
    color: "white"
  }
});

/**
 * `outline` variant
 */

const outline = defineStyle({
  height: "auto",
  color: "btn-primary-border",
  bg: "transparent",
  borderWidth: 1,
  borderColor: "btn-primary-border",
  _hover: {
    bg: "bg.200",
    opacity: 0.8,
    _focus: {
      bg: "bg.200",
      borderWidth: 1,
    },
    _dark: {
      bg: "black",
    },
  },
  _active: {
    bg: "transparent",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    outlineWidth: 1,
    borderWidth: "1px",
    borderColor: "btn-primary-border",
    color: "btn-primary-border",
    _focus: {
      bg: "transparent",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      outlineWidth: 1,
      borderWidth: "1px",
    },
    _dark: {
      bg: "black",
      color: "btn-outline-active-fg",
      borderColor: "white !important",
      outlineWidth: 1,
      _focus: {
        bg: "black",
        color: "grey.greyDusk",
        borderColor: "white !important",
        outlineWidth: 1
      }
    }
  },
  _focus: {
    boxShadow: "none",
    _dark: {
      boxShadow: "none",
      borderWidth: "1px",
      borderStyle: "solid"
    }
  },
  _dark: {
    borderColor: "white !important",
    color: "white"
  }
});

/**
 * Export `iconButtonTheme`
 */

export const iconButtonTheme = defineStyleConfig({
  variants: {
    outline,
    primary
  },
});
