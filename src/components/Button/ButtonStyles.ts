import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

export const ButtonStyles = defineStyleConfig({
  baseStyle: {},
  variants: {
    primary: {
      bg: "btn-primary-bg",
      border: "2px solid",
      color: "btn-primary-fg",
      borderColor: "btn-primary-border",
      _hover: {
        bg: "btn-primary-hover-bg",
        color: "btn-primary-hover-fg",
        borderColor: "btn-primary-hover-border",
      },
    },

    tertiary: (props: StyleFunctionProps) => ({
      size: "xs",
      border: "0px solid",
      color: props.colorMode === "dark" ? "brand.primary" : "brand.primary",
      _hover: {
        color:
          props.colorMode === "dark" ? "brand.secondary" : "brand.secondary",
        borderColor:
          props.colorMode === "dark" ? "brand.secondary" : "brand.secondary",
      },
    }),
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "primary",
  },
});
