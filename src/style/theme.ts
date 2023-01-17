"use client";
import { semanticTokens } from "./tokens";
import { styles } from "./global-styles";
import { ButtonStyles as Button } from "../components/Button/ButtonStyles";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import { extendTheme } from "@chakra-ui/react";
import { badgeTheme } from "../components/Badge/BadgeStyles";
import { tagTheme } from "../components/Tag/TagStyles";

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
    Button,
    Badge: badgeTheme,
    tag: tagTheme,
  },
});
export default theme;
