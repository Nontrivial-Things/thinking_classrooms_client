import { FC } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProblemIndex from "./components/ProblemIndex";
import SearchInput from "./components/Input";

const App: FC = () => {
  return (
    <>
      <Navbar />

      <SearchInput
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands",
        ]}
      />
      <ProblemIndex />
      <Footer />
    </>
  );
};

export default App;
