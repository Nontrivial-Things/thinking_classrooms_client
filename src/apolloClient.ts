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
  const { user } = useAuth();
  console.log(user);
  return {
    headers: {
      ...headers,
      authorization: user && user.token ? `Bearer ${user.token}` : "",
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
