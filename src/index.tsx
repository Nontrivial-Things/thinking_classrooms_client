/* eslint @typescript-eslint/no-var-requires: "off" */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import App from "./App";
import { client } from "./apolloClient";
import GlobalStyle from "./assets/styles/global-styles";

import "./i18n";
import { AuthProvider } from "./auth/AuthProvider";

const { worker } = require("./mocks/browser");
worker.start();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
