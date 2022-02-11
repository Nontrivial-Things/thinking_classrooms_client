import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";

import Wrapper from "../../components/atoms/Wrapper";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}

function Moderator() {
  const navigate = useRouter();

  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate.replace("/login");
      return null;
    }
  }

  return (
    <Wrapper margin="3rem" minHeight="90vh">
      <h2>Witaj, moderatorze!</h2>
    </Wrapper>
  );
}

export default Moderator;

Moderator.requireAuth = true;
