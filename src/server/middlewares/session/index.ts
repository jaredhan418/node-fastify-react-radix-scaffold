import RedisStore from "connect-redis";
import epxressSession from "express-session";
import { Redis } from "ioredis";

import { getHostingEnv } from "../../utils/index.js";

const TWELVE_HOURS_IN_MS = 1000 * 60 * 60 * 12;

const redisConfig = {
  db: 1,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
};

export function session() {
  const redis = new Redis(redisConfig);

  return epxressSession({
    cookie: {
      httpOnly: true,
      maxAge: TWELVE_HOURS_IN_MS,
      sameSite: getHostingEnv() === "Localhost" ? "none" : "lax",
      secure: getHostingEnv() !== "Localhost",
    },
    name: "sessionid",
    resave: false,
    secret: "sessionsecret",
    store: new RedisStore({ client: redis }),
  });
}
