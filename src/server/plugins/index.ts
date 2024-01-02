import cookie from "@fastify/cookie";
import fastifySession from "@fastify/session";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { type FastifyInstance } from "fastify";
import fp from "fastify-plugin";

import { getHostingEnv } from "../utils/index.js";
import { assets } from "./assets/index.js";
import { sessionConfig } from "./session/config.js";
import { apiDoc } from "./swagger/index.js";

/** Registe all root plugins */
export async function registeRootPlugins(rootInstance: FastifyInstance) {
  await rootInstance.register(cookie);
  await rootInstance.register(fastifySession, sessionConfig());
  await rootInstance.register(fp(assets));

  if (getHostingEnv() !== "Production") {
    await rootInstance.register(fastifySwagger, { openapi: apiDoc });
    await rootInstance.register(fastifySwaggerUi, {
      routePrefix: "docs",
    });
  }

  await rootInstance.get("/healthy", (_, reply) => reply.send("I'am alive!"));
}
