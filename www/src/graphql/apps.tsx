// All apps which are being used should be registered here
import { App } from "./interfaces";

export const apps: App[] = [
  {
    name: "accounts",
    endpoint: "accounts/",
  },
  {
    name: "otp",
    endpoint: "otp/",
  },
];

// Check if all the apps have a unique name and a folder associated with it inside graphql folder
const appNames = apps.map((app) => app.name);
const uniqueAppNames = new Set(appNames);
if (appNames.length !== uniqueAppNames.size) {
  throw new Error("App names are not unique");
}
