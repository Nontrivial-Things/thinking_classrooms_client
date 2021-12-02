import { render, screen } from "@testing-library/react";

import ResultCountWrapper from "./index";

describe("ResultCountWrapper", () => {
  it("displays given count number", () => {
    render(<ResultCountWrapper count={3} />);
    expect(screen.getByText("Wyniki wyszukiwania (3)")).toBeInTheDocument();
  });
});
