"use client";
import { semanticTokens } from "./tokens";
import { styles } from "./global-styles";
import { buttonTheme as Button } from "../components/Button/ButtonStyles";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import { extendTheme } from "@chakra-ui/react";
import { badgeTheme } from "../components/Badge/BadgeStyles";
import { tagTheme } from "../components/Tag/TagStyles";
import { accordionTheme } from "@ui/Accordion/Accordion";

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
  },
  components: {
    Accordion: accordionTheme,
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
    tag: tagTheme,
  },
});
export default theme;
