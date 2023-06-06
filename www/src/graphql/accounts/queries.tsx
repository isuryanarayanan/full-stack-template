// Queries for the accounts app are defined here
import { Query } from "../interfaces";

export const fetchUsers: Query = {
  name: "fetchUsers",
  request: `
    query FetchUsers {
      ---query---
    }
  `,
  body: `
    users {
      id
      username
    }
  `,

  args: [],
};
