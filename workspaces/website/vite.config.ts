import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import type { UserConfig } from "vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  publicDir: path.resolve(__dirname, "../../public"),
  plugins: [tsconfigPaths(), react(), ssr()],
  build: {
    emptyOutDir: true,
  },
  ssr: {
    noExternal: [
      "react-countdown-circle-timer",
      "react-share",
      "react-use",
      "react-icons",
      "@algolia/autocomplete-js",
      "@algolia/autocomplete-core",
      "@algolia/autocomplete-plugin-algolia-insights",
      "@algolia/autocomplete-plugin-recent-searches",
      "@algolia/autocomplete-plugin-query-suggestions",
      "@algolia/autocomplete-shared",
      "@algolia/autocomplete-preset-algolia",
    ],
  },
} as UserConfig;
