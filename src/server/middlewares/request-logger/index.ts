import PinoHttp from "pino-http";
import type { PinoPretty } from "pino-pretty";

import { getHostingEnv } from "../../utils/index.js";

let prettyStream: undefined | PinoPretty.PrettyStream;

if (getHostingEnv() === "Localhost") {
  const { default: pretty } = await import("pino-pretty");
  prettyStream = pretty({
    colorize: true,
  });
}

export function requestLogger() {
  return prettyStream ? PinoHttp(prettyStream) : PinoHttp();
}
