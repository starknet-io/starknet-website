import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const tagPrimary = definePartsStyle({
  container: {
    bg: "orange.400",
    color: "blackAlpha.700",
  },
});

export const tagTheme = defineMultiStyleConfig({
  variants: {
    tagPrimary,
  },
});
