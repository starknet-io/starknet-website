import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const listCard = definePartsStyle({
  container: {
    px: "sm",
    background: "surface.transparent.value",
    color: "content.accent.value",
    fontSize: "14px",
    borderRadius: "round",
  },
});

const tutorialCard = definePartsStyle({
  container: {
    bg: "surface.transparent.value",
    color: "content.accent.value",
    fontSize: "14px",
    lineHeight: "24px",
    borderRadius: "round",
    paddingInline: "sm",
    minHeight: "24px",
    fontWeight: 500,
  },
});

export const tagTheme = defineMultiStyleConfig({
  variants: {
    listCard,
    tutorialCard,
  },
});
