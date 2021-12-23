import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import ProblemsPage from "./components/pages/ProblemsPage";
import ProblemDetailedPage from "./components/pages/ProblemDetailedPage";
import AboutMethodPage from "./components/pages/AboutMethodPage";
import Moderator from "./components/molecules/Moderator";
import LandingPage from "./components/pages/LandingPage";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element {<LandingPage/>}> */}
        <Route path="/" element={<ProblemsPage />} />
        <Route path="/problems/:problemId" element={<ProblemDetailedPage />} />
        <Route path="/about" element={<AboutMethodPage />} />
        <Route path="/moderator" element={<Moderator />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
