import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          environment: "happy-dom",
          globals: true,
          include: ["src/browser/**/*.test.{js,jsx,ts,tsx}"],
          name: "browser",
          root: "./",
        },
      },
      {
        test: {
          environment: "node",
          include: ["src/server/**/*.test.{js,jsx,ts,tsx}"],
          name: "node",
          root: "./",
        },
      },
    ],
  },
});
