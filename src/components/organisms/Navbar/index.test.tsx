import { screen } from "@testing-library/react";

import { testRenderer } from "../../../setupTests";
import Navbar from "./index";

describe("Navbar", () => {
  it("should open menu when Hamburger is clicked", () => {
    testRenderer(<Navbar />);

    expect(screen.getByRole("button", { name: /hamburgerAlt/ }));
    expect(screen.getByText("aboutMethodPageLink")).toBeInTheDocument();
    expect(screen.getByText("moderatorPageLink")).toBeInTheDocument();
  });
});
