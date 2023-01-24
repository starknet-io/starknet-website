import { defineStyle, defineStyleConfig } from "src/libs/chakra-ui";

const simple = defineStyle({
  border: "0",
  bg: "transparent", // change the appearance of the border
  borderRadius: 0,

  _hover: {},
  // remove the border radius
  // change the font weight
});

const xl = defineStyle({
  fontSize: "xl",
});

export const iconButtonTheme = defineStyleConfig({
  variants: { simple },
  sizes: { xl },
});
