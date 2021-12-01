import { FC } from "react";

import Navbar from "./components/atoms/Navbar";
import Footer from "./components/molecules/Footer";
import ProblemIndex from "./components/organisms/ProblemIndex";
import ProblemSearchSection from "./components/molecules/ProblemSearchSection";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <ProblemSearchSection />
      <ProblemIndex />
      <Footer />
    </>
  );
};

export default App;
