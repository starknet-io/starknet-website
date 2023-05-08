import { ChakraProvider } from "@chakra-ui/react";
import theme from "@starknet-io/website/src/style/theme";
import { PageContextProvider } from "@starknet-io/website/src/renderer/usePageContext";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <PageContextProvider
        // @ts-expect-error
        pageContext={{ locale: "en" }}
      >
        <Story />
      </PageContextProvider>
    </ChakraProvider>
  ),
];
