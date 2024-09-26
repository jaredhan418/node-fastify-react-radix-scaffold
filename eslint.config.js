//ts-check
import eslint from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import TsEslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["*rc.*js", "*.config.*js"],
  },
  eslint.configs.recommended,
  prettierPlugin,
  ...TsEslint.configs.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: { version: "detect" },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
