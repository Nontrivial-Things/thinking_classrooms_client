import { Suspense } from "react";
import { NextIntlProvider, IntlErrorCode } from "next-intl";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";

import GlobalStyle from "../styles/global-styles";
import { client } from "../apolloClient";
import { AuthProvider } from "../auth/AuthProvider";

import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

require("../mocks");

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ApolloProvider client={client(true)}>
        <AuthProvider>
          <>
            <Suspense fallback={null}>
              <GlobalStyle />
              <Header {...pageProps} />
              <Component {...pageProps} />
              <Footer {...pageProps} />
            </Suspense>
          </>
        </AuthProvider>
      </ApolloProvider>
    </NextIntlProvider>
  );
}
