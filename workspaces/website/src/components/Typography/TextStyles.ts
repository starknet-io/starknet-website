import { defineStyleConfig } from "@chakra-ui/react";

export const textTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: "400",
  },
  variants: {
    cardBody: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    body: {
      fontSize: "16px",
      lineHeight: "32px",
      fontWeight: 400,
    },
    headingDescription: {
      fontSize: "18px",
      lineHeight: "32px",
      fontWeight: 400,
      color: "content.accent.value",
    },
    breadcrumbs: {
      fontSize: "12px",
      lineHeight: "150%",
      fontWeight: 400,
      color: "#6B7280",
      textDecoration: "underline",
      cursor: "pointer",
    },
    footerLink: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 400,
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    textLink: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: 400,
      cursor: "pointer",
      color: "listLink-fg",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
});
