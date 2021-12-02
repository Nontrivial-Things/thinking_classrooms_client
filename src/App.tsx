import { FC } from "react";

import Navbar from "./components/atoms/Navbar";
import Footer from "./components/organisms/Footer";
import ProblemIndex from "./components/pages/ProblemIndex";
import ProblemSearchSection from "./components/organisms/ProblemSearchSection";

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
