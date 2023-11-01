import atImport from "postcss-import";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    atImport(),
    tailwindcss,
    autoprefixer
  ]
}