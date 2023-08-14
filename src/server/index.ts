import express from "express";

import { middlewares } from "./middlewares/index.js";
import { prisma } from "./db/index.js";

const SERVER_PORT = 8079;

const app = express();

app.use(await middlewares());

const onServerListen = (...args: unknown[]) => {
  if (args.length !== 0) {
    return console.log("server is listening. here is some args", args);
  }
  return console.log(`server is listening at ${SERVER_PORT}!`);
};

const server = app.listen(SERVER_PORT, onServerListen);

const onCloseSignal = async () => {
  console.log("signal received");

  if (server) {
    console.log("closing server");
    await prisma.$disconnect();
    server.close(() => {
      console.log("server closed");
      process.exit();
    });
  }
};
process.on("SIGINT", onCloseSignal);
process.on("SIGTERM", onCloseSignal);
