import type { FastifyInstance } from "fastify";
import { assetsPlugin } from "./browser/index.js";

export async function assets(fastify: FastifyInstance) {
  fastify.register(assetsPlugin);
}
