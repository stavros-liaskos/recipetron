import { coverageConfigDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        "*.config.*",
        "**/_app.tsx",
        "_document.tsx",
      ],
      thresholds: {
        statements: 98.78,
        branches: 86.36,
        functions: 100,
        lines: 98.78,
      },
    },
  },
});
