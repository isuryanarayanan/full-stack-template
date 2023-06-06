import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { apps } from "../apps";
import { environments } from "../environments";

//client deals with all the mutations related to creating and registering account 

const clientMode = process.env.NODE_ENV || "development";
const env = environments.find((env) => env.name === clientMode);
const app = apps.find((app) => app.name === "accounts");


if (!env) {
  throw new Error("No environment with the matching name was found");
}

if (!app) {
  throw new Error("No app with the matching name was found");
}




const AccountsClient = new ApolloClient({
  link: new HttpLink({
    uri: env.server + app.endpoint,
   
  }),
  cache: new InMemoryCache(),
 

});

export { AccountsClient };


