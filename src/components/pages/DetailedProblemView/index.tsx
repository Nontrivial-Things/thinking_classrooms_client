import { FC } from "react";
import { Link } from "react-router-dom";

const DetailedProblemView: FC = () => {
  return (
    <>
      <span>Opis problemu</span>
      <br></br>
      <Link to="/problemindex">Wyszukaj problem</Link>
    </>
  );
};

export default DetailedProblemView;
