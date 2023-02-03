import { defineStyle, defineStyleConfig } from "src/libs/chakra-ui";

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

const list = defineStyle({
  textDecoration: "none",
  color: "card-link-fg",
  fontSize: "18px",
  fontWeight: "medium",

  _hover: {
    color: "card-link-hover-fg",
    textDecoration: "none",
  },
});

const standard = defineStyle({
  textDecoration: "none",
  color: "card-link-fg",

  _hover: {
    color: "card-link-hover-fg",
  },
});

export const linkTheme = defineStyleConfig({
  variants: { card, list, standard },
});
