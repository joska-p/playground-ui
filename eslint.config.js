import reactConfig from "@jpotin/my-eslint-config/reactConfig";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  reactConfig,
  { ignores: ["dist", "node_modules", "storybook-static"] },
  {
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "no-unused-vars": "off", // handled by tsc
    },
  }
);
