import { useEffect } from "react";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import useAuth from "../auth/AuthProvider";
import { useTranslations } from "next-intl";

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

  const shouldRedirect = !(loading || loginError);
  const t = useTranslations("problemsPage");

  useEffect(() => {
    if (shouldRedirect) {
      router.push("/problems-page");
    }
  }, [shouldRedirect]);

  if (loginError) {
    return <p>{loginError.message}</p>;
  }

  return <p>Loading...</p>;
};

export default Index;
