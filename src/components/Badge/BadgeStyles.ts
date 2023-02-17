import { defineStyle, defineStyleConfig } from "src/libs/chakra-ui";

const engineering = defineStyle({
  background: "badge-engineering-bg",
  color: "badge-engineering-fg",
});
const community_calls = defineStyle({
  background: "badge-community-calls-bg",
  color: "badge-community-calls-fg",
});
const stark_math = defineStyle({
  background: "badge-stark-math-bg",
  color: "badge-stark-math-fg",
});
const stark_at_home = defineStyle({
  background: "badge-stark-math-bg",
  color: "badge-stark-math-fg",
});
const governance = defineStyle({
  background: "badge-governance-bg",
  color: "badge-governance-fg",
});
const community_and_events = defineStyle({
  background: "badge-community-and-events-bg",
  color: "badge-community-and-events-fg",
});
const stark_struct = defineStyle({
  background: "badge-starkstruck-bg",
  color: "badge-starkstruck-fg",
});
const foundation = defineStyle({
  background: "badge-starkstruck-bg",
  color: "badge-starkstruck-fg",
});
const ecosystem = defineStyle({
  background: "badge-starkstruck-bg",
  color: "badge-starkstruck-fg",
});
const github = defineStyle({
  background: "badge-starkstruck-bg",
  color: "badge-starkstruck-fg",
});
const blog = defineStyle({
  background: "badge-community-and-events-bg",
  color: "badge-community-and-events-fg",
});
const youtube = defineStyle({
  background: "badge-governance-bg",
  color: "badge-governance-fg",
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
    foundation,
    ecosystem,
    github,
    blog,
    youtube,
  },
});
