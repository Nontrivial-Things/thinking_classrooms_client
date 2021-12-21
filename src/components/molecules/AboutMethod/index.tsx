import { FC } from "react";
import { Link } from "react-router-dom";

const AboutMethod: FC = () => {
  return (
    <>
      <span>O metodzie</span>
      <br></br>
      <Link to="/problemindex">Wyszukaj problem</Link>
    </>
  );
};

export default AboutMethod;
