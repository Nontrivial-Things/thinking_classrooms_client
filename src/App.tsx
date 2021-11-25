import { FC } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResultCountLabel from "./components/ResultCountLabel";
import Tag from "./components/Tag";
import { ButtonPrimaryActive } from "./components/Button/styledComponents";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <ResultCountLabel count={3} />
      <Tag text="ciągi" isDroppable={true} />
      <Tag text="ciągi" />
      <ButtonPrimaryActive>Zaloguj się</ButtonPrimaryActive>
      <Footer />
    </>
  );
};

export default App;
