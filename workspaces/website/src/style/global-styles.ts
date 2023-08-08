export const styles = {
  global: {
    html: {
      fontSize: "16px",
      scrollPaddingTop: "140px",
    },
    body: {
      background: "bg-default",
      color: "fg-default",
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
    "[data-popper-placement=left] .stat-tooltip": {
      background: "surface.accentInverted",
      color: "surface.accentInvertedText",
    },
    "[data-popper-placement=left] .chakra-tooltip__arrow": {
      backgroundColor: "surface.accentInverted",
      "--popper-arrow-shadow-color": "var(--chakra-colors-surface-accent)",
      "--popper-arrow-bg": "var(--chakra-colors-surface-accentInverted)",
    },
  },
};
