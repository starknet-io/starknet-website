import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const sm = defineStyle({
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "24px"
});

const md = defineStyle({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px"
});

const baseStyle = defineStyle({
  textColor:  "link-fg",
  _hover: {
    textColor: "link-hover-fg"
  }
})

export const customLinkTheme = defineStyleConfig({
  defaultProps: {
    size: 'md',
    variant: 'cardLink',
    colorScheme: 'brand',
  },
  baseStyle,
  variants: {
    cardLink: {
      color: "red"
    }
  },
  sizes: {
    sm,
    md
  }
});
