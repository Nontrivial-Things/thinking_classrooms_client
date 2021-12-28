import { screen } from "@testing-library/react";

import { testRenderer } from "../../../setupTests";
import Navbar from "./index";

describe("Navbar", () => {
  it("should open menu when Hamburger is clicked", () => {
    testRenderer(<Navbar />);

    expect(screen.getByRole("button", { name: /otwórz menu/i }));
    expect(screen.getByText("O metodzie")).toBeInTheDocument();
    expect(screen.getByText("Strefa moderatora")).toBeInTheDocument();
  });
});
