import { FC } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResultCountLabel from "./components/ResultCountLabel";
import Tag from "./components/Tag";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "./components/Button/styledComponents";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <ResultCountLabel count={3} />
      <Tag text="ciągi" isDroppable={true} />
      <Tag text="ciągi" />
      <ButtonPrimary>Zaloguj się</ButtonPrimary>
      <ButtonSecondary>Zobacz treść</ButtonSecondary>
      <Footer />
    </>
  );
};

export default App;
