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
} as UserConfig;
