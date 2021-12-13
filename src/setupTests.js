import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";
import { server } from "./mocks/server";

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  return client.clearStore();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

export const testRenderer = (children) =>
  render(<ApolloProvider client={client}>{children}</ApolloProvider>);
