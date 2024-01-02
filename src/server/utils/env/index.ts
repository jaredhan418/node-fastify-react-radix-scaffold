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

export const getSessionSecret = () => getEnviromentString("SESSION_SECRET");
export const getSessionId = () => getEnviromentString("SESSION_ID");
export const getWebDevServerPort = () =>
  getEnviromentNumber("WEB_DEV_SERVER_PORT");
export const getWebAssetsProxyEnabled = () =>
  getEnviromentBoolean("WEBASSETS_PROXY_ENABLED");

function getEnviromentString(key: string): string {
  const value = process.env[key];
  if (value == null) {
    throw new Error(getEnvErrorText(key));
  }

  return value;
}

function getEnviromentNumber(key: string): number {
  const strValue = getEnviromentString(key);
  const numValue = parseInt(strValue);
  if (Number.isNaN(numValue)) {
    throw new Error(`process.env.${key} must be a number!`);
  }

  return numValue;
}

function getEnviromentBoolean(key: string): boolean {
  const strValue = getEnviromentUnion(key, ["true", "false"]);

  return strValue === "true";
}

function getEnviromentUnion<T>(key: string, options: ReadonlyArray<T>): T {
  const forceTypedValue = getEnviromentString(key) as T;
  if (options.includes(forceTypedValue)) {
    return forceTypedValue;
  }
  throw new Error(
    `process.env.${key} must be ${options
      .map((value) => `'${value}'`)
      .join(" | ")}`,
  );
}

function getEnvErrorText(key: string) {
  return `Unknown process.env.${key}: ${process.env[key]}. Is your .env file setup?`;
}
