import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { initialize } from "express-openapi";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from "url";

import { apiDoc } from "./api-doc.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const initOpenAPI = async () => {
  // create new express instance for attach openapi to sub path
  const app = express();

  await initialize({
    apiDoc,
    app,
    dependencies: {},
    docsPath: "/swagger.json",
    paths: path.resolve(__dirname, "paths"),
    promiseMode: true,
    routesGlob: "**/*.{ts,js}",
    securityHandlers: {},
    errorMiddleware: (
      err: any,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      if (err.status === 401) {
        res.status(401).send(err);
      } else {
        res.status(400).send(err);
      }
    },
  });

  app.use("/swagger", swaggerUi.serve);
  app.get(
    "/swagger",
    swaggerUi.setup(null as any, {
      swaggerOptions: {
        url: "/api/swagger.json",
      },
    })
  );

  app.use("/*", (req, res) => res.send(404));

  return app;
};
