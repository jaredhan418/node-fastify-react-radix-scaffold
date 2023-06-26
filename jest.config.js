/**
 * @type { import("@jest/types").Config.InitialProjectOptions }
 */
const browser = {
  displayName: "Browser",
  id: "browser",
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  testMatch:  ["<rootDir>/src/browser/**/*.test.{js,jsx,ts,tsx}"],
}

/**
 * @type { import("@jest/types").Config.InitialProjectOptions }
 */
const server = {
  displayName: "Server",
  id: "server",
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  testMatch:  ["<rootDir>/src/server/**/*.test.{js,ts}"],
}

/**
 * @type { import("@jest/types").Config.InitialOptions }
 */
export default {
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,ts}",
    "!<rootDir>/src/**/*.test.{js,ts}"
  ],
  projects:[browser,server]
}