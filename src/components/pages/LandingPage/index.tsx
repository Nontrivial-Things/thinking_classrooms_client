import { FC } from "react";
import { Link } from "react-router-dom";

const LandingPage: FC = () => {
  return (
    <>
      <span>To jest strona główna</span>
      <br></br>
      <Link to="/">Wyszukaj problem</Link>
    </>
  );
};

export default LandingPage;
