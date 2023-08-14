import type { Request, Response } from "express";
import type { Operation } from "express-openapi";
import type { OpenAPIV3 } from "openapi-types";

const apiDoc: OpenAPIV3.OperationObject = {
  operationId: "hello",
  responses: {
    200: {
      description: "hello",
    },
    default: {
      description: "An error occurred",
    },
  },
  summary: "Hello",
  tags: ["Hello"],
};

export default function Hello(): Operation {
  const operations = {
    GET,
  };

  async function GET(req: Request, res: Response) {
    res.status(200).send("Hello");
  }

  GET.apiDoc = apiDoc;

  return operations;
}
