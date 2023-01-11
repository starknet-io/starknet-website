"use client";
import { ButtonStyles as Button } from "../components/Button/ButtonStyles";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import { extendTheme } from "@chakra-ui/react";
import { badgeTheme } from "../components/Badge/BadgeStyles";
import { tagTheme } from "../components/Tag/TagStyles";
// import { ButtonStyles as Button } from '../components/Button';
// import type { StyleFunctionProps } from '@chakra-ui/styled-system';
// 2. Add your color mode config
// const config: ThemeConfig = {
//   initialColorMode: 'light',
//   useSystemColorMode: true,
// };

// 3. extend the theme
// const theme = extendTheme({ config });

const theme = extendTheme(proTheme, {
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
