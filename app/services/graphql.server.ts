import { Env } from "@/types/env";
import { ApolloClient, InMemoryCache } from "@apollo/client/index";
import { AppLoadContext } from "@remix-run/cloudflare";

export const client = (context: AppLoadContext) => {
  const env = context.cloudflare.env as Env;
  const apiEndpoint = env.API_ENDPOINT;
  return new ApolloClient({
    uri: apiEndpoint,
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });
};

export const clientWithToken = (context: AppLoadContext, token: string) => {
  const env = context.cloudflare.env as Env;
  const apiEndpoint = env.API_ENDPOINT;
  return new ApolloClient({
    uri: apiEndpoint,
    cache: new InMemoryCache({
      addTypename: false,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
