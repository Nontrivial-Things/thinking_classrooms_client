import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import useAuth from "../src/auth/AuthProvider";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;

const Index = () => {
  const router = useRouter();
  const { signin, user, loginError, loading, setLoginError } = useAuth();

  const shouldRedirect = !(loading || loginError || user);

  useEffect(() => {
    if (shouldRedirect) {
      router.push("/problem-page");
    }
  }, [shouldRedirect]);

  if (loginError) {
    return <p>{loginError.message}</p>;
  }
  console.log(user);
  if (!user) {
    return (
      <div>
        You're signed in as goto{" "}
        <Link href="/about-method">
          <a>about</a>
        </Link>{" "}
        page. or{" "}
        <Link href="/moderator">
          <a>Moderator</a>
        </Link>
        <Link href="/problems-page">
          <a>problems</a>
        </Link>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default Index;
