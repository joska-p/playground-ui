/// <reference types="vitest" />
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

const ReactCompilerConfig = {
  /* ... */
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
    tsconfigPaths(),
    dts({ rollupTypes: true }),
  ],
  build: {
    // library entry and output settings
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "playground-ui",
      fileName: "playground-ui",
    },
    // bundler options
    // externalize react-related imports
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./lib/test/setup.ts",
    css: true,
  },
});
