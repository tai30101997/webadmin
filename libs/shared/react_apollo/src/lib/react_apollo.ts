import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";
import { useMemo } from "react";
const GRAPHQL_URL = process.env.BACKEND_URL;

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: GRAPHQL_URL, credentials: "same-origin" }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });
}

export function useApollo() {
  const client = useMemo(() => createApolloClient(), []);
  return client;
}
