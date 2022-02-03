import { FC } from "react";
import Link from "next/link";

const LandingPage: FC = () => {
  return (
    <>
      <span>To jest strona główna</span>
      <br></br>
      <Link href="/">Wyszukaj problem</Link>
    </>
  );
};

export default LandingPage;
