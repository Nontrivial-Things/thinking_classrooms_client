import { render, screen } from "@testing-library/react";

import Footer from "./index";

describe("Footer", () => {
  it("should include email address in footer", () => {
    render(<Footer />);

    expect(screen.getByText("Kontakt")).toBeInTheDocument();
    expect(screen.getByText("myslaceklasy@email.com")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "mailto:myslaceklasy@email.com"
    );
  });
});
