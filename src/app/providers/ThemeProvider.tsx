"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../../style/theme";
import "@fontsource/inter/variable.css";
import "@fontsource/noto-sans-hebrew/hebrew.css";
import "@fontsource/tajawal/arabic.css";
import "@fontsource/noto-sans-jp/japanese.css";
import "@fontsource/noto-sans-sc/chinese-simplified.css";
import "@fontsource/noto-sans-tc/chinese-traditional.css";

export function ThemeProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
