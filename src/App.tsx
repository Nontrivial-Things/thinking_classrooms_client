import { FC } from "react";

import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import ProblemIndex from "./components/pages/ProblemIndex";

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
