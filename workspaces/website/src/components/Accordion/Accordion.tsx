import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const navigation = definePartsStyle({
  panel: {
    border: "0px",
    size: "12px",
    paddingLeft: "0px",
    fontSize: "12px",
    // Let's also provide dark mode alternatives
  },
  container: { border: "0px", paddingLeft: "0px", fontSize: "12px" },
  button: {
    paddingLeft: "16px!important",
    paddingRight: "16px!important",
    border: "0px",
    borderRadius: "4px",
    fontSize: "12px",
    div: {
      fontSize: "16px",
    },

    _expanded: {
      bg: "nav-accordion-expanded-bg",
      color: "nav-accordion-expanded-fg",
    },
  },
});

const page = definePartsStyle({
  root: {
    bg: "card-bg",
    borderRadius: "16px",
    borderWidth: "1px",
    borderColor: "card-br",
    overflow: "hidden",
  },
  panel: {
    border: "0px",
    size: "12px",
    paddingLeft: "64px!important",
    paddingTop: "0px!important",
    fontSize: "16px!important",
  },
  container: {
    borderTopWidth: "0px!important",
    borderBottomWidth: "1px!important",
    borderColor: "card-br!important",

    _first: {
      borderTopWidth: "0px!important",
    },
    _last: {
      borderBottomWidth: "0px!important",
    },
  },

  button: {
    px: "24px",
    py: "24px",
    border: "0px",
    fontWeight: "bold",
    fontSize: "16px",
    gap: "16px",
    color: "heading-navy-fg",
    div: {
      fontSize: "16px",
    },
    _hover: {
      bg: "card-bg",
    },

    _expanded: {
      color: "heading-navy-fg",
      // bg: "nav-accordion-expanded-bg",
    },
  },
});

export const accordionTheme = defineMultiStyleConfig({
  variants: { navigation, page },
});
