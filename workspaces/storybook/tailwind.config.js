const config = require("../../tailwind.config.js");

module.exports = {
  ...config,
  content: ["./src/**/*.{ts,tsx,mdx}", "../../src/**/*.{ts,tsx,mdx}"],
};
