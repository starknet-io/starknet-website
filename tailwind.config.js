const colorVariable = require("@mertasan/tailwindcss-variables/colorVariable");

const variablePrefix = "starknet-colors";

const colors = {
  body: "#fff",
  bodyText: "#111",
  focus: "#FA1777",
  navbar: "#fff",
  tabsTrigger: "#ccc",
  primary: "#444",
  buttonPrimary: "#444",
  buttonPrimaryText: "#fff",
  buttonPrimaryHover: "#444",
  buttonDefault: "#eee",
  buttonDefaultText: "#444",
  buttonDefaultHover: "#ccc",
  buttonDestructive: "#ff0000",
  buttonDestructiveText: "#fff",
  buttonDestructiveHover: "#ff4444",
  selectButton: "#fff",
  selectButtonHover: "#eee",
  toolTip: "#444",
  toolTipText: "#fff",
};

const darkColors = {
  body: "#fff",
  bodyText: "#444",
  focus: "#FA1777",
  navbar: "#fff",
  tabsTrigger: "#444",
  primary: "#338998",
  buttonPrimary: "#338998",
  buttonPrimaryText: "#fff",
  buttonPrimaryHover: "#338990",
  buttonDefault: "#fff",
  buttonDefaultText: "#222",
  buttonDefaultHover: "#ccc",
  buttonDestructive: "#ff4444",
  buttonDestructiveText: "#fff",
  buttonDestructiveHover: "#ff0000",
  selectButton: "#444",
  selectButtonHover: "#555",
  toolTip: "#111",
  toolTipText: "#fff",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xsmall: "0.6rem",
      small: "0.8rem",
      base: "1rem",
      medium: "1.25rem",
      large: "1.5rem",
      xlarge: "1.75rem",
    },
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
    require("@tailwindcss/typography"),
    require("tailwindcss-radix")(),
  ],
};

function getDynamicColors(colors) {
  const keys = Object.keys(colors);
  const entries = keys.map((key) => {
    return [key, colorVariable(`var(--${variablePrefix}-${key})`, true)];
  });

  return Object.fromEntries(entries);
}
