import type { FastifySessionOptions } from "@fastify/session";
import { RedisStore } from "connect-redis";
import { Redis } from "ioredis";

import {
  getHostingEnv,
  getSessionId,
  getSessionSecret,
} from "../../utils/index.js";

const TWELVE_HOURS_IN_MS = 1000 * 60 * 60 * 12;

const redisConfig = {
  db: 1,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
};

export function sessionConfig(): FastifySessionOptions {
  // const redis = new Redis(redisConfig);

  return {
    cookie: {
      httpOnly: true,
      maxAge: TWELVE_HOURS_IN_MS,
      sameSite: getHostingEnv() === "Localhost" ? "none" : "lax",
      secure: getHostingEnv() !== "Localhost",
    },
    cookieName: getSessionId(),
    rolling: false,
    saveUninitialized: false,
    secret: getSessionSecret(),
    // store: new RedisStore({ client: redis }),
  };
}
