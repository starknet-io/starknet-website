import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  publicDir: path.resolve(__dirname, "../../public"),
  plugins: [tsconfigPaths(), react()],
} as UserConfig;
