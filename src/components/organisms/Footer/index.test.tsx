import { screen } from "@testing-library/react";

import { testRenderer } from "../../../setupTests";
import Footer from "./index";

describe("Footer", () => {
  it("should include email address in footer", () => {
    testRenderer(<Footer />);

    expect(screen.getByText("Kontakt")).toBeInTheDocument();
    expect(screen.getByText("myslaceklasy@email.com")).toBeInTheDocument();
    expect(screen.getAllByRole("link")[1]).toHaveAttribute(
      "href",
      "mailto:myslaceklasy@email.com"
    );
  });
});
