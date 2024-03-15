import { semanticTokens } from "./tokens";
import { styles } from "./global-styles";
import { buttonTheme as Button } from "../components/Button/ButtonStyles";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import { extendTheme } from "@chakra-ui/react";
import { badgeTheme } from "../components/Badge/BadgeStyles";
import { tagTheme } from "../components/Tag/TagStyles";
import { accordionTheme } from "@ui/Accordion/Accordion";
import { inputTheme } from "@ui/Input/Input";
import { kbdTheme } from "@ui/Kbd/Kbd";
import { dividerTheme } from "@ui/Divider/Divider";
import { avatarTheme } from "@ui/Avatar/Avatar";
import { linkTheme } from "@ui/Link/Link";
import { headingTheme } from "../components/Typography/HeadingStyles";
import { textTheme } from "../components/Typography/TextStyles";
import { alertTheme } from "../components/Alert/AlertStyles";

const theme = extendTheme(proTheme, {
  styles,
  semanticTokens,
  colors: {
    brand: {
      primary: "#888",
      secondary: "cyan",
      navy: "navy",
      orange: "orange",
      red: "#444",
    },
    offWhite: "#EAEFEE",
    sea: {
      100: "#80DCDA",
      200: "#6DDAF5",
      300: "#4B9EDA",
      400: "#261F63"
    },
    orange: {
      sunfade: "#FF7E6D",
      fanta: "#FF6450"
    },
    yellowSunfade: "#FFCD9A",
    bg: {
      main: "#F6F6F6",
      200: "#FBFBFB"
    },
    grey: {
      morning: "#CCCCCC",
      line: "#EFEFEF",
      greyDusk: "#7E7E7E",
      coolerText: "#6B7280",
      coolText: "#6B7280",
      darkText: "#363636",
      lineOnDark: "#313131"
    },
    darkMode: {
      card: "#1B1B1B",
      bg2: "#0B0B0B",
      navGrey: "#121212"
    },
    snNavy: "#0C0C4F",
    selected: {
      main: "#5C94FF",
      100: "#AFCAFF",
      200: "#9EBFFF",
      300: "#B2CDFF"
    },
    notify: {
      dark: "#172726",
      green1: "#EFFBFA",
      green2: "#C4E2E0"
    },
    note: {
      dark: "#171C27",
      main: "#4B9EDA",
      100: "#EBF2FF",
      200: "#DEE3ED"
    },
    important: {
      dark: "#231F1A",
      100: "#FFF5EB",
      200: "#E9E1DA"
    },
    warning: {
      dark: "#231B1A",
      100: "#FFEDEB",
      200: "#E7D5D4"
    }
  },
  components: {
    Accordion: accordionTheme,
    Avatar: avatarTheme,
    Input: inputTheme,
    Drawer: {
      parts: ["dialog", "header", "body"],
      variants: {
        primary: {
          dialog: {
            background: "nav-dialog-bg",
          },
          header: {
            background: "nav-header-bg",
          },
        },
      },
    },
    Button,
    Badge: badgeTheme,
    Kbd: kbdTheme,
    Divider: dividerTheme,
    Tag: tagTheme,
    Link: linkTheme,
    Heading: {
      baseStyle: {
        fontWeight: "300"
      },
      variants: {
        ...headingTheme
      },
      sizes: null},
    Text: textTheme,
    Alert: alertTheme
  },
  fonts: {
    heading: "Inter, sans-serif",
  },
  fontSizes: {
    "h1": "5rem",
    "h2": "3rem",
    "h3": "1.5rem",
    "h4": "1.125rem",
    "h5": "1rem",
    "h6": "0.875rem",
  },
  lineHeights: {
    "h1": "100%",
    "h2": "3.625rem",
    "h3": "100%",
    "h4": "1.375rem",
    "h5": "1.188rem",
    "h6": "1.063rem",
    "heading6": "1.063rem",
  },
  breakpoints: {
    xs: "24em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em"
  },

});
export default theme;
