import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const developers = defineStyle({
  background: "badge-engineering-bg",
  color: "badge-engineering-fg",
});
const community_calls = defineStyle({
  background: "badge-community-calls-bg",
  color: "badge-community-calls-fg",
});
const tutorials_and_guides = defineStyle({
  background: "badge-tutorials-and-guides-bg",
  color: "badge-tutorials-and-guides-fg",
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
const stark_struck_podcast = defineStyle({
  background: "badge-starkstruck-bg",
  color: "badge-starkstruck-fg",
});
const foundation = defineStyle({
  background: "badge-starkstruck-bg",
  color: "badge-foundation-fg",
});
const ecosystem = defineStyle({
  background: "badge-starkstruck-bg",
  color: "badge-foundation-fg",
});
const github = defineStyle({
  background: "badge-starkstruck-bg",
  color: "badge-foundation-fg",
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
  baseStyle: {
    paddingLeft: "12px",
    paddingRight: "12px",
    borderRadius: "12px",
    color: "badge-starkstruck-fg",
  },
  variants: {
    developers,
    community_calls,
    tutorials_and_guides,
    stark_math,
    stark_struck_podcast,
    stark_at_home,
    governance,
    community_and_events,
    events_and_webinars: community_and_events,
    foundation,
    ecosystem,
    github,
    blog,
    youtube,
  },
});
