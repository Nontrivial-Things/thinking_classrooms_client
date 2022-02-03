import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global-styles";
import { client } from "../src/apolloClient";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
