import type { UserConfig } from "vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  plugins: [tsconfigPaths()],
  build: {
    outDir: 'dist/worker',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/worker/index.ts"),
      name: "worker",
      fileName: "worker",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        // src/worker/index.ts
        "vite-plugin-ssr/server",

        // src/worker/static-assets.ts
        "@cloudflare/kv-asset-handler",

        // src/api/index.ts
        "itty-router",
        "itty-router-extras",
        "itty-cors",
      ],
    },
  },
} as UserConfig;
