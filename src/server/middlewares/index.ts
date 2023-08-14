import express from "express";

import { session } from "./session/index.js";
import { assets } from "./assets/index.js";
import { api } from "./api/index.js";
import { requestLogger } from "./request-logger/index.js";

export async function middlewares() {
  const router = express.Router();

  router.use(express.json());

  router.use(session());

  router.use(requestLogger());

  router.use("/api", await api());

  router.use(assets());

  return router;
}
