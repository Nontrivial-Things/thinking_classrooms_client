import { FC } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProblemIndex from "./components/ProblemIndex";
import ProblemSearchSection from "./components/ProblemSearchSection";

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
