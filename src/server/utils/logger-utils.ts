import type { FastifyServerOptions } from "fastify";

import { getHostingEnv } from "./index.js";

export function getLoggerOptions(): FastifyServerOptions["logger"] {
  if (getHostingEnv() === "Localhost") {
    return {
      transport: {
        options: {
          ignore: "pid,hostname",
          translateTime: "HH:MM:ss Z",
        },
        target: "pino-pretty",
      },
    };
  } else {
    return true;
  }
}
