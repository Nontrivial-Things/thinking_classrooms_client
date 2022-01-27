import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const user = localStorage.getItem("user");
  const parsedUserData = user && JSON.parse(user);
  return {
    headers: {
      ...headers,
      authorization:
        parsedUserData && parsedUserData.token
          ? `Bearer ${parsedUserData.token}`
          : "",
    },
  };
});

export const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
});
