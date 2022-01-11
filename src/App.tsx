import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import ProblemsPage from "./components/pages/ProblemsPage";
import ProblemDetailedPage from "./components/pages/ProblemDetailedPage";
import AboutMethodPage from "./components/pages/AboutMethodPage";
import Moderator from "./components/pages/Moderator";

const App: FC = () => {
  return (
    <Suspense fallback="loading">
      <Navbar />
      <Routes>
        {/* <Route path="/" element {<LandingPage/>}> */}
        <Route path="/" element={<ProblemsPage />} />
        <Route path="/problems/:problemId" element={<ProblemDetailedPage />} />
        <Route path="/about" element={<AboutMethodPage />} />
        <Route path="/moderator" element={<Moderator />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default App;
