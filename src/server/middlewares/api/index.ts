import express from "express";

import { initOpenAPI } from "./openapi/init.js";

export async function api() {
  const router = express.Router();

  // healthy check
  router.get("/", (req, res) => res.sendStatus(204));

  const openapi = await initOpenAPI();

  router.all("/*", openapi);

  return [router];
}
