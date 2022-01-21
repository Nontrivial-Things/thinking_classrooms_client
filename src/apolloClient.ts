import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import useAuth from "./auth/AuthProvider";

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
// const link = new HttpLink({
//   uri: "http://localhost:9779",
//   fetch: (...args) => fetch(...args),
// });

export const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
});
