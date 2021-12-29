import { FC } from "react";
import { Link } from "react-router-dom";

const Moderator: FC = () => {
  return (
    <>
      <h2>Witaj, moderatorze!</h2>
      <Link to="/">Wyszukaj problem</Link>
    </>
  );
};

export default Moderator;
