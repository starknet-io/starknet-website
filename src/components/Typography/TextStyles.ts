import { defineStyleConfig } from "src/libs/chakra-ui";

export const textTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: "400"
  },
  variants: {
    cardBody: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 400
    },
    body: {
      fontSize: "16px",
      lineHeight: "32px",
      fontWeight: 400
    },
    breadcrumbs: {
      fontSize: "12px",
      lineHeight: "150%",
      fontWeight: 400,
      color: '#6B7280',
      textDecoration: "underline",
      cursor: "pointer"
    },
    footerLink: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 400,
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline"
      }
    },
    textLink: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 400,
      cursor: "pointer",
      color: "selected.main",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  }
});
