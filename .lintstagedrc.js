/**
 * @type {import("lint-staged").Config}
 */
export default {
  "*.{js,jsx,ts,tsx}": [
    "oxlint --fix",
    "prettier --write --ignore-unknown",
    "sortier --ignore-unknown",
  ],
};
