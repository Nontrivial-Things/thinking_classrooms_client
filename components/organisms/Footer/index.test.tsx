import { screen } from "@testing-library/react";

import { testRenderer } from "../../../setupTests";
import Footer from "./index";

describe("Footer", () => {
  it("should include email address in footer", () => {
    testRenderer(<Footer />);

    expect(screen.getByText("contact")).toBeInTheDocument();
    expect(screen.getByText("email")).toBeInTheDocument();
    expect(screen.getAllByRole("link")[1]).toHaveAttribute(
      "href",
      "mailto:email"
    );
  });
});
