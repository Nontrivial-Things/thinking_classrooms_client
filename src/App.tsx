import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import ProblemIndex from "./components/pages/ProblemIndex";
import DetailedProblemView from "./components/pages/DetailedProblemView";
import AboutMethod from "./components/molecules/AboutMethod";
import Moderator from "./components/molecules/Moderator";
import LandingPage from "./components/pages/LandingPage";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element {<LandingPage/>}> */}
        <Route path="/" element={<ProblemIndex />} />
        <Route path="/problems/:problemId" element={<DetailedProblemView />} />
        <Route path="/about" element={<AboutMethod />} />
        <Route path="/moderator" element={<Moderator />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
