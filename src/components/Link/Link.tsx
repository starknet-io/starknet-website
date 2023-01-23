import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const card = defineStyle({
  textDecoration: "none",
  color: "card-link-fg",
  fontSize: "18px",
  fontWeight: "medium",

  _hover: {
    color: "card-link-hover-fg",
    textDecoration: "none",
  },
});

export const linkTheme = defineStyleConfig({
  variants: { card },
});
