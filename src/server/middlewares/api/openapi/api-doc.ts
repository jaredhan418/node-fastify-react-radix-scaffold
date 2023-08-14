import type { OpenAPIV3 } from "openapi-types";

export const apiDoc: OpenAPIV3.Document = {
  components: {
    securitySchemes: {},
  },
  info: {
    title: "Node short link Doc.",
    version: "1.0.0",
  },
  openapi: "3.0.0",
  paths: {},
  servers: [{ url: "/" }],
};
