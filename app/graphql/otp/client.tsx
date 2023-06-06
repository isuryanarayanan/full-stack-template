import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { apps } from "../apps";
import { environments } from "../environments";

//this client deals with all the mutations related to otp and verifications 

const clientMode = process.env.NODE_ENV || "development";
const env = environments.find((env) => env.name === clientMode);
const otp = apps.find((otp) => otp.name === "otp");



if (!env) {
  throw new Error("No environment with the matching name was found");
}

if (!otp) {
  throw new Error("No app with the matching name was found");
}

const OtpClient = new ApolloClient({
  link: new HttpLink({
    uri: env.server + otp.endpoint,
  }),
  cache: new InMemoryCache(),
});

const AuthorizedOtpClient = new ApolloClient({
  link: new HttpLink({
    uri: env.server + otp.endpoint,
   
  }),
  cache: new InMemoryCache(),
});

export { OtpClient,AuthorizedOtpClient };
