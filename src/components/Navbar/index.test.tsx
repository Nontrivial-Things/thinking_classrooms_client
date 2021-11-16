import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import HamburgerImg from "./index";
import NavbarMenu from "./index";
import Navbar from "./index";

describe("Navbar", () => {
  it("should open menu when Hamburger is clicked", () => {
    const { debug } = render(<Navbar />);

    const hamburger = screen.getByAltText("Hamburger menu icon");
    const menu = screen.getByTestId("Menu");

    fireEvent.click(hamburger);

    debug();
    expect(menu).toHaveClass("active");
  });
  it("should include proper menu item names", () => {
    const { debug } = render(<Navbar />);

    debug();
    expect(screen.getByText("O metodzie")).toBeInTheDocument();
    expect(screen.getByText("Strefa moderatora")).toBeInTheDocument();
  });
});
