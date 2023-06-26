import type { RequestHandler } from "express";

type CreateShortLinkBody = {
  originLink: string;
};

export const createShortLink: RequestHandler<
  unknown,
  unknown,
  CreateShortLinkBody
> = (req, res) => {
  const { originLink } = req.body;

  const trimOringinLink = originLink.trim();

  return res.status(200).send();
};
