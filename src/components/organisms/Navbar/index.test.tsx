import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testRenderer } from "../../../setupTests";
import AboutMethodPage from "../../pages/AboutMethodPage";
import ProblemsPage from "../../pages/ProblemsPage";
import Navbar from "./index";

describe("Navbar", () => {
  it("should open menu when Hamburger is clicked", () => {
    testRenderer(<Navbar />);

    expect(screen.getByRole("button", { name: /otwórz menu/i }));
    expect(screen.getByText("O metodzie")).toBeInTheDocument();
    expect(screen.getByText("Strefa moderatora")).toBeInTheDocument();
  });

  it.only("navigates to 'O metodzie' page after clicking on it on header", async () => {
    testRenderer(
      <>
        <Navbar />
        <ProblemsPage />
        <AboutMethodPage />
      </>
    );
    const about = screen.getByText(/O metodzie/i);
    userEvent.click(about);

    expect(screen.getByText("Co to są Myślące Klasy?")).toBeInTheDocument();
  });
});
