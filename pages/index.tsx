import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import useAuth from "../auth/AuthProvider";

const Index = () => {
  const router = useRouter();
  const { user, loginError, loading } = useAuth();

  const shouldRedirect = !(loading || loginError || user);

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
        You're signed in{" "}
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
