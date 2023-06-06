import { Environment } from "./interfaces";

export const environments: Environment[] = [
  {
    name: "local",
    server: "http://localhost:8000/",
  },
  {
    name: "development",
    server: "https://dev.api.choir.zerodayone.in/",
  },
  {
    name: "staging",
    server: "https://staging.api.choir.zerodayone.in/",
  },
  {
    name: "production",
    server: "https://api.choir.zerodayone.in/",
  },
];
