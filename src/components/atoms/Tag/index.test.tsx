import { render, screen } from "@testing-library/react";

import Tag from "./index";

describe("ResultCountWrapper", () => {
  it("displays given text in tag", () => {
    render(<Tag text="ciągi" />);
    const button = screen.queryByRole("button", { name: /Usuń tag/i });

    expect(screen.getByText("ciągi")).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });

  it("displays given text in tag and a remove tag button", () => {
    render(<Tag text="ciągi" isDroppable={true} />);
    const button = screen.getByRole("button", { name: /Usuń tag/i });

    expect(screen.getByText("ciągi")).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
