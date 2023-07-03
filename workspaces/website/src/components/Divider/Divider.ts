import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  borderWidth: "1px", // change the width of the border
  borderStyle: "solid", // change the style of the border
  borderColor: "divider-bg", // set border radius to 10
});

export const dividerTheme = defineStyleConfig({
  variants: { primary },
});
