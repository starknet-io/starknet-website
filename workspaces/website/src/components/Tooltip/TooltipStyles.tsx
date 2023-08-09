import { defineStyleConfig } from "@chakra-ui/react";

// define the base component styles
const baseStyle = {
  bg: "surface.accentInverted",
  color: "sruface.accentInvertedText",
  borderColor: "surface.accentInverted",
  borderRadius: "8px", // add a border radius
  fontWeight: 500,
  paddingX: "sm",
  paddingY: { base: "xs", lg: "sm" },
  fontSize: "14px",
  lineHeight: "24px",
  "--popper-arrow-shadow-color": "var(--chakra-colors-surface-accentInverted)",
  "--popper-arrow-bg": "var(--chakra-colors-surface-accentInverted)",
  boxShadow:
    "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};

// export the component theme
export const tooltipTheme = defineStyleConfig({ baseStyle });
