import { FC } from "react";
import { Link } from "react-router-dom";

const AboutMethodPage: FC = () => {
  return (
    <>
      <span>O metodzie</span>
      <br></br>
      <Link to="/">Wyszukaj problem</Link>
    </>
  );
};

export default AboutMethodPage;
