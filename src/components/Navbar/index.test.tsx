import { render, screen, fireEvent } from "@testing-library/react";

import Navbar from "./index";

describe("Navbar", () => {
  it("should open menu when Hamburger is clicked", () => {
    render(<Navbar />);

    expect(screen.getByRole("button", { name: /otwórz menu/i }));
    expect(screen.getByText("O metodzie")).toBeInTheDocument();
    expect(screen.getByText("Strefa moderatora")).toBeInTheDocument();
  });
});
