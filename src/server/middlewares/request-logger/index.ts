import { pinoHttp } from "pino-http";
import type { PinoPretty } from "pino-pretty";

import { getHostingEnv } from "../../utils/index.js";

let prettyStream: undefined | PinoPretty.PrettyStream;

if (getHostingEnv() === "Localhost") {
  const pretty = await import("pino-pretty");
  // @ts-expect-error pretty not offer correct type define
  prettyStream = pretty.default({
    colorize: true,
  });
}

export function requestLogger() {
  return prettyStream ? pinoHttp(prettyStream) : pinoHttp();
}
