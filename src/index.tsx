/* eslint @typescript-eslint/no-var-requires: "off" */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./assets/styles/global-styles";

import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
