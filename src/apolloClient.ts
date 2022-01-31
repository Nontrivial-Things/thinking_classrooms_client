import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { getUserDataFromStorage } from "./auth/utils";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const userData = getUserDataFromStorage("user");

  return {
    headers: {
      ...headers,
      authorization:
        userData && userData.token ? `Bearer ${userData.token}` : "",
    },
  };
});

export const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
});
