import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

export default defineConfig({
  build: {
    outDir: `${__dirname}/dist/browser`,
    rollupOptions: {
      treeshake: "safest",
    },
  },
  plugins: [react()],
  root: "./src/browser",
  server: {
    host: true,
    port: 8081,
  },
});
