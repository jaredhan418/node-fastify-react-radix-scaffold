import epxressSession from "express-session";

import { getHostingEnv } from "../../utils/index.js";

const TWELVE_HOURS_IN_MS = 1000 * 60 * 60 * 12;

export function session() {
  return epxressSession({
    cookie: {
      httpOnly: true,
      maxAge: TWELVE_HOURS_IN_MS,
      sameSite: getHostingEnv() === "Localhost" ? "none" : "lax",
      secure: getHostingEnv() !== "Localhost",
    },
    name: "sessionid",
    resave: false,
    secret: "sessionsecret",
  });
}
