import React, { Suspense } from "react";
import { NextIntlProvider } from "next-intl";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { NextPage } from "next";

import GlobalStyle from "../styles/global-styles";
import { client } from "../apolloClient";
import { AuthProvider } from "../auth/AuthProvider";

import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import RequireAuth from "../auth/RequireAuth";

require("../mocks");
export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
};

export default function MyApp(props: AppProps) {
  const {
    Component,
    pageProps,
  }: { Component: NextApplicationPage; pageProps: any } = props;
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ApolloProvider client={client(true)}>
        <AuthProvider>
          <>
            <Suspense fallback={null}>
              <GlobalStyle />
              <Header {...pageProps} />
              {Component.requireAuth ? (
                <RequireAuth>
                  <Component {...pageProps} />
                </RequireAuth>
              ) : (
                <Component {...pageProps} />
              )}
              <Footer {...pageProps} />
            </Suspense>
          </>
        </AuthProvider>
      </ApolloProvider>
    </NextIntlProvider>
  );
}
