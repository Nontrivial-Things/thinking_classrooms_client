import { FC } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProblemIndex from "./components/ProblemIndex";
import SearchingSection from "./components/SearchingSection";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <SearchingSection />
      <ProblemIndex />
      <Footer />
    </>
  );
};

export default App;
