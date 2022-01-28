import { screen } from "@testing-library/react";

import { testRenderer } from "../../../setupTests";
import Header from "./index";

describe("Header", () => {
  it("should open menu when Hamburger is clicked", () => {
    testRenderer(<Header />);

    expect(screen.getByRole("button", { name: /hamburgerAlt/ }));
    expect(screen.getByText("aboutMethodPageLink")).toBeInTheDocument();
    expect(screen.getByText("moderatorPageLink")).toBeInTheDocument();
  });
});
