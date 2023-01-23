import { defineStyle, defineStyleConfig } from "src/libs/chakra-ui";

const engineering = defineStyle({
  background: "#ff0000",
  color: "white",

  // let's also provide dark mode alternatives
  _dark: {
    background: "orange.300",
    color: "orange.800",
  },
});
const community_calls = defineStyle({
  background: "orange.900",
  color: "white",

  // let's also provide dark mode alternatives
  _dark: {
    background: "orange.300",
    color: "orange.800",
  },
});
const stark_math = defineStyle({
  background: "orange.400",
  color: "white",

  // let's also provide dark mode alternatives
  _dark: {
    background: "orange.300",
    color: "orange.800",
  },
});
const stark_at_home = defineStyle({
  background: "orange.400",
  color: "white",

  // let's also provide dark mode alternatives
  _dark: {
    background: "orange.300",
    color: "orange.800",
  },
});
const governance = defineStyle({
  background: "orange.400",
  color: "white",

  // let's also provide dark mode alternatives
  _dark: {
    background: "orange.300",
    color: "orange.800",
  },
});
const community_and_events = defineStyle({
  background: "orange.400",
  color: "white",

  // let's also provide dark mode alternatives
  _dark: {
    background: "orange.300",
    color: "orange.800",
  },
});
const stark_struct = defineStyle({
  background: "orange.400",
  color: "white",

  // let's also provide dark mode alternatives
  _dark: {
    background: "orange.300",
    color: "orange.800",
  },
});

export const badgeTheme = defineStyleConfig({
  variants: {
    engineering,
    community_calls,
    stark_math,
    stark_struct,
    stark_at_home,
    governance,
    community_and_events,
  },
});
