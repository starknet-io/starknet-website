import React from "react";
import { Stack } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { Alert } from "./Alert";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import theme from "src/style/theme";
import { ChakraProvider } from "@chakra-ui/react"

export default {
  title: "starknet.io/Alert",
  component: Alert,
  decorators: [
    (Story: React.ComponentType) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ]
} as Meta<typeof Alert>;

export const Important = () => (
  <ThemeProvider>
    <Stack direction={'column'} spacing='24px'>
      <>
        <Alert variant="important" title="Alert:" body="Important alert" />
      </>
    </Stack>
  </ThemeProvider>
);

export const Warning = () => (
  <ThemeProvider>
    <Stack direction={'column'} spacing='24px'>
      <>
        <Alert variant="warning" title="Information:" body="Warning alert"/>
      </>
    </Stack>
  </ThemeProvider>
);

export const GeneralInfo = () => (
  <ThemeProvider>
    <Stack direction={'column'} spacing='24px'>
      <>
        <Alert variant="info" title="Information:" body="This is where you would add some informative copy for the user, links look <a target='_blank' rel='noreferrer' href='https://google.com'>like this.</a>" />
      </>
    </Stack>
  </ThemeProvider>
);
