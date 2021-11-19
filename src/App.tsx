import { FC } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResultCountLabel from "./components/ResultCountLabel";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <ResultCountLabel count={3}></ResultCountLabel>
      <Footer />
    </>
  );
};

export default App;
