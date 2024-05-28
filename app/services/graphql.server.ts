import { ApolloClient, InMemoryCache } from "@apollo/client/index";

let endpoint = ""

export const client = () => new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache({
      addTypename: false
    }),
});

export const clientWithToken = (token: string) => new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache({
    addTypename: false
  }),
  headers: {
    Authorization: `Bearer ${token}`
  },
});

export const setEndpoint = (newEndpoint: string) => {
  endpoint = newEndpoint
}
