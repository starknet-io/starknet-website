import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  borderRadius: 8,
  fontWeight: "medium",
  fontSize: "16px",
  color: "btn-outline-hover-fg",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "btn-outline-hover-fg",
  minWidth: "none",
  lineHeight: "24px",
  height: "auto",
  borderImage: "none",
  bg: "linear-gradient(white, white) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
  _dark: {
    bg: "linear-gradient(#0B0B0B, #0B0B0B) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
  },
  "&:disabled": {
    color: 'btn-outline-disabled-fg',
    borderColor: 'btn-outline-disabled-border',
    borderImage: "none"
  },
  _focusVisible: {
    boxShadow: "none",
    outlineOffset: 1,
    outline: "3px solid #3f8cff",
    _dark: {
      outlineOffset: 0
    }
  },
  _hover: {
    borderImage: "linear-gradient(119deg, #EC796B 0%, #D672EF 100%)",
    bg: "linear-gradient(#eae9eb, #eae9eb) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    _dark: {
      bg: "linear-gradient(#28282c, #28282c) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box"
    }
  },
  _active: {
    borderImage: "linear-gradient(119deg, #EC796B 0%, #D672EF 100%)",
    bg: "linear-gradient(#eae9eb, #eae9eb) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    outlineWidth: 1,
    _focus: {
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      outlineWidth: 1
    },
    _dark: {
      boxShadow: "0px 6px 0px 0px rgba(17, 17, 17, 0.24) inset",
      bg: "linear-gradient(#28282c, #28282c) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
      outlineWidth: 1,
      _focus: {
        outlineWidth: 1
      }
    }
  },
  _focus: {
    boxShadow: "none",
    borderColor: "selected.main",
    _dark: {
      boxShadow: "none",
      borderColor: "selected.100",
      borderWidth: "1px",
      borderStyle: "solid"
    }
  },
});

const rounded = defineStyle({
  borderRadius: 999,
  fontWeight: "medium",
  fontSize: "16px",
  color: "btn-outline-hover-fg",
  borderWidth: 1,
  borderStyle: "solid",
  minWidth: "none",
  lineHeight: "24px",
  height: "auto",
  bg: "btn-rounded-bg",
  borderColor: "btn-rounded-border-color",
  "&:disabled": {
    color: 'btn-outline-disabled-fg',
    borderColor: 'btn-outline-disabled-border',
    borderImage: "none"
  },
  _focusVisible: {
    boxShadow: "none",
    outlineOffset: 1,
    outline: "3px solid #3f8cff",
    borderColor: "white",
    _dark: {
      outlineOffset: 0
    }
  },
  _hover: {
    borderImage: "linear-gradient(119deg, #EC796B 0%, #D672EF 100%)",
    bg: "linear-gradient(#eae9eb, #eae9eb) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    _dark: {
      bg: "linear-gradient(#28282c, #28282c) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box"
    }
  },
  _active: {
    borderImage: "linear-gradient(119deg, #EC796B 0%, #D672EF 100%)",
    bg: "linear-gradient(#eae9eb, #eae9eb) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1) !important",
    outlineWidth: 1,
    _focus: {
      borderColor: "white",
      outlineWidth: 1
    },
    _dark: {
      boxShadow: "0px 6px 0px 0px rgba(17, 17, 17, 0.24) inset",
      bg: "linear-gradient(#28282c, #28282c) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
      outlineWidth: 1,
      _focus: {
        outlineWidth: 1
      }
    }
  },
  _focus: {
    boxShadow: "none",
    borderColor: "selected.main",
    _dark: {
      boxShadow: "none",
      borderColor: "selected.100",
      borderWidth: "1px",
      borderStyle: "solid"
    }
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
  border: "1px solid transparent",
  bg: "transparent",
  "&:disabled": {
    color: 'btn-outline-disabled-fg',
  },
  _focusVisible: {
    boxShadow: "none",
    outlineOffset: 1,
    outline: "3px solid #3f8cff",
    _dark: {
      outlineOffset: 0,
      border: "1px solid #ffffff"
    }
  },
  _hover: {
    bg: "#eae9eb",
    color: "btn-ghost-hover-fg",
    _dark: {
      bg: "#28282c"
    }
  },
  _active: {
    bg: "#eae9eb",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    outlineWidth: 1,
    _focus: {
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      outlineWidth: 1
    },
    _dark: {
      outlineWidth: 1,
      _focus: {
        outlineWidth: 1
      }
    }
  },
  _focus: {
    boxShadow: "none",
    _dark: {
      boxShadow: "none",
    }
  }
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
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "transparent",
  "&:disabled": {
    background: 'btn-primary-disabled-bg',
    color: 'btn-primary-disabled-fg',
    border: "transparent"
  },
  _hover: {
    bg: "btn-primary-hover-bg",
    _dark: {
      bg: "bg.main",
      borderColor: "transparent",
    },
  },
  _active: {
    bg: "btn-primary-active-bg",
    boxShadow: "0px 6px 0px 0px rgba(17, 17, 17, 0.24) inset !important",
    outlineWidth: 1,
    outlineOffset: 1,
    borderColor: "transparent",
    _dark: {
      bg: "grey.morning",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      borderColor: "transparent",
      _focus: {
        bg: "grey.morning",
        boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
        borderColor: "transparent",
      }
    },
  },
  _dark: {
    bg: "white",
    borderColor: "transparent",
  },
  _focusVisible: {
    outlineOffset: 1,
    borderColor: "transparent",
  },
  _focus: {
    boxShadow: "0px 0px 0px 3px #3F8CFF, 0px 0px 0px 1px #FFFFFF",
    borderColor: "transparent",
    borderWidth: "1px",
    borderStyle: "solid",
    _dark: {
      boxShadow: "none",
      borderColor: "transparent",
      borderWidth: "1px",
      borderStyle: "solid"
    }
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
      borderColor: "selected.main"
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
        borderColor: "transparent"
      }
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
      borderStyle: "solid"
    }
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
      borderColor: "selected.main"
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
        borderColor: "selected.100"
      }
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
      borderStyle: "solid"
    }
  },
});

const switchButton = defineStyle({
  height: "auto",
  padding: "11px",
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
      }
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
      borderStyle: "solid"
    }
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

const icon = defineStyle({
  height: "auto",
  padding: "11px",
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
      borderColor: "transparent"
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
        outlineWidth: 1
      }
    }
  },
  _focus: {
    boxShadow: "none",
    borderColor: "selected.main",
    _dark: {
      boxShadow: "none",
      borderColor: "selected.100",
      borderWidth: "1px",
      borderStyle: "solid"
    }
  },
  _dark: {
    borderColor: "transparent",
    color: "white"
  }
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
    rounded
  },
  sizes: {
    sm,
    md
  }
});
