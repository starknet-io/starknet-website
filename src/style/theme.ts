"use client";
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
import { iconButtonTheme } from "@ui/IconButton/IconButton";

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
    Avatar: avatarTheme,
    Input: inputTheme,
    IconButton: iconButtonTheme,
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
  },
});
export default theme;
