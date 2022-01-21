import { FC } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../atoms/Wrapper";

const Moderator: FC = () => {
  return (
    <>
      <h2>Witaj, moderatorze!</h2>
      <Wrapper minHeight="50vh"></Wrapper>
      <Link to="/">Wyszukaj problem</Link>
    </>
  );
};

export default Moderator;
