import Fastify from "fastify";
import { pino } from "pino";

import { prisma } from "./db/index.js";
import { registeRootPlugins } from "./plugins/index.js";
import { getLoggerOptions } from "./utils/logger-utils.js";

const logger = pino({
  name: "server start",
});

const SERVER_PORT = 8079;

const fastify = Fastify({
  logger: getLoggerOptions(),
});

await registeRootPlugins(fastify);

await fastify.ready();

const onFastServerListen = (err: null | Error, address: string) => {
  if (err) {
    return logger.info(
      " Fast server met error. here is some error message",
      err,
    );
  }
  return logger.info(`Fast server is listening at ${address}!`);
};

fastify.listen({ port: SERVER_PORT }, onFastServerListen);

const onCloseSignal = async () => {
  logger.info("signal received");

  if (fastify) {
    logger.info("closing fast server");
    await prisma.$disconnect();
    fastify.close(() => {
      logger.info("fast server closed");
      process.exit();
    });
  }
};
process.on("SIGINT", onCloseSignal);
process.on("SIGTERM", onCloseSignal);
