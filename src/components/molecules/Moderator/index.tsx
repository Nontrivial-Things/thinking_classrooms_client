import { FC } from "react";
import { Link } from "react-router-dom";

const Moderator: FC = () => {
  return (
    <>
      <span>Strefa moderatora</span>
      <br></br>
      <Link to="/problemindex">Wyszukaj problem</Link>
    </>
  );
};

export default Moderator;
