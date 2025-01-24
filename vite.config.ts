/// <reference types="vitest" />
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
//import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

const ReactCompilerConfig = {
  target: "19",
};

// https://vite.dev/config/
export default defineConfig({
  build: {
    // library entry and output settings
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "Playground-ui",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          tailwindcss: "tailwindcss",
        },
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
    dts({ rollupTypes: true }),
    //cssInjectedByJsPlugin(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./lib/setupTest.ts",
    css: true,
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["lib/**/*.{ts,tsx}"],
      exclude: ["lib/**/*.stories.{ts,tsx}", "lib/**/*.test.{ts,tsx}", "lib/main.ts"],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "lib"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
