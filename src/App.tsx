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
<<<<<<< HEAD
      <ProblemIndex />
=======
      <ResultCountLabel count={3} />
      {/* <Tag text="ciągi" isDroppable={true} />
      <Tag text="ciągi" /> */}
>>>>>>> e649e81 (Small style refactor after merging main branch)

      <Footer />
    </>
  );
};

export default App;
