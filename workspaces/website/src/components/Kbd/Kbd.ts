import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const search = defineStyle({
  borderRadius: 4,
  border: 0,
  bg: "kbd-bg",
  color: "default-fg",
  padding: "4px 12px",
});
const md = defineStyle({
  fontSize: "md",
});
const lg = defineStyle({
  fontSize: "lg",
});

export const kbdTheme = defineStyleConfig({
  variants: { search },
  sizes: { lg, md },
});
