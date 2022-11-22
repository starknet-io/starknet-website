const colorVariable = require("@mertasan/tailwindcss-variables/colorVariable");

const variablePrefix = "starknet-colors";

const colors = {
  navbar: "white",
};

const darkColors = {
  navbar: "rgb(31, 41, 55)",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: getDynamicColors(colors),
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
      variablePrefix,
      colorVariables: true,
      forceRGB: true,
      darkToRoot: false,
    }),
    require("@tailwindcss/forms"),
  ],
};

function getDynamicColors(colors) {
  const keys = Object.keys(colors);
  const entries = keys.map((key) => {
    return [key, colorVariable(`var(--${variablePrefix}-${key})`, true)];
  });

  return Object.fromEntries(entries);
}
