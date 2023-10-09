/**
 * @type {import("lint-staged").Config}
 */
export default {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write --ignore-unknown",
    "sortier --ignore-unknown",
  ],
};
