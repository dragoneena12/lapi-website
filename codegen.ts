import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['app/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './app/generated/': {
      preset: 'client',
      config: {
        skipTypename: true
      },
    }
  }
}
 
export default config
