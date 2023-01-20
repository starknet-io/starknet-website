import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const search = definePartsStyle({
  // define the part you're going to style
  field: {
    cursor: "pointer",
    maxWidth: "237px",
    background: "nav-searchinput-bg",
    justifyContent: "center",
    height: "46px",
    fontWeight: "medium",
    color: "nav-searchinput-fg",
    borderColor: "nav-searchinput-br",
    borderWidth: "1px",
    borderRadius: "8px",
    _hover: {
      bg: "nav-searchinput-hover-bg",
      borderColor: "nav-searchinput-hover-br",
      color: "nav-searchinput-hover-fg",
    },
  },
  element: {
    color: "nav-searchinput-fg",
    _hover: {
      color: "nav-searchinput-hover-fg",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({ variants: { search } });
