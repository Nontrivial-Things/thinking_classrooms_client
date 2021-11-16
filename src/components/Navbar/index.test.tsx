import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import HamburgerImg from "./index";
import NavbarMenu from "./index";
import Navbar from "./index";

describe("Navbar", () => {
  it("should open menu when Hamburger is clicked", () => {
    const { debug } = render(<Navbar />);

    const hamburger = screen.getByTestId("ClickIndicator");
    const menu = screen.getByTestId("Menu");

    fireEvent.click(hamburger);

    debug();
    expect(menu).toHaveClass("active");
  });
});
