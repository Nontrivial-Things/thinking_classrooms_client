import { FC } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProblemIndex from "./components/ProblemIndex";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <ProblemIndex />
      <Footer />
    </>
  );
};

export default App;
