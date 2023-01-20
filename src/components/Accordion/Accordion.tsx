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

export const accordionTheme = defineMultiStyleConfig({
  variants: { navigation },
});
