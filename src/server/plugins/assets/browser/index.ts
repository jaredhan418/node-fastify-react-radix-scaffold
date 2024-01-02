import type { FastifyInstance } from "fastify";

import { getWebAssetsProxyEnabled } from "../../../utils/index.js";
import { distAssetsPlugin } from "./dist-browser.js";
import { webDevAssetsPlugin } from "./web-dev-server.js";

export async function assetsPlugin(fastify: FastifyInstance) {
  if (getWebAssetsProxyEnabled()) {
    fastify.register(webDevAssetsPlugin);
  } else {
    fastify.register(distAssetsPlugin);
  }
}
