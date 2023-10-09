import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  // you can use a list of glob patterns to define your workspaces
  // Vitest expects a list of config files
  // or directories where there is a config file
  "src/*",
  // you can even run the same tests,
  // but with different configs in the same "vitest" process
  {
    extends: "./vite.config.ts",
    test: {
      environment: "happy-dom",
      globals: true,
      include: ["src/browser/**/*.test.{js,jsx,ts,tsx}"],
      name: "browser",
      root: "./",
    },
  },
  {
    extends: "./vite.config.ts",
    test: {
      environment: "node",
      include: ["src/server/**/*.test.{js,jsx,ts,tsx}"],
      name: "node",
      root: "./",
    },
  },
]);
