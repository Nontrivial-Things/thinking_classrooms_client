import React, { FC } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App: FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <Footer />
    </>
  );
};

export default App;
