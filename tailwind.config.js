const colorVariable = require("@mertasan/tailwindcss-variables/colorVariable");

const colors = {
  navbar: "white",
};

const darkColors = {
  ...colors,
  navbar: "rgb(31, 41, 55)",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: Object.fromEntries(
        Object.keys(colors).map((key) => [
          key,
          colorVariable(`var(--starknet-colors-${key})`, true),
        ]),
      ),
    },
    variables: {
      DEFAULT: colors,
    },
    darkVariables: {
      DEFAULT: darkColors,
    },
  },
  plugins: [
    require("@mertasan/tailwindcss-variables")({
      variablePrefix: "starknet-colors",
      colorVariables: true,
      forceRGB: true,
      darkToRoot: false,
    }),
    require("@tailwindcss/forms"),
  ],
};
