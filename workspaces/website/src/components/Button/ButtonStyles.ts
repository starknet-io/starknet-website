import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

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

const ghost = defineStyle({
  borderRadius: 4,
  fontWeight: "medium",
  fontSize: "14px",
  color: "grey.darkText",
  borderColor: "transparent",
  borderWidth: "1px",
  bg: "transparent",
  minWidth: "none",
  minHeight: 42,
  lineHeight: "100%",
  height: "auto",
  padding: "8px 16px",
  "& svg path": {
    fill: "grey.morning"
  },
  _hover: {
    bg: "transparent",
    "& svg path": {
      fill: "selected.main"
    },
    _dark: {
      color: "white",
      borderColor: "transparent",
      bg: "black"
    }
  },
  _active: {
    bg: "transparent",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    outlineWidth: 1,
    color: "grey.greyDusk",
    borderWidth: "1px",
    borderColor: "transparent",
    "& svg path": {
      fill: "grey.greyDusk"
    },
    _focus: {
      bg: "transparent",
      color: "grey.greyDusk",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      outlineWidth: 1,
      borderWidth: "1px",
      borderColor: "transparent",
      "& svg path": {
        fill: "grey.greyDusk"
      },
    },
    _dark: {
      bg: "black",
      color: "btn-outline-active-fg",
      borderColor: "black",
      outlineWidth: 1,
      _focus: {
        bg: "black",
        color: "btn-outline-active-fg",
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

const gradient = defineStyle({
  borderRadius: 8,
  fontWeight: 600,
  fontSize: "16px",
  minWidth: "none",
  lineHeight: "24px",
  height: "auto",
  color: "bg.200",
  padding: "12px 24px",
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

const outline = defineStyle({
  borderRadius: 4,
  fontWeight: "medium",
  fontSize: "16px",
  paddingLeft: "40px",
  paddingRight: "40px",
  color: "grey.darkText",
  borderColor: "grey.morning",
  bg: "transparent",
  minWidth: "none",
  lineHeight: "24px",
  height: "auto",
  padding: "12px 24px",
  _hover: {
    bg: "transparent",
    color: "btn-outline-hover-fg",
    borderColor: "grey.morning",
    _dark: {
      color: "selected.100"
    },
  },
  _active: {
    bg: "bg.200",
    color: "grey.greyDusk",
    borderColor: "grey.morning",
    borderWidth: "1px",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    outlineWidth: 1,
    _focus: {
      bg: "bg.200",
      color: "grey.greyDusk",
      borderColor: "grey.morning",
      borderWidth: "1px",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      outlineWidth: 1
    },
    _dark: {
      bg: "black",
      color: "grey.greyDusk",
      borderColor: "grey.greyDusk",
      outlineWidth: 1,
      _focus: {
        bg: "black",
        color: "grey.greyDusk",
        borderColor: "grey.greyDusk",
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
    border: "1px solid grey.greyDusk",
    color: "white"
  }
});

const outlineFull = defineStyle({
  borderRadius: 4,
  fontWeight: "medium",
  fontSize: "16px",
  color: "btn-primary-bgg",
  borderColor: "btn-primary-bg",
  borderWidth: "1px",
  bg: "bg-default",
  minWidth: "none",
  lineHeight: "24px",
  height: "auto",
  padding: "12px 40px",
  _hover: {
    color: "btn-outline-hover-fg",
    borderColor: "grey.morning",
    _dark: {
      color: "selected.100"
    },
  },
  _active: {
    bg: "bg.200",
    color: "grey.greyDusk",
    borderColor: "grey.morning",
    borderWidth: "1px",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    outlineWidth: 1,
    _focus: {
      bg: "bg.200",
      color: "grey.greyDusk",
      borderColor: "grey.morning",
      borderWidth: "1px",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      outlineWidth: 1
    },
    _dark: {
      bg: "black",
      color: "grey.greyDusk",
      borderColor: "grey.greyDusk",
      outlineWidth: 1,
      _focus: {
        bg: "black",
        color: "grey.greyDusk",
        borderColor: "grey.greyDusk",
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
    border: "1px solid grey.greyDusk",
    color: "white"
  }
});

const outlineLight = defineStyle({
  borderRadius: 4,
  fontWeight: "medium",
  fontSize: "14px",
  color: "grey.coolerText",
  borderColor: "grey.line",
  borderWidth: "1px",
  bg: "transparent",
  minWidth: "none",
  lineHeight: "16px",
  height: "auto",
  padding: "16px 40px",
  _hover: {
    bg: "transparent",
    color: "btn-outline-hover-fg",
    borderColor: "selected.main",
    _dark: {
      color: "selected.100",
      borderColor: "selected.200"
    }
  },
  _active: {
    bg: "grey.line",
    color: "grey.coolerText",
    borderColor: "grey.line",
    borderWidth: "1px",
    boxShadow: "inset 0px 8px 0px rgba(0, 0, 0, 0.14)",
    outlineWidth: 1,
    _focus: {
      bg: "grey.line",
      color: "grey.coolerText",
      borderColor: "grey.line",
      borderWidth: "1px",
      boxShadow: "inset 0px 8px 0px rgba(0, 0, 0, 0.14)",
      outlineWidth: 1
    },
    _dark: {
      bg: "black",
      color: "btn-outline-active-fg",
      borderColor: "black",
      outlineWidth: 1,
      _focus: {
        bg: "black",
        color: "btn-outline-active-fg",
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
    border: "1px solid grey.greyDusk",
    color: "white"
  }
});

const outlineRounded = defineStyle({
  borderRadius: 24,
  fontWeight: "medium",
  fontSize: "14px",
  color: "grey.coolerText",
  borderColor: "grey.line",
  borderWidth: "1px",
  bg: "transparent",
  minWidth: "none",
  lineHeight: "16px",
  height: "auto",
  padding: "16px 40px",
  _hover: {
    bg: "transparent",
    color: "btn-outline-hover-fg",
    borderColor: "selected.main",
    _dark: {
      color: "selected.100",
      borderColor: "selected.200"
    }
  },
  _active: {
    bg: "grey.line",
    color: "grey.coolerText",
    borderColor: "grey.line",
    borderWidth: "1px",
    boxShadow: "inset 0px 8px 0px rgba(0, 0, 0, 0.14)",
    outlineWidth: 1,
    _focus: {
      bg: "grey.line",
      color: "grey.coolerText",
      borderColor: "grey.line",
      borderWidth: "1px",
      boxShadow: "inset 0px 8px 0px rgba(0, 0, 0, 0.14)",
      outlineWidth: 1
    },
    _dark: {
      bg: "black",
      color: "btn-outline-active-fg",
      borderColor: "black",
      outlineWidth: 1,
      _focus: {
        bg: "black",
        color: "btn-outline-active-fg",
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
    border: "1px solid grey.greyDusk",
    color: "white"
  }
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

const solid = defineStyle({
  borderRadius: 4,
  fontWeight: "medium",
  fontSize: "16px",
  minWidth: "none",
  lineHeight: "24px",
  height: "auto",
  padding: "12px 24px",
  color: "white",
  bg: "btn-primary-bg",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "btn-primary-bg",
  _hover: {
    bg: "btn-primary-hover-bg",
    color: "btn-primary-hover-fg",
    _dark: {
      bg: "bg.main",
      color: "grey.darkText",
    },
  },
  _active: {
    bg: "btn-primary-active-bg",
    color: "btn-primary-active-fg",
    outlineWidth: 1,
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
    bg: "white",
    color: "grey.darkText",
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

const categoryVertical = defineStyle({
  cursor: "pointer",
  borderRadius: 0,
  fontWeight: "medium",
  fontSize: "14px",
  lineHeight: "14px",
  padding: "26px 12px",
  color: "tabs-fg",
  borderLeftWidth: "1px",
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


const smallFilter = defineStyle({
  borderRadius: '8px',
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "12px",
  padding: "10px 12px",
  color: "btn-filter-fg",
  bg: "btn-filter-bg",
  _hover: {
    bg: "btn-filter-hover-bg",
    color: "btn-filter-hover-fg",
  }
});

const smallFilterActive = defineStyle({
  borderRadius: '8px',
  fontWeight: "medium",
  fontSize: "12px",
  lineHeight: "12px",
  padding: "10px 12px",
  bg: "btn-primary-bg",
  color: "btn-filter-active-fg",
  opacity: 0.72,
  _hover: {
    bg: "btn-filter-active-hover-bg",
    color: "btn-filter-active-hover-fg",
  },
  _dark: {
    opacity: 1,
    bg: '#70AAFF'
  }
});

export const buttonTheme = defineStyleConfig({
  variants: {
    category,
    filter,
    filterActive,
    ghost,
    gradient,
    icon,
    outline,
    outlineFull,
    outlineLight,
    outlineRounded,
    primaryHero,
    secondaryHero,
    solid,
    smallFilter,
    smallFilterActive,
    categoryVertical,
    switch: switchButton
  },
});
