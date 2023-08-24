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
      bg: "nav-accordian-expanded-bg",
      color: "nav-accordian-expanded-fg",
    },
  },
});

const page = definePartsStyle({
  root: {
    bg: "surface.card",
    borderBottomWidth: "1px",
    borderColor: "border.divider",
    overflow: "hidden",
  },
  panel: {
    border: "0px",
    size: "12px",
    marginTop: "0px !important",
    paddingY: "0px",
    paddingLeft: "32px",
    paddingTop: "sm",
    fontSize: "16px!important",
    p: {
      padding: 0,
    },
    color: "content.support",
    lineHeight: "28px",
  },
  container: {
    padding: "xl",
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
    padding: 0,
    border: "0px",
    fontWeight: 600,
    fontSize: "16px",
    gap: "xs",
    color: "content.accent",
    div: {
      fontSize: "16px",
    },
    _hover: {
      bg: "card-bg",
    },

    _expanded: {
      color: "heading-navy-fg",
      // bg: "nav-accordian-expanded-bg",
    },
  },
});

export const accordionTheme = defineMultiStyleConfig({
  variants: { navigation, page },
});
