import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: ['*.graphql', 'src/**/*.tsx'],
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;
