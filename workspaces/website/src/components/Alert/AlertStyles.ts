import { defineStyleConfig } from "@chakra-ui/react";

export const alertTheme = defineStyleConfig({
  baseStyle: {
    container: {
      padding: "18px 0",
      borderBottom: "1px solid #313131",
      justifyContent: 'space-between',
      a: {
        textDecoration: "underline"
      }
    }
  },
  variants: {
    important: {
      container: {
        background: 'linear-gradient(90deg, #CB3E3E 52.15%, #E7442F 91.67%);',
        color: "white",
        display: "flex",
        flexDirection: "column",
        a: {
          color: "white",
          "&:hover": {
            color: "white",
            textDecoration: "none"
          }
        }
      },
      title: {
        color: 'white'
      }
    },
    warning: {
      container: {
        background: 'linear-gradient(90deg, #FFCD9A 52.15%, #FFC49A 91.59%);',
        color: "grey.darkText",
        a: {
          color: "grey.darkText",
          "&:hover": {
            color: "grey.darkText",
            textDecoration: "none"
          }
        }
      },
      title: {
        color: 'grey.darkText'
      }
    },
    info: {
      container: {
        background: 'linear-gradient(90deg, #80DCDA 52.15%, #6DDAF5 91.59%);',
        color: "grey.darkText",
        a: {
          color: "grey.darkText",
          "&:hover": {
            color: "grey.darkText",
            textDecoration: "none"
          }
        }
      },
      title: {
        color: 'grey.darkText'
      }
    }
  }
} as any);
