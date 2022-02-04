import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import Wrapper from "../../components/atoms/Wrapper";

const Moderator: FC = () => {
  const navigate = useRouter();

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (!user) {
  //     navigate.replace("/login");
  //     return null;
  //   }
  // }, []);

  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate.replace("/login");
      return null;
    }
  }

  // If there is no access token we redirect to "/" page.

  // If this is an accessToken we just render the component that was passed with all its props

  return (
    <Wrapper margin="3rem" minHeight="90vh">
      <h2>Witaj, moderatorze!</h2>
    </Wrapper>
  );
};

export default Moderator;
