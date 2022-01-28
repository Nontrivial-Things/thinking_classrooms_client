import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import ProblemsPage from "./components/pages/ProblemsPage";
import ProblemDetailedPage from "./components/pages/ProblemDetailedPage";
import AboutMethodPage from "./components/pages/AboutMethodPage";
import Moderator from "./components/pages/Moderator";
import LoginPage from "./components/pages/LoginPage";
import { AuthProvider } from "./auth/AuthProvider";
import RequireAuth from "./auth/RequireAuth";

const App: FC = () => {
  return (
    <AuthProvider>
      <Suspense fallback={null}>
        <Header />
        <Routes>
          {/* <Route path="/" element {<LandingPage/>}> */}
          <Route path="/" element={<ProblemsPage />} />
          <Route
            path="/problems/:problemId"
            element={<ProblemDetailedPage />}
          />
          <Route path="/about" element={<AboutMethodPage />} />
          <Route
            path="/moderator"
            element={
              <RequireAuth>
                <Moderator />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </AuthProvider>
  );
};

export default App;
