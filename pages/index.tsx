import { useEffect } from "react";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import useAuth from "../auth/AuthProvider";

import { useTranslations } from "next-intl";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

const Index = () => {
  const router = useRouter();
  const { user, loginError, loading } = useAuth();

  const shouldRedirect = !(loading || loginError || user);
  const t = useTranslations("problemsPage");

  // useEffect(() => {
  //   if (shouldRedirect) {
  //     router.push("/problem-page");
  //   }
  // }, [shouldRedirect]);

  // if (loginError) {
  //   return <p>{loginError.message}</p>;
  // }

  if (!user) {
    return (
      <div>
        <Link href="/about-method">
          <a>ABOUT</a>
        </Link>{" "}
        <Link href="/moderator">
          <a>MODERATOR</a>
        </Link>{" "}
        <Link href="/problems-page">
          <a>PROBLEMS</a>
        </Link>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default Index;
