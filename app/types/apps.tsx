export interface App {
  name: string;
  description: string;
  endpoint: string;
  version: string;
}

export const APPS: App[] = [
  {
    name: "Accounts",
    description: "Accounts application",
    endpoint: "/accounts",
    version: "v1",
  },
];
