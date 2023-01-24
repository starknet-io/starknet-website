import { defineStyle, defineStyleConfig } from "src/libs/chakra-ui";

const primary = defineStyle({
  borderWidth: "1px", // change the width of the border
  borderStyle: "solid", // change the style of the border
  borderColor: "divider-bg", // set border radius to 10
});

export const dividerTheme = defineStyleConfig({
  variants: { primary },
});
