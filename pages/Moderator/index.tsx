import { FC } from "react";
import { useRouter } from "next/router";
import Wrapper from "../../components/atoms/Wrapper";

const Moderator: FC = () => {
  if (typeof window !== "undefined") {
    const navigate = useRouter();

    const user = localStorage.getItem("user");

    // If there is no access token we redirect to "/" page.
    if (!user) {
      navigate.replace("/login");
      return null;
    }

    // If this is an accessToken we just render the component that was passed with all its props

    return (
      <Wrapper margin="3rem" minHeight="90vh">
        <h2>Witaj, moderatorze!</h2>
      </Wrapper>
    );
  }
};

export default Moderator;
