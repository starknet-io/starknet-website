/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.ts"],
    include: ["./src/**/*.{test,spec}.{ts,tsx}"],
    includeSource: ["src/**/*.{ts,tsx}"],
    watchExclude: [
      ".*\\/node_modules\\/.*",
      ".*\\/build\\/.*",
      ".*\\/\\.netlify\\/.*",
      ".*\\/\\.cache\\/.*",
    ],
  },
});
