import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  borderRadius: 8,
  fontWeight: "medium",
  fontSize: "16px",
  color: "content.accent.value",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "border.accent",
  minWidth: "none",
  lineHeight: "24px",
  height: "auto",
  borderImage: "none",
  bg: "linear-gradient(white, white) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
  _dark: {
    bg: "linear-gradient(#0B0B0B, #0B0B0B) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
  },
  "&:disabled": {
    color: "btn-outline-disabled-fg",
    borderColor: "btn-outline-disabled-border",
    borderImage: "none",
    boxShadow: "none",
    bg: "linear-gradient(white, white) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
  },
  _focusVisible: {
    boxShadow: "none",
    outlineOffset: 1,
    outline: "3px solid #3f8cff",
    _dark: {
      outlineOffset: 0,
    },
  },
  _hover: {
    borderImage: "linear-gradient(119deg, #EC796B 0%, #D672EF 100%)",
    bg: "linear-gradient(#eae9eb, #eae9eb) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    "&:disabled": {
      color: "btn-outline-disabled-fg",
      borderColor: "btn-outline-disabled-border",
      borderImage: "none",
      boxShadow: "none",
      bg: "linear-gradient(white, white) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    },
    _dark: {
      bg: "linear-gradient(#28282c, #28282c) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    },
  },
  _active: {
    borderImage: "linear-gradient(119deg, #EC796B 0%, #D672EF 100%)",
    bg: "linear-gradient(#eae9eb, #eae9eb) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    outlineWidth: 1,
    "&:disabled": {
      color: "btn-outline-disabled-fg",
      borderColor: "btn-outline-disabled-border",
      borderImage: "none",
      boxShadow: "none",
      bg: "linear-gradient(white, white) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    },
    _focus: {
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      outlineWidth: 1,
    },
    _dark: {
      boxShadow: "0px 6px 0px 0px rgba(17, 17, 17, 0.24) inset",
      bg: "linear-gradient(#28282c, #28282c) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
      outlineWidth: 1,
      _focus: {
        outlineWidth: 1,
      },
    },
  },
});

const rounded = defineStyle({
  borderRadius: 999,
  fontWeight: "medium",
  fontSize: "16px",
  color: "content.accent.value",
  borderWidth: 1,
  borderStyle: "solid",
  minWidth: "none",
  lineHeight: "24px",
  height: "auto",
  bg: "surface.transparent.value",
  borderColor: "border.divider",
  "&:disabled": {
    color: "btn-outline-disabled-fg",
    borderColor: "btn-outline-disabled-border",
    borderImage: "none",
    boxShadow: "none",
  },
  _focusVisible: {
    boxShadow: "1px solid #ffffff",
    outlineOffset: 1,
    outline: "3px solid #3f8cff",
    _dark: {
      boxShadow: "0px 0px 0px 1px #ffffff",
      outlineOffset: 1,
      outline: "3px solid #3f8cff",
    },
  },
  _hover: {
    borderImage: "linear-gradient(119deg, #EC796B 0%, #D672EF 100%)",
    bg: "linear-gradient(#eae9eb, #eae9eb) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    "&:disabled": {
      bg: "btn-rounded-bg",
      color: "btn-outline-disabled-fg",
      borderColor: "btn-outline-disabled-border",
      borderImage: "none",
      boxShadow: "none !important",
    },
    _dark: {
      bg: "linear-gradient(#28282c, #28282c) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    },
  },
  _active: {
    borderImage: "linear-gradient(119deg, #EC796B 0%, #D672EF 100%)",
    bg: "linear-gradient(#eae9eb, #eae9eb) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1) !important",
    outlineWidth: 1,
    "&:disabled": {
      color: "btn-outline-disabled-fg",
      borderColor: "btn-outline-disabled-border",
      borderImage: "none",
      boxShadow: "none !important",
    },
    _focus: {
      borderColor: "white",
      outlineWidth: 1,
    },
    _dark: {
      boxShadow: "0px 6px 0px 0px rgba(17, 17, 17, 0.24) inset",
      bg: "linear-gradient(#28282c, #28282c) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
      outlineWidth: 1,
      _focus: {
        outlineWidth: 1,
      },
    },
  },
});

const ghost = defineStyle({
  borderRadius: 8,
  fontWeight: "medium",
  fontSize: "16px",
  color: "btn-ghost-fg",
  minWidth: "none",
  lineHeight: "24px",
  height: "auto",
  bg: "transparent",
  "&:disabled": {
    color: "btn-outline-disabled-fg",
    boxShadow: "none",
  },
  _focusVisible: {
    boxShadow: "none",
    outlineOffset: 1,
    outline: "3px solid #3f8cff",
    _dark: {
      boxShadow: "0px 0px 0px 1px #ffffff",
    },
  },
  _hover: {
    bg: "#eae9eb",
    color: "btn-ghost-hover-fg",
    "&:disabled": {
      bg: "transparent",
      color: "btn-outline-disabled-fg",
      boxShadow: "none",
    },
    _dark: {
      bg: "#28282c",
    },
  },
  _active: {
    bg: "#eae9eb",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    outlineWidth: 1,
    "&:disabled": {
      color: "btn-outline-disabled-fg",
      boxShadow: "none",
    },
    _focus: {
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      outlineWidth: 1,
    },
    _dark: {
      outlineWidth: 1,
      _focus: {
        outlineWidth: 1,
      },
    },
  },
});

const solid = defineStyle({
  borderRadius: 8,
  fontWeight: 600,
  fontSize: "16px",
  minWidth: "none",
  lineHeight: "24px",
  height: "auto",
  color: "btn-primary-fg",
  bg: "btn-primary-bg",
  "&:disabled": {
    background: "btn-primary-disabled-bg",
    color: "btn-primary-disabled-fg",
    boxShadow: "none",
  },
  _hover: {
    bg: "btn-primary-hover-bg",
    "&:disabled": {
      background: "btn-primary-disabled-bg !important",
      color: "btn-primary-disabled-fg",
      boxShadow: "none !important",
    },
    _dark: {
      bg: "bg.main",
    },
  },
  _active: {
    bg: "btn-primary-active-bg",
    boxShadow: "0px 6px 0px 0px rgba(17, 17, 17, 0.24) inset !important",
    outlineOffset: 1,
    "&:disabled": {
      background: "btn-primary-disabled-bg !important",
      color: "btn-primary-disabled-fg",
      boxShadow: "none !important",
    },
    _dark: {
      bg: "grey.morning",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      _focus: {
        bg: "grey.morning",
        boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  _dark: {
    bg: "white",
  },
  _focusVisible: {
    outlineOffset: 1,
    outline: "3px solid #3F8CFF",
    boxShadow: "none",
    border: "none",
    _dark: {
      outlineOffset: 0,
    },
  },
});

const gradient = defineStyle({
  borderRadius: 8,
  fontWeight: 600,
  fontSize: "16px",
  minWidth: "none",
  lineHeight: "24px",
  height: "auto",
  color: "content.on-surface-inverted.value",
  background: "linear-gradient(270deg, #171870 0%, #3928A0 51%, #A15882 100%)",
  _dark: {
    background:
      "linear-gradient(270deg, #9090E0 0%, #A4A4EA 44.79%, #FEAEA4 100%)",
  },
  "&:disabled": {
    background: "surface.accent.disabled",
    color: "content.on-surface-inverted.disabled",
    boxShadow: "none",
  },
  _hover: {
    background:
      "linear-gradient(270deg, #6565B3 0%, #7666D8 51%, #D586B5 100%)",
    "&:disabled": {
      background: "btn-primary-disabled-bg !important",
      color: "btn-primary-disabled-fg",
      boxShadow: "none !important",
    },
    _dark: {
      background:
        "linear-gradient(270deg, #B7B7F5 0%, #C7C7F9 44.79%, #FFDBD6 100%)",
    },
  },
  _active: {
    background:
      "linear-gradient(270deg, #171870 0%, #3928A0 51%, #A15882 100%)",
    boxShadow: "0px 6px 0px 0px rgba(17, 17, 17, 0.24) inset !important",
    outlineOffset: 1,
    "&:disabled": {
      background: "btn-primary-disabled-bg !important",
      color: "btn-primary-disabled-fg",
      boxShadow: "none !important",
    },
    _dark: {
      background:
        "linear-gradient(270deg, #9090E0 0%, #A4A4EA 44.79%, #FEAEA4 100%)",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      _focus: {
        background:
          "linear-gradient(270deg, #9090E0 0%, #A4A4EA 44.79%, #FEAEA4 100%)",
        boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  _focusVisible: {
    outlineOffset: 1,
    outline: "3px solid #3F8CFF",
    boxShadow: "none",
    border: "none",
    _dark: {
      outlineOffset: 0,
    },
  },
});

const primaryHero = defineStyle({
  borderRadius: 4,
  fontWeight: "medium",
  fontSize: "14px",
  minWidth: "none",
  lineHeight: "16px",
  height: "auto",
  padding: "16px 24px",
  color: "white",
  bg: "snNavy",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "btn-primary-bg",
  _hover: {
    bg: "selected.main",
    borderColor: "selected.main",
    _dark: {
      bg: "selected.100",
      borderColor: "selected.100",
      color: "snNavy",
    },
  },
  _active: {
    bg: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #5C94FF",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    borderColor: "selected.main",
    outlineWidth: 1,
    _focus: {
      bg: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #5C94FF",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      borderColor: "selected.main",
    },
    _dark: {
      bg: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #AFCAFF",
      borderColor: "transparent",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      color: "snNavy",
      _focus: {
        bg: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #AFCAFF",
        boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
        color: "snNavy",
        borderColor: "transparent",
      },
    },
  },
  _dark: {
    bg: "white",
    borderColor: "white",
    color: "snNavy",
  },
  _focus: {
    boxShadow: "none",
    borderColor: "selected.main",
    borderWidth: "1px",
    borderStyle: "solid",
    _dark: {
      boxShadow: "none",
      borderColor: "selected.100",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
});
const secondaryHero = defineStyle({
  borderRadius: 4,
  fontWeight: "medium",
  fontSize: "14px",
  minWidth: "none",
  lineHeight: "16px",
  height: "auto",
  padding: "16px 24px",
  color: "snNavy",
  bg: "transparent",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "snNavy",
  _hover: {
    bg: "rgba(255, 255, 255, 0.5)",
    borderColor: "selected.main",
    color: "selected.main",
    _dark: {
      bg: "rgba(0, 0, 0, 0.2)",
      borderColor: "selected.100",
      color: "selected.100",
    },
  },
  _active: {
    bg: "rgba(0, 0, 0, 0.05)",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    borderColor: "selected.main",
    color: "selected.main",
    outlineWidth: 1,
    _focus: {
      bg: "rgba(0, 0, 0, 0.05)",
      color: "selected.main",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      borderColor: "selected.main",
    },
    _dark: {
      bg: "rgba(0, 0, 0, 0.4)",
      borderColor: "selected.100",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      color: "selected.100",
      _focus: {
        bg: "rgba(0, 0, 0, 0.4)",
        boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
        color: "selected.100",
        borderColor: "selected.100",
      },
    },
  },
  _dark: {
    bg: "transparent",
    borderColor: "white",
    color: "white",
  },
  _focus: {
    boxShadow: "none",
    borderColor: "selected.main",
    borderWidth: "1px",
    borderStyle: "solid",
    _dark: {
      boxShadow: "none",
      borderColor: "selected.100",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
});

const switchButton = defineStyle({
  height: "auto",
  padding: "sm",
  color: "grey.darkText",
  bg: "transparent",
  borderColor: "transparent",
  borderWidth: 1,
  _hover: {
    bg: "darkMode.navGrey",
    color: "white",
    borderColor: "darkMode.navGrey",
    borderWidth: 1,
    _focus: {
      bg: "darkMode.navGrey",
      color: "white",
      borderColor: "darkMode.navGrey",
      borderWidth: 1,
    },
    _dark: {
      bg: "bg.200",
      color: "grey.darkText",
    },
  },
  _active: {
    bg: "bg.200",
    borderColor: "darkMode.navGrey",
    borderWidth: 1,
    color: "grey.greyDusk",
    outlineWidth: 1,
    _focus: {
      bg: "bg.200",
      color: "grey.greyDusk",
      borderColor: "darkMode.navGrey",
      borderWidth: 1,
      outlineWidth: 1,
    },
    _dark: {
      bg: "grey.morning",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      color: "grey.darkText",
      _focus: {
        bg: "grey.morning",
        boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
        color: "grey.darkText",
      },
    },
  },
  _dark: {
    bg: "transparent",
    color: "white",
  },
  _focus: {
    color: "grey.darkText",
    bg: "transparent",
    borderColor: "selected.main",
    borderWidth: 1,
    _dark: {
      boxShadow: "none",
      borderColor: "selected.100",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
});

const filter = defineStyle({
  borderRadius: 4,
  fontWeight: "medium",
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
  borderRadius: 4,
  fontWeight: "medium",
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
  borderRadius: 0,
  fontWeight: "medium",
  fontSize: "14px",
  lineHeight: "14px",
  py: "xl",
  px: "sm",
  color: "content.default.value",
  borderBottomWidth: "2px",
  borderColor: "transparent",
  height: "auto",
  maxHeight: "none",
  _hover: {
    color: "content.default.hover",
  },
  _selected: {
    color: "content.default.active",
    borderColor: "tabs-border-active-bg",
  },
});

const unstyled = defineStyle({
  height: "auto",
  minHeight: "auto",
  minWidth: "auto",
});
const icon = defineStyle({
  height: "auto",
  padding: "sm",
  color: "darkMode.card",
  bg: "transparent",
  borderColor: "transparent",
  borderWidth: 1,
  _hover: {
    bg: "bg.200",
    _focus: {
      bg: "bg.200",
      borderColor: "transparent",
      borderWidth: 1,
    },
    _dark: {
      bg: "black",
    },
  },
  _active: {
    bg: "transparent",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    outlineWidth: 1,
    borderWidth: "1px",
    borderColor: "transparent",
    color: "darkMode.card",
    _focus: {
      bg: "transparent",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      outlineWidth: 1,
      borderWidth: "1px",
      borderColor: "transparent",
    },
    _dark: {
      bg: "black",
      color: "btn-outline-active-fg",
      borderColor: "black",
      outlineWidth: 1,
      _focus: {
        bg: "black",
        color: "grey.greyDusk",
        borderColor: "black",
        outlineWidth: 1,
      },
    },
  },
  _focus: {
    boxShadow: "none",
    borderColor: "selected.main",
    _dark: {
      boxShadow: "none",
      borderColor: "selected.100",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
  _dark: {
    borderColor: "transparent",
    color: "white",
  },
});

const education = defineStyle({
  color: "#FFFFFF",
  bg: "rgba(0, 0, 0, 0.85)",
  border: "1px solid #313131",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1)",
  borderRadius: "40px", // 2.8571em
  display: "flex",
  gap: "0.7143em", // 10px
  alignItems: "center",
  fontSize: "14px",
  lineHeight: "normal",
  fontWeight: "500",
  // pl: "0.7143em", // 10px
  px: "1.1429em", // 16px
  py: "0.5714em", // 8px

  _hover: {
    background: "rgba(22, 22, 22, 0.85)",
    boxShadow:
      "0px 2px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 12px 0px rgba(0, 0, 0, 0.10)",
  },
  _active: {
    background: "rgba(22, 22, 22, 0.85)",
    boxShadow:
      "0px 2px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 12px 0px rgba(0, 0, 0, 0.10)",
  },
});

const sm = defineStyle({
  padding: "8px 16px",
  minHeight: "40px",
  maxHeight: "40px",
});

const md = defineStyle({
  padding: "12px 24px",
  minHeight: "48px",
  maxHeight: "48px",
});

const auto = defineStyle({});

export const buttonTheme = defineStyleConfig({
  variants: {
    outline,
    secondaryHero,
    primaryHero,
    solid,
    ghost,
    filter,
    filterActive,
    category,
    switch: switchButton,
    icon,
    rounded,
    gradient,
    unstyled,
    education,
  },
  sizes: {
    sm,
    md,
    auto,
  },
});
