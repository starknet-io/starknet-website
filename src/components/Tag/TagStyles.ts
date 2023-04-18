import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "src/libs/chakra-ui";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const listCard = definePartsStyle({
  container: {
    px: "12px",
    py: "2px",
    background: "#F3F4F6",
    color: "#1F2937",
    fontSize: "14px",
    borderRadius: "12px",
  },
});

export const tagTheme = defineMultiStyleConfig({
  variants: {
    listCard,
  },
});
