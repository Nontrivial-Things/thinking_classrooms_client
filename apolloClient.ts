import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { getUserDataFromStorage } from "./auth/utils";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
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

// export const client = new ApolloClient({
//   ssrMode: typeof window === "undefined",
//   cache,
//   link: authLink.concat(httpLink),
// });

let CLIENT: ApolloClient<NormalizedCacheObject>;

export function client(forceNew: boolean) {
  if (!CLIENT || forceNew) {
    CLIENT = new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: authLink.concat(httpLink),
      cache: cache,
    });
  }

  return CLIENT;
}
