import { defineStyleConfig } from "src/libs/chakra-ui";

export const alertTheme = defineStyleConfig({
  baseStyle: {
    container: {
      padding: "18px 56px",
      borderBottom: "1px solid #313131",
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
        flexDirection: "column"
      },
      title: {
        color: 'white'
      }
    },
    warning: {
      container: {
        background: 'linear-gradient(90deg, #FFCD9A 52.15%, #FFC49A 91.59%);',
        color: "grey.darkText"
      },
      title: {
        color: 'grey.darkText'
      }
    },
    info: {
      container: {
        background: 'linear-gradient(90deg, #80DCDA 52.15%, #6DDAF5 91.59%);',
        color: "grey.darkText"
      },
      title: {
        color: 'grey.darkText'
      }
    }
  }
});
