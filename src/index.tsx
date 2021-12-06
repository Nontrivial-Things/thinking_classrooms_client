/* eslint @typescript-eslint/no-var-requires: "off" */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./assets/styles/global-styles";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const client = new ApolloClient({
  uri: "http://localhost:9779",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
