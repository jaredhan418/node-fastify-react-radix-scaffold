import fastifyHttpProxy from "@fastify/http-proxy";
import type { FastifyInstance } from "fastify";
import { getWebDevServerPort } from "../../../utils/index.js";

const pathPrefix = "/";

export async function webDevAssetsPlugin(fastify: FastifyInstance) {
  const port = getWebDevServerPort();

  fastify.register(fastifyHttpProxy, {
    prefix: pathPrefix,
    upstream: `http://localhost:${port}`,
  });
}
