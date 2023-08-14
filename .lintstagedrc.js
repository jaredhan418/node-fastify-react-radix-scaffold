/**
 * @type {import("lint-staged").Config}
 */
export default {
  "**/!(package-lock.json|*.@(?(sa|sc|c|le)ss)|*.@(?([cm])js)?(x)|*.@(?([cm])ts)?(x)": [
    "exec-if-exists prettier --write --ignore-unknown",
    "exec-if-exists sortier --ignore-unknown"
  ],
  "**/*.@(?(sa|sc|c|le)ss)": [
    "exec-if-exists stylelint --fix",
    "exec-if-exists prettier --write --ignore-unknown",
    "exec-if-exists sortier --ignore-unknown"
  ],
  "**/*.@(?([cm])js)?(x)": [
    "exec-if-exists eslint --fix",
    "exec-if-exists prettier --write --ignore-unknown",
    "exec-if-exists sortier --ignore-unknown"
  ],
  "**/*.@(?([cm])ts)?(x)": [
    "exec-if-exists eslint --fix",
    "exec-if-exists prettier --write --ignore-unknown",
    "exec-if-exists sortier --ignore-unknown"
  ],
}