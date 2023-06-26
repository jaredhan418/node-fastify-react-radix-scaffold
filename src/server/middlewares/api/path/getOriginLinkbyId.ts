import type { RequestHandler } from "express";

type GetOriginLinkByIdParams = {
  shortLinkId: string;
};

export const getOriginLinkById: RequestHandler<GetOriginLinkByIdParams> = (
  req,
  res
) => {
  const { shortLinkId } = req.params;

  return res.status(200).send(shortLinkId);
};
