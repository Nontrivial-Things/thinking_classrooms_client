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

function onError(error) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    // Missing translations are expected and ok
    console.error(error);
  } else {
    // Other errors indicate a bug in the app and should be reported
    reportToErrorTracking(error);
  }
}

function getMessageFallback({ namespace, key, error }) {
  const path = [namespace, key].filter((part) => part != null).join(".");

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} is not yet translated`;
  } else {
    return `Dear developer, please fix this: ${path}`;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={null}>
      <NextIntlProvider
        messages={pageProps.messages}
        onError={onError}
        getMessageFallback={getMessageFallback}
      >
        <ApolloProvider client={client(true)}>
          <AuthProvider>
            <>
              <GlobalStyle />
              <Header {...pageProps} />
              <Component {...pageProps} />
              <Footer {...pageProps} />
            </>
          </AuthProvider>
        </ApolloProvider>
      </NextIntlProvider>
    </Suspense>
  );
}
function reportToErrorTracking(error: any) {
  throw new Error("Function not implemented.");
}
