import { defineStyleConfig } from "@chakra-ui/react";

// define the base component styles
const baseStyle = {
  bg: "surface.accent",
  color: "bg.200",
  borderColor: "surface.accent",
  borderRadius: "8px", // add a border radius
  fontWeight: 500,
  paddingX: "sm",
  paddingY: { base: "xs", lg: "sm" },
  fontSize: "14px",
  lineHeight: "24px",
  "--popper-arrow-shadow-color": "var(--chakra-colors-surface-accent)",
  "--popper-arrow-bg": "var(--chakra-colors-surface-accent)",
};

// export the component theme
export const tooltipTheme = defineStyleConfig({ baseStyle });
