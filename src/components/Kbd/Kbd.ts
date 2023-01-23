import { defineStyle, defineStyleConfig } from "src/libs/chakra-ui";

const search = defineStyle({
  borderRadius: 4,
  border: 0,
  bg: "kbd-bg",
  color: "kbd-fg",
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
