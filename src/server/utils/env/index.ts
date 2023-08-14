const { HOSTING_ENV } = process.env;

export function getHostingEnv(): "Localhost" | "Production" {
  switch (HOSTING_ENV) {
    case "Localhost":
    case "Production":
      return HOSTING_ENV;
    default:
      throw new Error("Not defien Env");
  }
}
