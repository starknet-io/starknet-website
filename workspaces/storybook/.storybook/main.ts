export default {
  stories: [
    "../../website/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
    "storybook-addon-dark-mode-toggle"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: { emotionAlias: false },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../../../public']
};
