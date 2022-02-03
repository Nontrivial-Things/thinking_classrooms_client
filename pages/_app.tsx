import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global-styles";
import { client } from "../src/apolloClient";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { AuthProvider } from "../src/auth/AuthProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      </AuthProvider>
    </ApolloProvider>
  );
}
