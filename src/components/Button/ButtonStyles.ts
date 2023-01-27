import { defineStyle, defineStyleConfig } from "src/libs/chakra-ui";

const outline = defineStyle({
  // change the appearance of the border
  borderRadius: 4, // remove the border radius
  fontWeight: "medium", // change the font weight
  fontSize: "14px",
  paddingLeft: "40px",
  paddingRight: "40px",
  color: "btn-outline-fg",
  borderColor: "btn-outline-border",
  bg: "btn-outline-bg",
  _hover: {
    bg: "btn-outline-hover-bg",
    color: "btn-outline-hover-fg",
    borderColor: "btn-outline-hover-border",
  },
  _active: {
    bg: "btn-outline-active-bg",
    color: "btn-outline-active-fg",
    borderColor: "btn-outline-active-border",
  },
});

const solid = defineStyle({
  bg: "btn-primary-bg",
});

const filter = defineStyle({
  // change the appearance of the border
  borderRadius: 4, // remove the border radius
  fontWeight: "medium", // change the font weight
  fontSize: "12px",
  lineHeight: "12px",
  padding: "8px 16px",
  color: "btn-filter-fg",

  bg: "btn-filter-bg",
  _hover: {
    bg: "btn-filter-hover-bg",
    color: "btn-filter-hover-fg",
  },
  _active: {
    bg: "btn-filter-active-bg",
    color: "btn-filter-active-fg",
  },
});
const filterActive = defineStyle({
  // change the appearance of the border
  borderRadius: 4, // remove the border radius
  fontWeight: "medium", // change the font weight
  fontSize: "12px",
  lineHeight: "12px",
  padding: "8px 16px",
  bg: "btn-filter-active-bg",
  color: "btn-filter-active-fg",
  _hover: {
    bg: "btn-filter-active-hover-bg",
    color: "btn-filter-active-hover-fg",
  },
});

const category = defineStyle({
  cursor: "pointer",
  // change the appearance of the border
  borderRadius: 0, // remove the border radius
  fontWeight: "medium", // change the font weight
  fontSize: "14px",
  lineHeight: "14px",
  padding: "8px 0 16px",
  color: "tabs-fg",
  borderBottomWidth: "1px",
  borderColor: "tabs-border-bg",

  bg: "tabs-bg",
  _hover: {
    bg: "tabs-bg",
    color: "tabs-hover-fg",
  },
  _active: {
    bg: "tabs-bg",
    color: "tabs-fg-active",
    borderColor: "tabs-border-active-bg",
  },
});
const categoryActive = defineStyle({
  // change the appearance of the border
  // borderRadius: 4, // remove the border radius
  // fontWeight: "medium", // change the font weight
  // fontSize: "12px",
  // lineHeight: "12px",
  // padding: "8px 16px",
  // bg: "btn-filter-active-bg",
  // color: "btn-filter-active-fg",
  // _hover: {
  //   bg: "btn-filter-active-hover-bg",
  //   color: "btn-filter-active-hover-fg",
  // },
});

export const buttonTheme = defineStyleConfig({
  variants: { outline, filter, filterActive, solid, category, categoryActive },
});

// export const ButtonStyles = defineStyleConfig({
//   baseStyle: {},
//   // variants: {
//   //   primary: {
//   //     bg: "btn-primary-bg",
//   //     border: "2px solid",
//   //     color: "btn-primary-fg",
//   //     borderColor: "btn-primary-border",
//   //     _hover: {
//   //       bg: "btn-primary-hover-bg",
//   //       color: "btn-primary-hover-fg",
//   //       borderColor: "btn-primary-hover-border",
//   //     },
//   //   },

//   //   tertiary: (props: StyleFunctionProps) => ({
//   //     size: "xs",
//   //     border: "0px solid",
//   //     color: props.colorMode === "dark" ? "brand.primary" : "brand.primary",
//   //     _hover: {
//   //       color:
//   //         props.colorMode === "dark" ? "brand.secondary" : "brand.secondary",
//   //       borderColor:
//   //         props.colorMode === "dark" ? "brand.secondary" : "brand.secondary",
//   //     },
//   //   }),
//   // },
//   // // The default size and variant values
//   // defaultProps: {
//   //   size: "md",
//   //   variant: "outline",
//   // },
// });
