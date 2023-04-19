const path = require("path");
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
    "storybook-addon-dark-mode-toggle"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: { emotionAlias: false },

  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../public']
};
