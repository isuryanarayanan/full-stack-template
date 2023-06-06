export interface Environment {
  // Environment type will be used to define new environments,
  // Environment will have a name, an app and server endpoint
  name: string;
  server: string; // api.glitchh.in
}

export interface App {
  // App type will be used to define new apps, apps will have a name
  // an endpoint, and a list of mutations
  name: string;
  endpoint: string; // accounts/graphql
}

export interface Mutation {
  // This mutation type will be used to define new mutations,
  // each mutation will have a name
  name: string;
  request: string;
  body: string;
  args: any[];
}

export interface Query {
  // This query type will be used to define new queries,
  // each query will have a name, a query, and a list of args
  
  name: string;
  request: string;
  body: string;
  args: any[];
}
