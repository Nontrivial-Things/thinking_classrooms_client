import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "jest-canvas-mock";

import { client } from "./apolloClient";
import { server } from "./mocks/server";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

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

export const testRenderer = (children, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(<ApolloProvider client={client}>{children}</ApolloProvider>, {
    wrapper: BrowserRouter,
  });
};
