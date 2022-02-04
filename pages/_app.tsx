import { Suspense } from "react";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global-styles";
import { client } from "../apolloClient";

import { NextIntlProvider } from "next-intl";

import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { AuthProvider } from "../auth/AuthProvider";

require("../mocks");

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ApolloProvider client={client}>
        <AuthProvider>
          <>
            {/* <Suspense fallback={null}> */}
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
            <Footer />
            {/* </Suspense> */}
          </>
        </AuthProvider>
      </ApolloProvider>
    </NextIntlProvider>
  );
}
