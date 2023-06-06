
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/accounts/",
  documents: "graphql/**/*.tsx",
  generates: {
    "graphql/gql/": {
      preset: "client",
      plugins: []
    },
  }
};

export default config;
