import { FC } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResultCountLabel from "./components/ResultCountLabel";
import Tag from "./components/Tag";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <ResultCountLabel count={3}></ResultCountLabel>
      <Footer />
      <Tag text="ciągi" isDroppable={true} />
      <Tag text="ciągi" />
    </>
  );
};

export default App;
