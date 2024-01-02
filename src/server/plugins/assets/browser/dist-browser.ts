import fastifyCompress from "@fastify/compress";
import staticAssets from "@fastify/static";
import type { FastifyInstance } from "fastify";
import path from "path";

const distDirPath = path.join(process.cwd(), "dist", "browser");

export async function distAssetsPlugin(fastify: FastifyInstance) {
  fastify.register(fastifyCompress, {
    threshold: 20480,
  });

  fastify.register(staticAssets, {
    index: "index.html",
    maxAge: 0,
    root: distDirPath,
  });

  fastify.setNotFoundHandler((_, reply) => {
    return reply.sendFile("index.html");
  });
}
