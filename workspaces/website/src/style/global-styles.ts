export const styles = {
  global: {
    html: {
      fontSize: "16px",
      scrollPaddingTop: "140px",
    },
    body: {
      background: "bg-default",
      color: "content.default.value",
    },
    "p + h3, ul + h3, .hljs-box + h3": {
      marginTop: "48px",
      marginBottom: "16px",
    },
    " p + h2, ul + h2": {
      marginTop: "48px",
      marginBottom: "16px",
    },
    " p:has(> img) + h3": {
      marginTop: "0",
    },
    " p:has(> img) + h2": {
      marginTop: "0",
    },
  },
};
